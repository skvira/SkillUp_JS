// Написати ф-ю <strong>countVowels</strong> яка буде приймати строку
// і буде вертати кількість голосних літер. aeiouAEIOU - рядок з
// голосними в англ алфавіті
            
// countVowels('the quick brown fox') // 5

 
function countVowels(inputString) {
    const Vowels = 'aeiouAEIOU';
    let strLength = inputString.length;
    let qnt = 0;

    for (let i = 0; i < strLength; i += 1) {
        Vowels.includes(inputString[i]) ? qnt = qnt + 1 : qnt;
    }
    return qnt;
}

console.log(countVowels('the quick brown fox'));