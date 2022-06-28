const celebrityModel = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie")

router.get("/celebrities/create", (req, res) => {
    
 res.render("celebrities/new-celebrity");
 });


router.post("/celebrities/create", (req, res, next) => {
    const { name ,occupation , catchPhrase } = req.body;
    
    Celebrity.create({name ,occupation , catchPhrase })
    
      .then(() => res.redirect("/celebrities")) 
      .catch((err) => {
        
        next(err);
      });
  });
  

router.get("/movie/create", (req, res) => {
    
  res.render("movie/new-movies");
  });



  router.post("/movie/create", (req, res, next) => {
    const { title ,genre,plot,cast } = req.body;
    
    Movie.create({name ,occupation , catchPhrase })
    
      .then(() => res.redirect("/movie")) 
      .catch((err) => {
        
        next(err);
      });
  });
module.exports = router;