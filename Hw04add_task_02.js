// Написати метод  some  який приймає масив і ф-ю callback. 
// Цей метод поверне true якщо хоча б один елемент масиву пройде перевірку з callback
// callback приймає елемент масиву
            
let less10 = a => (a < 10);
let more10 = a => (a > 10);
console.log(less10(5));
console.log(more10(5));

function some(arr, callback) {
    let result = false;
    for (let elemnt of arr) {
        result = callback(elemnt) || result;
    }
    return result;
}               


//some([1,2,3,23,5], callback) // true (перевіряємо чи елементи > 10)
  console.log(some([1,2,3,23,5], more10));              

//some([12,45,67,34], callback) // false (перевіряємо чи елементи < 10)
console.log(some([12,45,67,34], less10));         