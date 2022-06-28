const mongoose = require('mongoose');

const movieSchema  = new mongoose.Schema({
    title: {
        type : String,
    },
    genre: {
        type : String,
    },
    plot: {
        type : String,
    },
    cast: [
        {

        }
    ],
    
})
  
 const movieModel = mongoose.model('Movie', celebritySchema);
 module.exports = movieModel;
 
