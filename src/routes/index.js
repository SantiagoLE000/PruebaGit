const express = require('express');
const genreRouter = require('./genre.router');
const movieRouter = require('./movie.router');
const router = express.Router();

// colocar las rutas aquí
router.use ("/genres" , genreRouter)
router.use ("/movies" , movieRouter)


module.exports = router;