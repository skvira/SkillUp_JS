// Написати ф-ю showDeliveryStatus яка приймає масив 
// і виводить на екран інформацію про доставку товара всіх типів.
// Якщо прогрес доставки 100 показувати строку "Done"
// Якщо прогрес доставки < 100 показувати строку "In progress"
// Якщо прогрес доставки null показувати строку "Ready for delivery"
            
                
function showDeliveryStatus(arr) {

    function getDeliveryStatus(a) {
        let status = '';
            switch(a){
                case 0: status = "Ready for delivery";
                       break;
            	case 100: status = "Done";
                       break;
            	default: status = "In progress";
            };
        return status;
    }
    
    let newArr = [];
    for (let obj of arr) {
        newArr[obj.type] = getDeliveryStatus(Number(obj.deliveryProgress))
    };

    let newArr1 = [];
    for (let i of newArr) {
        i ? newArr1.push(i) : newArr1.push("Not Ordered")
    };

    console.log(newArr1.join(', '));
}

const ordersA = [
    { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
    { name: 'Computer', price: 230000, deliveryProgress: 100, type: 1 },
    { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
]
              
const ordersB = [
    { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
    { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
]
              

showDeliveryStatus(ordersA) // "In Progress", "Done", "Ready for delivery"
                
showDeliveryStatus(ordersB) // "In progress", "Not Ordered", "Ready for delivery"
   