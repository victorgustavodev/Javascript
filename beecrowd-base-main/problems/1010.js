const space = ' ';
const [a1, num1, valor1] = lines[0].split(space);
const [a2, num2, valor2] = lines[1].split(space);

var calc = num1 * valor1 + num2 * valor2;

console.log(`VALOR A PAGAR: R$ ${calc.toFixed(2)}`)