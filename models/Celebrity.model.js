
const mongoose = require('mongoose');

const celebritySchema  = new mongoose.Schema({
    name: {
        type : String,
    },
    ocupation: {
        type : String,
    },
    catchPhrase: {
        type : String,
    },

})
  
 const celebrityModel = mongoose.model('Celebrity', celebritySchema);
 module.exports = celebrityModel;
 
