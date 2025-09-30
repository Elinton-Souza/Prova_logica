const prompt = require('prompt-sync')();

const idade = Number(prompt('Digite a sua idade: '));

if( idade >= 18 && idade <= 65){
    console.log('Pode trabalhar.')
}else{
    console.log('Não está na idade de trabalho padrão.')
}