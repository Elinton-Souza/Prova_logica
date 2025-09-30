const prompt = require('prompt-sync')();

const a = Number(prompt('Digite o valor do lado A: '));
const b = Number(prompt('Digite o valor do lado B: '));
const c = Number(prompt('Digite o valor do lado C: '));

if (a + b <= c || a + c <= b || b + c <= a){
console.log('Não é possível formar um triângulo!')
}else if( a === b && b === c && c === a){
    console.log('Todos os lados são iguais, é um triângulo Equilátero!')
}else if(a === b && a !== c || b === c && b !== a || c === a && c !== b){
    console.log('Apenas 2 lados iguais, é um triângulo Isósceles!')
}else if(a !== b && b !== c && c !== a){
    console.log('Todos os lados são diferentes, é um triângulo Escaleno!')
}