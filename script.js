"use strict";



// let res = +prompt("male or female?", "");
// console.log(res+10);

// const answers = [];
// answers[0] = prompt("Сколько вам лет?", "");
// answers[1] = prompt("Ваше имя?", "");
// answers[2] = prompt("Какая ваша Фамилия", "");

// document.write(answers);

// const category = "toys";
// const num = 1;
// console.log(`http://google.com/${category}/${num}`);


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false
};

for(let i = 0; i < 2; i++) {
    let lastFilm = prompt("Один из последних просмотренных фильмов", "");
    let filmRating = +prompt("На сколько оцените его", "");
    personalMovieDB.movies[lastFilm] = filmRating;
}

console.log(personalMovieDB);
