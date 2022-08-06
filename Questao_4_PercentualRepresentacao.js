function calculaPercentual(lucroIndividual, lucroTotal){
    return ((lucroIndividual / lucroTotal) * 100)
}

var SP = 67836.43
var RJ = 36678.66
var MG = 29229.88
var ES = 27165.48
var OUTROS = 19849.53

var lucroTotal = SP + RJ + MG + ES + OUTROS

console.log("Percentual de São Paulo = " + calculaPercentual(SP, lucroTotal).toFixed(2) + " %");
console.log("Percentual do Rio de Janeiro = " + calculaPercentual(RJ, lucroTotal).toFixed(2) + " %");
console.log("Percentual de Minas Gerais = " + calculaPercentual(MG, lucroTotal).toFixed(2) + " %");
console.log("Percentual do Espírito santo = " + calculaPercentual(ES, lucroTotal).toFixed(2) + " %");
console.log("Percentual de Outros Estados = " + calculaPercentual(OUTROS, lucroTotal).toFixed(2) + " %");