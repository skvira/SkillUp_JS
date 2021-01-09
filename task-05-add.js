// Написати програму де користувач вводить 3 числа, після вводу всіх
// трьох чисел йому на екрані показується найбільше з них. Додатково
// перевіряти чи це взагалі числа

let Numb1 = prompt('Введите 1-e число');
if(!Number.isInteger(Numb1*1)){ alert('не число!');}
else {let Numb2 = prompt('Введите 2-e число');
        if(!Number.isInteger(Numb2*1)){ alert('не число!');}
        else {let Numb3 = prompt('Введите 3-e число');
                if(!Number.isInteger(Numb3*1)){ alert('не число!');}
                else{
                    alert(`Наибольшее число ${Math.max(Numb1*1,Numb2*1,Numb3*1)}`)
                }

}

}
