var dados = require('./dados.json')

var menorFaturamento
var maiorFaturamento

//Encontro o primeiro valor válido para ser comparado com os demais,
//onde o valor foi maior que zero 0.
for(var i = 0; i < dados.length; i++){
    if(dados[i].valor > 0){
        menorFaturamento = dados[i].valor
        maiorFaturamento = dados[i].valor
        break
    }
}

//Procura pelo menor e maior valor respectivamente no arquivo dados.json,
for(var i = 0; i < dados.length; i++){
    if(dados[i].valor > 0){

        if(dados[i].valor < menorFaturamento){
            menorFaturamento = dados[i].valor
        }

        if(dados[i].valor > maiorFaturamento){
            maiorFaturamento = dados[i].valor
        }
    }
}

//Calculo dos dias com faturamento maior a zero 0,
//e valor total de faturamento em todos os dias.
var diasComFaturamento = 0
var valorTotalDeFaturamento = 0
for(var i = 0; i < dados.length; i++){
    if(dados[i].valor > 0){
        diasComFaturamento++
        valorTotalDeFaturamento += dados[i].valor
    }
}

//Comparação para saber quantos dias no mês tiveram 
//o valor de faturamento diário superior à média mensal.
var mediaMensal = valorTotalDeFaturamento / diasComFaturamento
var diasComMaiorFaturamentoQueAMedia = 0
for(var i = 0; i < dados.length; i++){
    if(dados[i].valor > mediaMensal){
        diasComMaiorFaturamentoQueAMedia++
    }
}

console.log("O MENOR faturamento foi de : " + menorFaturamento);
console.log("\nO MAIOR faturamento foi de : " + maiorFaturamento);
console.log("\nO número de dias no mês em que o valor de faturamento diário foi superior à média mensal foi de : " + diasComMaiorFaturamentoQueAMedia + " dias");