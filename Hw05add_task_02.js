// Створити класи Library та Book
            
//         Клас Library буде описувати нашу бібліотеку книжок. Всі книжки будуть зберігатися в масиві.
//             Також цей клас буде мати такі методи:
// 				Метод buy - це метод що приймає аргументом обєкт книги і додає її в бібліотеку якщо її там ще немає. 
//                  Якщо книга вже є показує повідомлення що книга вже куплена
//              Метод sell - це метод що приймає аргументом назву книги і видаляє її з бібліотеки
//              Метод addToFavourite - це метод що приймає аргументом назву книги і додає обєкт книги 
//                  в список улюблених
// 				Метод removeFromFavourite - це метод що приймає назву книги і видаляє її з списку улюблених
// 				Гетер сountFavouriteBooks - це гетер що показує кількість книжок що додані в улюблені
// 				Гетер finishedBook - це гетер що містить колекцію всіх прочитаних книжок
// 				Метод totalCost - це метод що рахує вартість всіх книжок в бібліотеці
//         Клас Book буде описувати окрему книгу. Кожна книга це буде обєкт з такими ключами
//              author
// 				title
// 				price
// 				totalPages
// 				currentPage
//                 Також цей клас буде мати такі методи:
// 				Метод read - це метод що приймає кількість сторінок що було прочитано і міняє значення currentPage
// 				Гетер bookProgres - гетер що переводить кількість прочитаних сторінок в відсотки
// 				Сетер bookProgres - сетер що переводить відсоток прочитаних сторінок в кількість
// 		Клас Book приймає один аргумент - обєкт з парметрами книги. В середині класу використовувати
//      деструктуризацію обєкта

class Library {
    constructor(arrBooks = []) {
        this.arrBooks = arrBooks
    }

    favourite = [];

    buy (book) {
        this.arrBooks.includes(book) ? console.log("книга вже куплена") : this.arrBooks.push(book);
    }
    sell (nameBook) {
        for (let book of this.arrBooks) {
            if (this.arrBooks.title === nameBook) {
                let index = this.arrBooks.indexOf(book)
                this.arrBooks.splice(index, 1);
            }
        }
    }
    addToFavourite(nameBook) {
        for (let book of this.arrBooks) {
            if (book.title === nameBook && !this.favourite.includes(book)) {
                this.favourite.push(book);
            }
        }
    }
    removeFromFavourite (nameBook) {
        for (let book of this.favourite) {
            if (book.title === nameBook) {
                let index = this.favourite.indexOf(book)
                this.favourite.splice(index, 1);
            }
        }
    }
    сountFavouriteBooks () {
        return this.favourite.length
    }
    finishedBook() {
        let finishedBooks = []
        for (let book of this.arrBooks) {
            if (book.totalPages === book.currentPage) {
                finishedBooks.push(book)
            }
        }
        return finishedBooks.length
    }
    totalCost () {
        let totalCost = 0
        for (let book of this.arrBooks) {
            totalCost += book.price
        }
        return totalCost
    }
}

class Book {
    constructor({author, title, price, totalPages} = inObject, currentPage = 0) {
        this.author = author
		this.title = title
		this.price = price 
		this.totalPages = totalPages
        this.currentPage = currentPage;
    }
    read(readPages) {
        this.currentPage = readPages
    }
    getBookProgres() {
        return this.currentPage/this.totalPages*100
    }
    setBookProgres(pctBook) {
        this.currentPage = pctBook*this.totalPages/100
    }

}

let bookParam1 = {
    author: 'Collins Suzanne',
	title: 'The Hunger Games',
	price: 100,
	totalPages: 187 
}
let bookParam2 = {
    author: 'Kard',
	title: 'Igra-Endera',
	price: 150,
	totalPages: 300 
}
let bookParam3 = {
    author: 'Kej Xorstmann',
	title: 'java',
	price: 200,
	totalPages: 250 
}

let book1 = new Book(bookParam1)
let book2 = new Book(bookParam2)
let book3 = new Book(bookParam3)
console.log(book1);
console.log(book2);
console.log(book3);
let library = new Library([book1, book2]);
console.log(library);
// library.buy(book2);
library.buy(book3);
console.log(library);
library.sell ('The Hunger Games');
console.log(library);
library.buy(book1);
console.log(library);
console.log(library.favourite);
library.addToFavourite('java');
library.addToFavourite('The Hunger Games');
library.addToFavourite('Igra-Endera');
console.log(library.favourite);
library.removeFromFavourite ('The Hunger Games');
console.log(library.favourite);
console.log(library.сountFavouriteBooks());
console.log(library.finishedBook()); 
console.log(library.totalCost ());