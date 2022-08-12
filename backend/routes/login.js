const router = require('express').Router(); // route express. c'est un itinéraire
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let User = require('../models/user.model'); //pour exiger le model 


//qui gère les requetes http get entrantes sur le chemin d'URL des utilisateurs avec barre oblique. nous avons donc URL racine 
router.route('/').post((req, res) =>{

    //console.log("hi"); //on a accès ici
    console.log(req.body.username);
    console.log(req.body.password);

    User.findOne({ username:req.body.username}) //l'username existe?

    //si l'username est bon
    .then((user) => { //user?
        //comparer les mots de pause entrés et celle depuis la base de données
        bcrypt.compare(req.body.password,user.password)

            //si les mots de passes sont exactes
            .then((passwordCheck) => {

                console.log("display me!");

                if(!passwordCheck) {
                    return res.status(400).send({ 
                        message:  "Mauvais mot de passe", 
                    });
                }

                //crée JWT token??
                const token = jwt.sign(
                    {
                      userId: user._id,
                      userName: user.username,
                    },
                    "RANDOM-TOKEN",
                    { expiresIn: "24h" }
                );

                //retourne message succès si tout est bon
                res.status(200).send({ 
                    message: "Login succesful", 
                    username: user.username,
                    token,
                });

                console.log("Salut");
            })
            //mauvais mot de passe
            .catch((error) => {
                res.status(400).send({ 
                    message: "Mauvais mot de passe",
                    error,
                });
            })
    })

    //si l'username n'est pas correct
    .catch((e) => {
        res.status(404).send({ 
            message: "Wrong username",
            e,
        });
    });
});



module.exports = router; 