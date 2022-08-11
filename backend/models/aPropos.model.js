const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const aProposSchema = new Schema({
    para1:{
        type: String 
    }, 
    para2:{
        type: String
    },
    para3:{
        type: String
    },
    para4:{
        type: String
    },
    para5:{
        type: String
    }
});

//nom de la collection
const aPropos = mongoose.model('aPropos',  aProposSchema); 
                                        
module.exports = aPropos;