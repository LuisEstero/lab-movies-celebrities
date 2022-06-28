const celebrityModel = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model")

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
  
module.exports = router;