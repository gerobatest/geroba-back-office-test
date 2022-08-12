const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{
        type: String,
        required: [true, "A username is required!"]
    }, 
    password:{
        type: String,
        required: [true, "A password is required!"]
    }
});


//Crée un tableau s'il non existe
//nom de la collection
const Users = mongoose.model('Users',  UserSchema); 
                                        
module.exports = Users;