'use strict';
// Задание 1
let n = 0;
while (n <= 100) {
    let a = true;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            a = false;
            break;
        }
    }
    if (a) console.log(n);
    n++;
}

// Задание 2 (почитал про reduce и посмотрел как решить в видео, сам не смог придумать как решить задачу =( ))

const basket = [
    ['компьютер', 1000, 1],
    ['клавиатура', 1000, 2],
    ['телефон', 500, 11],
];

function countBasketPrice(basket) {
    return basket.reduce((total, item) => total + item[1] * item[2], 0);
}
console.log(countBasketPrice(basket));

// Задание 3 
for (let i = 0; i < 10; console.log(i++)) { }
// Задание 4 
var b = '';
for (var i = 0; i < 20; i++) {
    b = b + 'x';
    console.log(b);
}