const prompt = require('prompt-sync')();

var senha = 1234;

const digito = Number(prompt('Digite sua senha de 4 dígitos: '))

if(digito === senha){
    console.log('Acesso Permitido.')
}else{
    console.log('Acesso Negado.')
}