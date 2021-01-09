let input = prompt('Введите число');
let total = 0;


while(input) {

    if (input*1 % 1 !== 0) {
        alert('Было введено не число, попробуйте еще раз')}
else
    total = total + input*1;
    input = prompt('Введите число')}
    
    alert(`Общая сумма чисел равна ${total}`)
