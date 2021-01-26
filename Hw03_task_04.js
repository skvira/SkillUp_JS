
const countTotalSalary = function(employees) {
  let totalSum = 0;
  for (let employe in employees) {
      totalSum += employees[employe];
  }
  return totalSum;
};

// console.log(countTotalSalary({})); // 0
// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330
// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400