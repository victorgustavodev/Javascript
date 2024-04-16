const [notaA, notaB, notaC] = lines;
var pesoA = 2;
var pesoB = 3;
var pesoC = 5;
var somaPesos = pesoA + pesoB + pesoC;
const media = (notaA * pesoA + notaB * pesoB + notaC * pesoC) / somaPesos;

console.log(`MEDIA = ${media.toFixed(1)}`)

//ou 

// var notaA = parseFloat(lines.shift());
// var notaB = parseFloat(lines.shift());
// var notaC = parseFloat(lines.shift());
// var pesoA = 2;
// var pesoB = 3;
// var pesoC = 5;
// var somaPesos = pesoA + pesoB + pesoC;
// const media = (notaA * pesoA + notaB * pesoB + notaC * pesoC) / somaPesos;

// console.log(`MEDIA = ${media.toFixed(1)}`)