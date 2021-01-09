// Написати гру камінь ножиці папір. Де компютер загадує своє
// значення потім користувач вводить свій варіант і далі ми бачимо
// результат на екпані хто виграв

let compBet = Math.round(Math.random()*3); // 1-камень, 2-ножницы, 3-бумага
let userBet = prompt('Введите камень/ножницы/бумага');

if (((compBet == 1) && (userBet == 'камень'))||
    ((compBet == 2) && (userBet == 'ножницы'))||
    ((compBet == 3) && (userBet == 'бумага'))
    ) {alert('Ничья')}
    else {if (((compBet == 1) && (userBet == 'ножницы'))||
              ((compBet == 2) && (userBet == 'бумага'))||
              ((compBet == 3) && (userBet == 'камень'))
             ) {alert('Вы проиграли')}
          else {if (((compBet == 1) && (userBet == 'бумага'))||
                ((compBet == 2) && (userBet == 'камень'))||
                ((compBet == 3) && (userBet == 'ножницы'))
                ) {alert('Вы выиграли')}
                else {alert ('Неверный ввод')}
                }
         }
