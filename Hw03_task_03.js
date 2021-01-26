
const findBestEmployee = function(employees) {
    let maxTasks = 0;
    let resultStr = '';
    for (let employe in employees) {
        if (employees[employe] > maxTasks) {
            maxTasks = employees[employe];
            resultStr = `${employe} : ${employees[employe]}`
        } 
    }
    return resultStr;
 };

// console.log(findBestEmployee(
//     {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
//   }
//   )
// ); // lorence
// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango
// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux
