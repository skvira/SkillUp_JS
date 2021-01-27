// Створити метод compact який приймає масив і вертає новий 
// де відсутні будь-які значення що при переведені в bool дають false
            
function compact (arr) {
    let newArr = [];
    for (let element of arr) {
        if (Boolean(element)) {newArr.push(element)} 
    }
    return newArr;
}

// compact([1,0,'', null, 'Hello']) // [1,'Hello']
console.log(compact([1,0,'', null, 'Hello']))              