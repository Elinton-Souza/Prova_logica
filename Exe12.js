const prompt = require('prompt-sync')();

const idade = Number(prompt('Digite a sua idade: '));

if (idade >= 18){
    console.log('Vocé é maior de idade.')
}else{
    console.log('Você é menor de idade.')
}