"use strict";

// 1

const numb = +prompt('Введите любое число')
if (numb == 0) {
    console.log("число равно нулю");
} else if (numb % 2 == 0) {
    console.log("число чётнoe");
} else if (numb % 2 !== 0) {
    console.log("число нечётнoe");
} 

//2 

let comparison = +prompt("Введите что-либо");
if (isNaN(comparison)) {
    console.log("Это значение преобразовать в число не получится. Получится NaN");
} else {
    console.log("Это значение можно преобразовать в число");
}