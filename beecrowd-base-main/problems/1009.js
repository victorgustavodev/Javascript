const nome = lines.shift();
const salario = parseFloat(lines.shift());
const totalVendas = parseFloat(lines.shift());

const calc = totalVendas * 0.15 + salario;

console.log(`TOTAL = R$ ${calc.toFixed(2)}`);