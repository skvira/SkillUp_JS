// Написати ф-ю capitalize яка буде приймати строку
// і буде вертати нову строку де кожне слово буде починатися з
// великої літери.
            
// capitalize('the quick brown fox') // 'The Quick Brown Fox '
              
function capitalize (inputString){
    let outoutString;
    let words = inputString.toLowerCase().split(' ');
    let arrLength = words.length;
    
    // for (let word of words){
    //     word = word.slice(0, 1).toUpperCase() + word.slice(1)
    // }
    
    for (let i = 0; i < arrLength; i += 1){
        words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1)
    }

    return outoutString = words.join(' ');
}             

 console.log(capitalize('the quick brown fox'))
