// Завдання: Написати програму яка буде перевіряти чи рік народження
//               користувача був високосним
// Наприклад: 2000, 2004, 2016 - <strong>високосні</strong> 1998,
//               2002, 1900 2100 - <strong> не високосні</strong>

let userBirthdayYear = prompt('Введите год рождения');
if(userBirthdayYear) {
switch(userBirthdayYear*1 % 4){
    case 0: 
        alert('высокосный год');
        break;
    case 1:
        alert('не высокосный год');
        break;
    case 2:
        alert('не высокосный год');
        break;
    case 3:
        alert('не высокосный год');
        break;
    default: alert('неверный формат ввода')   
}
} else alert('Отменено пользователем!')