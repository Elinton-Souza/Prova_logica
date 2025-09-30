const prompt = require('prompt-sync')();

const salario = Number(prompt('Digite o valor do salário: '));

if (salario <= 2000){
    console.log('Isento de Imposto')
} else if (salario <= 3500){
    console.log('Alíquota de 15%')
} else if ( salario <= 5000){
    console.log('Alíquota de 22%')
} else {
    console.log('Alíquota de 27%')
}