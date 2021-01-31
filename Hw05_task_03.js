
//    ES5
//------------
// function Storage(arrGoods) {
//     this.items = [...arrGoods]
// }
// Storage.prototype.getItems = function() {
//     return this.items
// }
// Storage.prototype.addItem = function(item) {
//     this.items.push(item)
// }
// Storage.prototype.removeItem = function(item) {
//     this.items = this.items.filter(curentItem => curentItem !== item);
// }

//    ES6
//------------
class Storage {
    constructor(arrGoods) {
        this.items = [...arrGoods]
    }
    getItems() { return this.items }
    addItem(item) { this.items.push(item) }
    removeItem(item) { this.items = this.items.filter(curentItem => curentItem !== item) }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);
const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
