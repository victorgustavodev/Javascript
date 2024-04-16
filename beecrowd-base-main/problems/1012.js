const [A, B, C] = lines[0].split(' ').map(Number);
const pi = 3.14159;

let triangulo = 0.5 * A * C;
console.log(`TRIANGULO: ${triangulo.toFixed(3)}`)

let circulo = pi * (C*C);
console.log(`CIRCULO: ${circulo.toFixed(3)}`)


let trapezio = 0.5 * (A + B) * C;
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`)


let quadrado = B*B;
console.log(`QUADRADO: ${quadrado.toFixed(3)}`)

let retangulo = A * B;
console.log(`RETANGULO: ${retangulo.toFixed(3)}`)