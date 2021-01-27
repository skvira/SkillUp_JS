
// Написати метод  every який приймає масив і ф-ю callback (в якій ми будемо робити різні перевірки) 
// Цей метод повертає true якщо кожен елемент масиву пройшов перевірку з callback. 
// Якщо хоча б один елемент не проходить перевірку то повертає false, callback приймає елемент масиву
            
let less10 = a => (a < 10);
let more10 = a => (a > 10);
console.log(less10(5));
console.log(more10(5));

function every(arr, callback) {
    let result = true;
    for (let elemnt of arr) {
        result = callback(elemnt) && result;
    }
    return result;
}

// every([1,2,3,4,5], callback) // true (перевіряємо чи елементи < 10)
 console.log(every([1,2,3,4,5], less10)) ;             
                
// every([2,45,67,34], callback) // false (перевіряємо чи елементи > 10)
console.log(every([2,45,67,34], more10));