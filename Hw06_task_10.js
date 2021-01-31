// Задание 10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся
// умений и они должны быть отсортированы в алфавитном порядке.
// const getSortedUniqueSkills = users => {
//   // твой код
// };
// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 
// 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

import users from './users.js'

const getSortedUniqueSkills = users => {
  
    let allSkills = users
    .map((user) => { return user.skills })
    .reduce(function (sumList, currentList) { return sumList.concat(currentList)});
    
    let uniqueSkills = allSkills
    .filter( (skill, index) => { return allSkills.indexOf(skill) == index } )
    .sort();
    return uniqueSkills;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 
//'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]