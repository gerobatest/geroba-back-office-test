const router = require('express').Router(); // route express. c'est un itinéraire
let aPropos = require('../models/aPropos.model'); //pour exiger le model 


//qui gère les requetes http get entrantes sur le chemin d'URL des utilisateurs avec barre oblique. nous avons donc URL racine 
router.route('/').get((req, res) =>{
    aPropos.find() // obtenir les donnée depuis la base de données

    .then(content => res.json(content))
    .catch(err => res.status(400).json('Error: ' * err)); //gère en cas d'erreur
});

router.route('/add').post((req, res) => { //une requete Post 

    const para1 = req.body.para1;
    const para2 = req.body.para2;
    const para3 = req.body.para3;
    const para4 = req.body.para4;
    const para5 = req.body.para5;

    const newAPropos = new aPropos({
        para1, 
        para2, 
        para3, 
        para4, 
        para5
    });

    newAPropos.save()
     .then(() => res.json('Content added!'))
     .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; 