//Receber quatro números como parâmetro e retornar a média dos quatro como resultado

function media (a,b,c,d){
    return (a + b + c + d ) / 4
}
let resultado = media(5, 10, 10, 5)
console.log(resultado)

//(Receber um número como parâmetro e retornar true se ele for divisível 7 e false caso contrário;

function conta (a){
    if(a % 7 == 0){
        return true
    }else{
        return false
    }
}
let a = conta(-21)
console.log(a)

//Receber como parâmetro a aresta de um cubo e retornar volume do cubo;

function volume(aresta){
    return aresta ** 3;
}
let a = volume(7)
console.log("O volume do cubo é:",a)

//Receber como parâmetro quatro números e retornar o valor da soma dos seus quadrados;
function somaDosQuadrados(a,b,c,d){
    return (a*a) + (b*b) + (c*c) + (d*d)
}
let a = somaDosQuadrados(2,5,6,7)
console.log(a)

//Computar e retornar o valor de f(x) na seguinte função matemática: f(x) = x² + 2x + 3;

function formula(x){
    let y = (x ** 2) + (2 * x ) + 3;
    return y
}
var a = formula(2)
console.log(a)

//Computar e retornar o valor de f(x) na seguinte função matemática: f(x) = x³ - 4x + 1;

function funcao(x){
    valor = (x ** 3) - (4 * x) + 1;
    return valor;
}
var a = funcao(5)
console.log(a)

//Dados os catetos de um triângulo retângulo, calcular e imprimir o valor da sua hipotenusa;

function hipotenusa(a, b){
    h = Math.sqrt((a * a) + (b * b))
    return h
 }
 let res = hipotenusa(6,8)
 console.log(res)

 //Dados os lados de um retângulo, retornar o valor da sua a área.

function area(b,h){
    const area = b * h
    return area
}
const a = area(2,6)
console.log(a)