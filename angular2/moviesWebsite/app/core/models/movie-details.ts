export default class MovieDetails {
    poster: string;
    title: string;
    year: string;
    imdbRating: string;
    rated: string;

    constructor(data: any) {
        this.poster = data.Poster;
        this.title = data.Title;
        this.year = data.Year;
        this.imdbRating = data.imdbRating;
        this.rated = data.Rated;
    }
}
