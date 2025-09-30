const prompt = require('prompt-sync')();

const compra = Number(prompt('Qual o valor da compra: R$'));
const cupom = prompt('Você têm um cupom de desconto? ');
const dias = prompt ('Qual o dia da semana? ');

if (compra > 150 || cupom === 'sim' && dias === 'segunda' || dias === 'terca' || dias === 'quarta' || dias === 'quinta' || dias === 'sexta'){
    console.log('Você têm 10% de desconto!')
}else if (compra < 150 || cupom === 'nao' && dias === 'domingo' || dias === 'sabado' ){
    console.log('Você não têm direito à desconto.')
}