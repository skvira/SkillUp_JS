
const findLongestWord = function(string) {
      
      let arrString = string.split(' ');
      let maxWord = [0, 0]

      for (let i = 0; i < arrString.length; i += 1) {
          arrString[i].length > maxWord[0] ? maxWord = [arrString[i].length, arrString[i]] : maxWord
      }
      
      return maxWord[1];
    };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
// console.log(findLongestWord('Google do a roll')); // 'Google'
// console.log(findLongestWord('May the force be with you')); // 'force'