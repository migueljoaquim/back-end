console.log('Clculadora');

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

entradaDados.question('Digite um calculo: \n', function(numero1) {

    let numeroDoCalculo = numero1

    entradaDados.question('Digite um calculo: \n', function(numero2) {

        let numeroDocalculo2 = numero2

        let adicao = parseFloat(numeroDoCalculo) + parseFloat(numeroDocalculo2)
        console.log(adicao)



    });

});