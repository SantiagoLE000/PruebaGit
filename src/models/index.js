const Genre = require("./Genre");
const Movie = require("./Movie");


Movie.belongsToMany(Genre, {through : "moviesGenres"})
Genre.belongsToMany(Movie, {through : "moviesGenres"})