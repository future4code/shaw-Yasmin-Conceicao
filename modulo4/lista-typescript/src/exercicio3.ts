type movie = {
    name: string,
    releaseDate: number,
    genre:GENRE,
    review:REVIEW
}

enum GENRE {
    FANTASY = "fantasy",
    ACTION = "action",
    DRAMA = " drama",
    COMEDY = "comedy",
    ROMANCE = "romance",
    HORROR = "horror",
    TRILLER = "thriller"
}

enum REVIEW {
    PERFECT = 10,
    GREAT = 8,
    GOOD = 5,
    BAD = 3,
    AWFUL = 0
}

const toyStory:movie = {
    name: "Toy Story",
    releaseDate: 1995,
    genre: GENRE.COMEDY,
    review: REVIEW.PERFECT
}

const Palmer:movie = {
    name: "Palmer",
    releaseDate: 2021,
    genre: GENRE.DRAMA,
    review: REVIEW.GREAT
}

const Uncharted:movie ={
    name: "Uncharted",
    releaseDate: 2022,
    genre: GENRE.ACTION,
    review: REVIEW.GOOD
}

const Parasita:movie = {
    name: "Parasita",
    releaseDate: 2020,
    genre: GENRE.TRILLER,
    review: REVIEW.BAD
}
const It:movie = {
    name: "It",
    releaseDate: 2017,
    genre: GENRE.HORROR,
    review: REVIEW.AWFUL
}

const list = [toyStory, Palmer,Uncharted,Parasita,It]

function pullMovies () {
    console.table(list)
}

pullMovies()