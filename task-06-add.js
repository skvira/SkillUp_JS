// Написати ф-ю rgbToHex яка приймає колір в форматі
// rgb і повертає колір в форматі hex

// let rgbToHex = (r, g, b) => {

// }

function componentToHex(c) {
    var hex = c.toString(16);
    console.log(`${hex} - ${hex.length}`)
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

console.log(rgbToHex(15, 255,30));