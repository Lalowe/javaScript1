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