"use strict";

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genders: [],
//     privat: false
// };

// for(let i = 0; i < 2; i++) {
//     let lastFilm = prompt("Один из последних просмотренных фильмов", "");
//     let filmRating = +prompt("На сколько оцените его", "");
//     personalMovieDB.movies[lastFilm] = filmRating;
// }

// console.log(personalMovieDB);

// const array = [1,2,3,4,5,6,7,8,9,10,11,12].filter(element => (element % 2 == 0)).reduceRight((sum, element) => sum + Math.sqrt(element), 0);
// console.log(array);

// array.forEach(element => {
//     if(element % 2 == 0) {
//         console.log(Math.sqrt(element));
//     }
// });


// let nameJs = prompt("Какое «официальное» название JavaScript?", "");
// if (nameJs == "ECMAScript") {
//     alert("Верно");
// } else {
//     alert("Не знаете? ECMAScript!");
// }


// let num = +prompt("Введите число ", "");
// if(num > 0) {
//     alert("1");
// } else if(num < 0) {
//     alert("-1");
// } else {
//     alert("0");
// }

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }


// let result = (a + b < 4) ? "Мало" : "Много"; 
// условие ? true : false 


// let message;

// if (login == 'Сотрудник') {w
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// let message = (login == "Сотрудник") ? "Привет" :
//     (login == 'Директор') ? 'Здравствуйте' :
//     (login == '') ? 'Нет логина' : 
//     "";


// let browser = "Firefox";
// if(browser == "Edge") {
//     alert( "You've got the Edge!" );
// } else if(browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") {
//     alert( 'Okay we support these browsers too' );
// } else {
//     alert( 'We hope that this page looks ok!' );
// }


// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//     case 0: {
//         alert('Вы ввели число 0');
//         break;
//     }
//     case 1: {
//         alert('Вы ввели число 1');
//         break;
//     }
//     case 2:
//     case 3: {
//         alert('Вы ввели число 2, а может и 3');
//         break;
//     }
// }


// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }


// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
// }


// function checkAge(age) {
//     return (age > 18) || console.log('Родители разрешили?'); 
// }

// checkAge(17);


// function min(a,b) {
//     return (a > b) ? b : a;
// }
// console.log(min(3,3));



// function pow(x, n) { 
//     return Math.pow(x, n);
// }
// console.log(pow(2, 3));




// var age = prompt('Сколько вам лет?');

// var sayHi = (age >= 18) ?
//   function() { alert('Прошу Вас!');  } :
//   function() { alert('До 18 нельзя'); };

// sayHi();


// let age = 115; 
// let a;
// if (age >= 18) {
//     a = function() {
//         console.log("ок")
//     };
// } else {
//     a = function() { 
//         console.log("bad");
//     };
// }
// a();

// let ag = 18; 
// let fun = (ag >= 18) ? 
//     function() {console.log("ok"); }:
//     function() {console.log("bad"); };
// fun();








////////// *******************CALLBACK***************************************
// ПРИМЕР 1

// function getYourName(callback) {
//     let name = prompt("Какое твое имя?", "");
//     callback(name);
// }

// function showName(YourName) {
//     alert(YourName);
// }

// getYourName(showName);



//.... ПРИМЕР 2 
// const data = { 
//     name: "Kolya",
//     surName: "Shein",
//     age: 23
// };

// function checkData(callback) {
//     data ? callback(data) : console.log("Данных нет");
// }

// checkData(function(date) {  //анонимная функция
//     console.log(date);
// });


// const makePizza = function (title, cb) {
//     console.log(`Заказ на приготовление пиццы «${title}» получен. Начинаем готовить…`); 
//     // setTimeout(cb, 3000);
//     cb();
//    };
   
//    const readBook = function () {
//     console.log('Читаю книгу «Колдун и кристалл»…');
//    };
   
//    const eatPizza = function () {
//      console.log('Ура! Пицца готова, пора подкрепиться.');
//    };
   
//    makePizza('Пеперонни', eatPizza);
//    readBook();





console.log("hello" , __dirname);
console.log("hello" , __filename);


const userObj = require('./user');
console.log(userObj.user);

userObj.sayHello();
