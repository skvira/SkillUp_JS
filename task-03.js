const ADMIN_PASSWORD = 'adminpass';
let message='';
let userInputPsw = prompt('Enter the password:');

if (userInputPsw)
{
    if (userInputPsw == ADMIN_PASSWORD) 
    { message = 'Добро пожаловать!' }
    else { message = 'Доступ запрещен, неверный пароль!' }
} 
else { message = 'Отменено пользователем!'};

alert(message)