const prompt = require('prompt-sync')();

const nota = Number(prompt('Digite a nota do aluno: '));

if (nota >= 7){
    console.log('Aprovado!')
}else{
    console.log('Reprovado!')
}