
//    ES5
//------------
// function StringBuilder(string) {
//     this._value = string
// }
// StringBuilder.prototype.getValue = function() {
//     return this._value
// }
// StringBuilder.prototype.append = function(str) {
//     this._value = this._value + str
// }
// StringBuilder.prototype.prepend = function(str) {
//     this._value = str + this._value
// }
// StringBuilder.prototype.pad = function(str) {
//     this._value = str + this._value + str
// }

//    ES6
//------------
class StringBuilder {
    constructor(string) {
        this._value = string
    }
    getValue() { return this._value }
    append(str) { this._value = this._value + str }
    prepend(str) { this._value = str + this._value }
    pad(str) { this._value = str + this._value + str }
}


const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.append('^');
console.log(builder.getValue()); // '.^'
builder.prepend('^');
console.log(builder.getValue()); // '^.^'
builder.pad('=');
console.log(builder.getValue()); // '=^.^='