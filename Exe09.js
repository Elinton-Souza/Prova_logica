const prompt = require('prompt-sync')();

const nota = Number(prompt('Digite a nota do aluno: '));

if(nota >= 9 ){
    console.log('Conceito A')
}else if( nota >= 7 ){
    console.log('Conceito B')
}else if( nota >= 5){
    console.log('Conceito C')
}else{
    console.log('Conceito D')
}