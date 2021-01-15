
let input;
input = prompt('Введите число');
const numbers = [];
let total = 0;

while (input){

    let inputNum = parseInt(input);
    isNaN(inputNum) ? alert ('Было введено не число, попробуйте еще раз') : numbers.push(inputNum);
    input = prompt('Введите число');
}

if (numbers.length !== 0) {

    for (let numb of numbers) {
        total += numb;
    }
    console.log(`Общая сумма чисел равна ${total}`);
    
} else {
    console.log('Вы ничего не ввели!')
    }

