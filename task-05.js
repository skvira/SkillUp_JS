
const checkForSpam = function(message) {

      let isSpam = message.toLowerCase().includes('spam');
      let isSale = message.toLowerCase().includes('sale');

      return isSpam || isSale;

    };

// console.log(checkForSpam('Latest technology news')); // false
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true
// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true