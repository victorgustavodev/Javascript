var num = parseInt(lines.shift());
var horasTrabalhadas = parseInt(lines.shift());
var valorRecebido = parseFloat(lines.shift());

const calc = horasTrabalhadas * valorRecebido;

console.log(`NUMBER = ${num}`);
console.log(`SALARY = U$ ${calc.toFixed(2)}`);