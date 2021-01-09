// Написати програму яка буде знаходити суму, різницю, добуток,
// частрку двох чисел Користувач вводить 2 числа потім вводить знак
// операції і отримує результат в форматі "Сума чисел a i b =
// результат" (такий шаблон для кожної відповіді)

let num1 = prompt('Введите 1-е число');
if(!Number.isInteger(num1*1)){ alert('не число!');}
else {
    let num2 = prompt('Введите 2-е число');
    if(!Number.isInteger(num2*1)){ alert('не число!');}
    else{
        let operation = prompt('Введите знак операции (+,-,*,/)');
    
        switch(operation){
            case '+': alert(`Сума чисел ${num1} i ${num2} = ${num1*1 + num2*1}`);
            break;
            case '-': alert(`Разница чисел ${num1} i ${num2} = ${num1*1 - num2*1}`);
            break;
            case '*': alert(`Произведение чисел ${num1} i ${num2} = ${num1*1 * num2*1}`);
            break;
            case '/': alert(`Результат деления чисел ${num1} i ${num2} = ${num1*1 / num2*1}`);
            break;
            default: alert('Что-то не то ввели или не ввели')
        }
    }
}

