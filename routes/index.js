const router = require("express").Router();
const celebritiesRoutes = require('./celebrities.routes');
const moviesRoutes = require('./movies.routes');
router.get("/", (req, res, next) => {

  res.render("index");
});
// vincular rutas al servidor
router.use('/' , celebritiesRoutes);
router.use('/', moviesRoutes)
module.exports = router;
