//Imprimir os números negativos de 1 em 1, de -1 até -20;
var num = -1;
while (num >= -21) {
  console.log(num);
  num = num - 1;
}

//Imprimir os números de 3 e 3, de 0 até 30;
for (let i = 0; i <= 30; i = i + 3) {
  console.log(i);
}

//Imprimir os número de 3 e 3, de 0 até -30;
let contador = 0;
for (i = 0; i >= -30; i -= 3) {
  contador = contador + 1;
  console.log(contador, ".", i);
}

//Imprimir os 10 primeiros números ímpares;
for (var i = 1; i <= 19; i += 2) {
  console.log(i);
}

//Imprimir os 20 primeiros números divisíveis por 3;
for (var i = 3; i <= 60; i += 3) {
  console.log(i);
}

//Imprimir os 10 primeiros números divisíveis por 10;

for (var i = 10; i <= 100; i += 10) {
  console.log(i);
}

//Imprimir os quadrados dos 10 primeiros números inteiros;
// Loop de 1 a 10
for (let i = 0; i <= 10; i++) {
  // Calcula o quadrado de cada número
  const quadrado = i * i;

  // Imprime o quadrado
  console.log(`O quadrado de ${i} é ${quadrado}`);
}

//Imprimir os números entre 0 e 25 em ordem decrescente.
for (i = 25; i >= 0; i--) {
  console.log(i);
}

//executa um trecho de código até que a condição torne-se falsa
//o código é executado ao menos uma vez
//praticando DO WHILE
var i = 0;
do {
  console.log(i);
  i++; //é igual a i = i + 1
} while (i < 10);
console.log("////////////////////////////");
///////////////////////////////////
var i = 9;
do {
  console.log(i);
  i--;
} while (i > -1);
////////////////////////////////////
var num = 7;
var i = 0;
do {
  num = num + 7;
  i++;
} while (i < 9);
{
  console.log("////////////////////////////");
  console.log(num);
}
