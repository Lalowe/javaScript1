var a = 1;
console.log(a);
document.write(a);

const ex1 = " Hi my name is Martin";
document.write(ex1);
const age = 25;
const joined = `${ex1} and I am ${age} years old`; // ako spojit stringy
console.log(joined);


const players = ["Martin", "Thomas", "Peter", "Mathias", "Niki"]; // ako spojit string a vybrat s arraya
const sentence = "The most valuable player of the match is";
const winner = `${sentence}  ${players[0]}`;
console.log(winner);


const brands = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"]; // ako sortovat abecedne v arrayi
console.log(brands.sort());

const fruits = ["apple", "banana", "kiwi"]; // ako doplnat a odoberat do array prikaz push osobitne ,nemoze byt hned console.log
fruits.push("orange");
console.log(fruits);
fruits.pop("orange");
console.log(fruits);

const animals = ["monkey", "horse", "dog"]; // reverzne + pridanie na zaciatku
animals.reverse();
console.log(animals);
animals.unshift("cat");
console.log(animals);

const anotherFrutis = ["mango", "cherries", "kiwi", "grapes", "pear", "peach", "orange", "lemon"];
console.log(anotherFrutis); // how to make it on sep.line ?



var a = 7;
var b = 14;
var c = Number("21");
var d = Number('36');
var e = 42;

var plus = a + b + c + d + e;
console.log(plus);

var f = Number('1');

var g = 15;

var h = 8;

var i = Number("1");

var multiple = f * g * h * i;
console.log(multiple);

var result = plus / multiple;
console.log(result);


//c.toNumber();
//d.toNumber();
//

const multi = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 25, 7],
    [21, 4, 6, 17],
    [3, 5, 26, 3]
];
console.log(multi[1][1], multi[4][2], multi[5][3], multi[2][1]);