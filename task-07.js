
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
    let isLV = false;
    login.length > 3 && login.length < 17 ? isLV = true : isLV = false;
    return isLV;
};

const isLoginUnique = function(allLogins, login) {
    let isLU = false;
    allLogins.includes(login) ? isLU = false : isLU = true;
    return isLU;
};

const addLogin = function(allLogins, login) {
    let message;
  if(isLoginValid(login) && isLoginUnique(allLogins, login)) {
    message = 'Логин успешно добавлен!'
  } else if(isLoginValid(login) && !isLoginUnique(allLogins, login)){
    message = 'Такой логин уже используется!'
  } else if(isLoginUnique){
    message = 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
    return message;
};

//  console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
//  console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
//  console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
//  console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'