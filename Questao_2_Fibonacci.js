var numero = 10
var antecessor = 0
var sucessor = 1 
var numeroTemporario
var pertenceASequencia = false
console.log("Sequência de Fibonacci abaixo : \n");

for(var i = 0; i < numero; i++){
    if(i == 0){
        sucessor = 0
    }else if(i == 1){
        sucessor = 1
    }
    else{
        numeroTemporario = sucessor
        sucessor = antecessor + sucessor
        antecessor = numeroTemporario
    }
    console.log(sucessor + " ");
    if(sucessor == numero){
        pertenceASequencia = true
    }
}

if(pertenceASequencia){
    console.log("\nO número informado " + numero + " pertence a sequência de Fibonacci");
}else{
    console.log("\nO número informado " + numero + " NÃO pertence a sequência de Fibonacci");
}