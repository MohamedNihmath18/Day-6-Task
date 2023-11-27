class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}
var casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
var moviesArray = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "PG-13"),
    new Movie("Movie3", "Studio3", "R"),
    new Movie("Movie4", "Studio4", "PG"),
    new Movie("Movie5", "Studio5", "PG-13")
];

var pgMoviesArray = Movie.getPG(moviesArray);
console.log("Movies with rating PG:");
pgMoviesArray.forEach(movie => console.log(movie.title));
