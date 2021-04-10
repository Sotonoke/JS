
// Задание 1
var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2  через унарный оператор ++а добавили к операнду единицу
d = b++; alert(d); // 1  Унарный оператор в случае применения в качестве окончания (x++) возвращает значение операнда перед добавлением к нему единицы.
c = (2 + ++a); alert(c); // 5  через унарный оператор ++а в первом примере добавили к операнду единицу и её значение стало 2, в данном примере мы добавили к 2 еще одну единицу в итоге получилось 3 и прибавили  к сумме 2 
d = (2 + b++); alert(d); // 4 через унарный операторв b++ во втором примере мы  вернули значение 1 операнда перед добавлением единицы  в итоге получилось 2,  так же в этом примере вернули значение операнда и добавили единицу и прибавили к сумме 2
alert(a); // 3 через унарный оператор ++а в первом и третьем примере добавили к операнду  по единице и её значение стало 3
alert(b); // 3 через унарный операторв b++ во втором и четвертом примере мы  вернули значение  операнда перед добавлением единицы  в итоге получилось 3


// Задание 2

var a = 2;
var x = 1 + (a *= 2);
console.log(x) // получилось 5, так как *= это сокращенный оператор который присваивает умножение в итоге пример выгледит так: x = 1 + (a * 2);

// Задание 3
var a = +prompt('Введите первое число');
var b = +prompt('Введите второе число');
var x;

if (a && b >= 0) {
    x = a - b;
    alert(x);
} else if (a < 0 && b < 0) {
    x = a * b;
    alert(x);
} else {
    x = a + b;
    alert(x)
}

// Задание 4
a = +prompt('Введите число от 0 до 15');

switch (a) {
    case 0:
        alert('0');
    case 1:
        alert('1');
    case 2:
        alert('2');
    case 3:
        alert('3');
    case 4:
        alert('4');
    case 5:
        alert('5');
    case 6:
        alert('6');
    case 7:
        alert('7');
    case 8:
        alert('8');
    case 9:
        alert('9');
    case 10:
        alert('10');
    case 11:
        alert('11');
    case 12:
        alert('12');
    case 13:
        alert('13');
    case 14:
        alert('14');
    case 15:
        alert('15');
        break
}

// Задание 5

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function division(a, b) {
    return a / b;
}

function multiplication(a, b) {
    return a * b;
}

// Задание 6
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return plus(arg1, arg2);

        case '-':
            return minus(arg1, arg2);

        case '/':
            return division(arg1, arg2);

        case '*':
            return multiplication(arg1, arg2);

    }
}
alert(mathOperation(11, 11, '-'))
alert(mathOperation(11, 11, '+'))
alert(mathOperation(11, 11, '*'))
alert(mathOperation(11, 11, '/'))

// Задание 8

function power(val, pow) {
    if (val == 0)
        return (0);
    if (pow == 0)
        return (1);
    if (pow < 0)
        return (power(1 / val, -pow));
    else
        return (val * power(val, pow - 1));
}
alert(power(2, 2))