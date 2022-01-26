var a = 1;
console.log(a);
document.write(a);

const ex1 = " Hi my name is Martin";
document.write(ex1);
const age = 25;
const joined = `${ex1} and I am ${age} years old`; // ako spojit stringy
console.log(joined);


const players = ["Martin", "Thomas", "Peter", "Mathias", "Niki"];
const sentence = "The most valuable player of the match is";
const winner = `${sentence}  ${players[0]}`; // ako spojit string a vybrat z arraya
console.log(winner);


const brands = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"]; // ako sortovat abecedne v array
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

//const anotherFrutis = ["mango", "cherries", "kiwi", "grapes", "pear", "peach", "orange", "lemon"];
//console.log(anotherFrutis); // how to make it on sep.line ?

// ako spravit osobitne na riadku
var fruitss = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var temp = new Array();
temp = fruitss.split('/');
document.write(temp.join('<br>'));





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

const multiCh = [
    ["Vienna", 0, 0, 0, 0],
    [0, "is", 0, 0, 0],
    [0, 0, "a", 0, 0],
    [0, 0, 0, "nice", 0],
    [0, 0, 0, 0, "city"]
];
//console.log(multiCh[0][0], multiCh[1][1], multiCh[2][2], multiCh[3][3], multiCh[4][4]);//
console.log(multiCh[0][0]);
console.log(multiCh[1][1]);
console.log(multiCh[2][2]);
console.log(multiCh[3][3]);
console.log(multiCh[4][4]);



// how to remove $ sign from string //
var text = "Properties,$a$set$of$immutable$values,$are$passed$to$a$components$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it, $but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism 's$promise$is$expressed$as$properties $flow$down;$actions$flow$up.";
var temp = new Array(); // znamena vytvorim prosto pole uplne prazdne
temp = text.split('$'); // a teraz to pole naplnim ALE vysplitim $
document.write(temp.join(' ')); // a tu joinem medzeru

// document.write(text.replaceAll("$", " "));

// tricks !!!!!!!!!!!!!!!!!!!!

var name = prompt("Please type your name"); // input od uzivatela a to sa ulozi do premeny name