const prompt = require('prompt-sync')();

const dia = prompt('Digite o dia da semana (Ex.: "segunda", "terca", "sabado"): ');

if (dia === 'sabado' || dia === 'domingo'){
    console.log('É Final de Semana!!!!')
}else if(dia === 'segunda' || dia === 'terca' || dia === 'quarta' || dia === 'quinta' || dia === 'sexta'){
    console.log('É dia de semana!')
}else{
    console.log('Não te entendi!')
}