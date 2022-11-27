// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
function toThirdPower(number) {
    return number ** 3;
}

console.log(toThirdPower(2) + toThirdPower(3));

// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

function netSalary() {
    let salary = Number(prompt('Введите размер Вашей заработной платы'));

    if (salary == '') {
        console.log('Вы не ввели значение для расчета');
    } else if (isNaN(salary)) {
        console.log('Вы ввели неверное значение. Для расчета необходимо ввести число');
    } else {
        console.log(`Размер заработной платы за вычетом налогов равен ${salary * 0.87} руб.`);
    }
}
netSalary();

// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
let digit1 = Number(prompt('Введите первое число'));
let digit2 = Number(prompt('Введите второе число'));
let digit3 = Number(prompt('Введите третье число'));

function findMaxNumber(number1, number2, number3) {
    let maxNumber = number1;
    if (maxNumber > number2 && maxNumber > number3) {
        console.log(`Максимальное значение из трех чисел равно ${maxNumber}`);
    } else if (maxNumber > number2 && maxNumber < number3) {
        console.log(`Максимальное значение из трех чисел равно ${number3}`);
    } else {
        console.log(`Максимальное значение из трех чисел равно ${number2}`)
    }
}

findMaxNumber(digit1, digit2, digit3);

// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться).
// Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны.
// Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

function sum(integer1, integer2) {
    return integer1 + integer2;
}

console.log(`Сумма двух и шести равна ${sum(2, 6)}`);


function diff(integer1, integer2) {
    if (integer1 === integer2) {
        return 0;
    } else if (integer2 > integer1) {
        return integer2 - integer1
    } else {
        return integer1 - integer2
    }
}

console.log(`Разность чисел равна ${diff(89, 98)}`);


function product(integer1, integer2) {
    if (integer1 === 0 || integer2 === 0) {
        return 0;
    } else {
        return integer1 * integer2;
    }
}

console.log(`Произведение чисел равно ${product(89, 76)}`);

function quotient(integer1, integer2) {
    if (integer1 === 0 || integer2 === 0) {
        return 'На ноль делить нельзя';
    } else if (integer2 > integer1) {
        return integer2 / integer1;
    } else {
        return integer1 / integer2;
    }
}

console.log(quotient(15, 5));