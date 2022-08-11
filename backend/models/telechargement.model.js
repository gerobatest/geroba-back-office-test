const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const telechargementSchema = new Schema({
    para1:{
        type: String 
    }, 
    para2:{
        type: String
    }
});

//nom de la collection
const telechargement = mongoose.model('telechargement',  telechargementSchema); 
                                        
module.exports = telechargement;