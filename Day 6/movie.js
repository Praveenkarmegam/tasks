class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of Movie

let casinoRoyale = new Movie("Casino Royale", "ABC Productions", "10-star");

// Example array of movies

let movieArray = [
    new Movie("Movie 1", "Studio A", "PG"),
    new Movie("Movie 2", "Studio B", "R"),
    new Movie("Movie 3", "Studio C", "PG-13"),
    new Movie("Movie 4", "Studio D", "PG"),
    new Movie("Movie 5", "Studio E", "G")
];

// Using getPG method by creating an instance of Movie

let movieInstance = new Movie();
let pgMovies = movieInstance.getPG(movieArray);
console.log(pgMovies);
