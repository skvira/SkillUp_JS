let credits = 35500;
let pricePerDroid = 3000;
let userInputAmount = prompt('Enter the amount of droids you want to buy:');
let totalPrice;
let message;

if (userInputAmount)
{
    totalPrice = userInputAmount * pricePerDroid;
    if (isNaN(totalPrice)) {
        message = 'введено не число!';
    } else {
        let restCredits = credits - totalPrice;
        if (totalPrice <= credits) 
        { message = `Вы купили ${userInputAmount} дроидов, на счету осталось ${restCredits} кредитов.` }
        else { message = 'Недостаточно средств на счету!' }
      }
} 
else { message = 'Отменено пользователем!'};

alert(message)