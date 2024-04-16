var notaA = parseFloat(lines.shift());
var notaB = parseFloat(lines.shift());
var pesoA = 3.5;
var pesoB = 7.5;
var somaPesos = pesoA + pesoB;
const media = (notaA * pesoA + notaB * pesoB) / somaPesos;

console.log(`MEDIA = ${media.toFixed(5)}`)

//ou

// const [notaA, notaB] = lines;
// var pesoA = 3.5;
// var pesoB = 7.5;
// var somaPesos = pesoA + pesoB;
// const media = (notaA * pesoA + notaB * pesoB) / somaPesos;

// console.log(`MEDIA = ${media.toFixed(5)}`)