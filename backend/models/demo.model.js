const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const demoSchema = new Schema({
    para1:{
        type: String 
    }, 
    para2:{
        type: String
    }
});

//nom de la collection
const demo = mongoose.model('demo',  demoSchema); 
                                        
module.exports = demo;