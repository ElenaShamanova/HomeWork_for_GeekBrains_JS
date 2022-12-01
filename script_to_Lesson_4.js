// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

function elevenNumbers() {
    for (let i = 0; i < 11; i++) {
        if (i == 0) {
            console.log(i + ' - это ноль');
        } else if (i % 2 == 0) {
            console.log(i + ' - четное число');
        } else {
            console.log(i + ' - нечетное число');
        }
    }
};

elevenNumbers();

// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

function getNewArray(array) {
    array.splice(3, 2);
    return array;
};

console.log(getNewArray([1, 2, 3, 4, 5, 6, 7]));

// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const generateRandomNumber = (minNumber, maxNumber) => Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

// console.log(generateRandomNumber(0, 9));

function getArrayOfRandomNumbers() {
    let lengthOfArray = Number(prompt('Задайте длину массива'));
    let firstNumber = Number(prompt('Введите начальное значение диапазона чисел'));
    let secondNumber = Number(prompt('Введите конечное значение диапазона чисел'));

    const arrayOfRandomNumbers = [];
    arrayOfRandomNumbers.length = lengthOfArray;

    for (let i = 0; i < arrayOfRandomNumbers.length; i++) {
        arrayOfRandomNumbers[i] = generateRandomNumber(firstNumber, secondNumber);
    }
    return arrayOfRandomNumbers;
};

// console.log(`Ваш массив случайных чисел: [${getArrayOfRandomNumbers()}]`);

function sumArrayElements(generatedArr) {
    let sum = 0;
    for (let i = 0; i < generatedArr.length; i++) {
        sum += generatedArr[i];
    }
    return sum;
};

const generatedArray = getArrayOfRandomNumbers();
console.log(`Массив случайных чисел: [${generatedArray}]`);
console.log(`Сумма всех элементов массива равна ${sumArrayElements(generatedArray)}`);

function findMinElement(array) {
    let minElement = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < minElement) {
            minElement = array[i];
        } else {
            continue;
        }
    }
    return minElement;
};

console.log(`${findMinElement(generatedArray)} - минимальное число в случайном массиве`);

function checkNumber(randomArray, numberToBeChecked) {
    for (let i = 0; i < randomArray.length; i++) {
        if (randomArray[i] === numberToBeChecked) {
            return 'В этом массиве есть запрашиваемое число';
        } else {
            continue;
        }
    }
    return 'Такого числа нет';
};

// console.log(checkNumber(generatedArray, 3));

// Пусть у нас дан массив состоящий из 10 элементов с произвольными числами. Давайте переберем его циклом и числа, которые делятся на 2, возведем в квадрат и выведем в консоль, а числа, которые делятся на 3, возведем в куб и выведем в консоль.

function sortAndRaiseToPower(randomArray) {
    for (let i = 0; i < randomArray.length; i++) {
        if (randomArray[i] % 2 === 0 && randomArray[i] % 3 === 0) {
            console.log(`Квадрат числа равен ${randomArray[i] ** 2}`);
            console.log(`Куб числа равен ${randomArray[i] ** 3}`);
        } else if (randomArray[i] % 2 === 0) {
            console.log(`Квадрат числа равен ${randomArray[i] ** 2}`);
        } else if (randomArray[i] % 3 === 0) {
            console.log(`Куб числа равен ${randomArray[i] ** 3}`);
        } else {
            continue;
        }
    }
};

sortAndRaiseToPower(generatedArray);

// Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// Подсчитайте количество цифр 3 в этом массиве.

function countNumber(arr, numberToBeCounted) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === numberToBeCounted) {
            count++;
        }
    }
    return count;
};

console.log('Количество цифр 3 в массиве равно ' + countNumber([1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3], 3));

// Дан следующий массив:
// [1, 2, 3, 4, 5]
// С помощью метода массива преобразуйте его в следующий:
// [1, 4, 5]

function getArray(array) {
    array.splice(1, 2);
    return array;
};

console.log(getArray([1, 2, 3, 4, 5]));
