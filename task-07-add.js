// Написати ф-ю яка приймає масив і видаляє звідти всі унікальні
// елементи

// nonUniqueElements([1, 2, 3, 1, 3]) // [1, 3, 1, 3]
// nonUniqueElements([1, 2, 3, 4, 5]) // []
// nonUniqueElements([5, 5, 5, 5, 5]) // [5, 5, 5, 5, 5]
// nonUniqueElements([10, 9, 10, 10, 9, 8]) // [10, 9, 10, 10, 9]

let nonUniqueElements = (arr) => {
let resultArr = [];
let a = arr.length;

for (let i = 0; i < a; i += 1) {
     let tempArr = [...arr];
    delete tempArr[i];
    tempArr.includes(arr[i]) ? resultArr.push(arr[i]) : resultArr
}

//console.log(`resultArr ${resultArr}`);
return resultArr;
}

// nonUniqueElements([1, 2, 3, 1, 3]) // [1, 3, 1, 3]
// nonUniqueElements([1, 2, 3, 4, 5]) // []
// nonUniqueElements([5, 5, 5, 5, 5]) // [5, 5, 5, 5, 5]
// nonUniqueElements([10, 9, 10, 10, 9, 8]) // [10, 9, 10, 10, 9]

