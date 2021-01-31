// Створити простенький калькулятор за допомогою класу.
//         Цей клас буде мати такі методи:
// 		1	Метод що запитує в користувача 2 числа
// 		2	Метод що додає ці числа
// 		3	Метод що віднімає ці числа
// 		4	Метод що перемножує ці числа
// 		5	Метод що ділить ці числа
// 		6	Метод що виводить результат арефметичної операції на екран в форматі `Результат операції ${value}`
// 			цей метод запускається в кінці кожного з методів 2-5
//      7   Метод що додає в калькулятор новий функціонал (Приймає аргументом колбек в якому описаний новий метод)
// 			Передати в метод №7 колбек ф-ю що підносить числа в степінь
//             Написати всі методи і перевірити чи вони працюють


class Calculator {

    constructor(a, b) {
        this.a = a
        this.b = b
    }
    inputNums() {
        this.a = prompt("Введите первое число")
        this.b = prompt("Введите второе число")
    }
    sum (a, b) {
        let result = Number(this.a) + Number(this.b)
        this.outputResult(result)
    }
    sub (a, b) {
        let result = Number(this.a) - Number(this.b)
        this.outputResult(result)
    }
    mult (a, b) {
        let result = Number(this.a) * Number(this.b)
        this.outputResult(result)
    }
    dev (a, b) {
        let result = Number(this.a) / Number(this.b)
        this.outputResult(result)
    }
    calcDop(calc, callback) {
        let result = callback(calc.a, calc.b)
        this.outputResult(result)
    }
    outputResult(value) {
        console.log(`Результат операції ${value}`)
    }
}

let power = (a, b) => (Math.pow(a, b))

let c = new Calculator(0, 0);
console.log(c);
c.inputNums();
console.log(c);
c.sum();
c.sub();
c.mult();
c.dev();
c.calcDop(c, power);
