// Testar se o quadrado de um número é maior do que ele multiplicado por 10;
let a = 100;
quadrado = a * a;
mult = a * 10;

if (quadrado > mult) {
  console.log("O quadrado é maior");
}
else {
  console.log("O quadrado é menor");
}

//Testar se um número é divisível por 3 e por 4 (tente fazer usando apenas if’s e else’s);

const n1 = 15;
const caso1 = n1 % 3;
const caso2 = n1 % 4;

if (caso1 === 0) {
  if (caso2 === 0) {
    console.log("É divisível!");
  } else {
    console.log("Não é divisível!");
  }
} else {
  console.log("Não é divisível!");
}

// Testar se um número é divisível por 3 mas não por 4 (tente fazer usando apenas if’s e else’s);

const numero = 9;

if (numero % 3 === 0) {
  if (numero % 4 !== 0) {
    console.log(`${numero} é divisível por 3, mas não por 4.`);
  }
} else {
  console.log(`${numero} não é divisível por 3.`);
}

//Testar se um número é divisível por 2 ou por 7 (tente fazer usando apenas if’s e else’s);

const n1 = 14;
const caso1 = n1 % 2;
const caso2 = n1 % 7;

if (caso1 === 0) {
  if (caso2 === 0) {
    console.log("É divisível!");
  } else {
    console.log("Não é divisível!");
  }
} else {
  console.log("Não é divisível!");
}

//Multiplicar dois números e verificar se o resultado é um número negativo;
const a = 10
const b = 2
const ab = a * b

if (ab < 0) {
  console.log(ab, 'é negativo!')
}
else if (ab === 0) {
  console.log(ab, 'é igual a zero')
}
else {
  console.log(ab, "é positivo")
}

//Dividir dois números inteiros e verificar se o resultado é divisível por 10;
const a = -500
const b = 10
const ab = a / b
if (ab % 10 === 0) {
  console.log("é Divisível")
}
else {
  console.log("ñ é divisivel.")
}

//Dividir a por b e verificar se o resultado é maior do que a;
const a = 2;
const b = 14;
const ab = a / b;
if (ab >= a) {
  console.log("é maior que a")
}
else {
  console.log("não é maior que a")
}

//Dado dois números, imprimir em ordem crescente;
const a = 5
const b = 6
if (a > b) {
  console.log(b, a)
}
else {
  console.log(a, b)
}

//Dado dois números,  imprimir em ordem decrescente;
const a = 4
const b = 5
if (a < b) {
  console.log(b, a)
}
else {
  console.log(a, b)
}

//Elevar um número ao quadrado e informar se o resultado é maior do que 100.
const a = 9
if (a ** 2 >= 100) {
  console.log("é maior")
}
else {
  console.log("é menor")
}