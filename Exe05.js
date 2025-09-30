const prompt = require('prompt-sync')();

const renda = Number(prompt('Qual a sua renda: R$ '));
const cpf = (prompt('Você possui restrição no seu CPF (SIM ou NAO): '));

if (renda >= 2500 && cpf === 'nao'){
    console.log('Empréstimo Aprovado')
}else{
    console.log('Empréstimo Negado!!!')
}