function esPrimo(numero) {
    var maxDivisor = Math.floor(Math.sqrt(numero));
    var valorSiNoPrimo = false;
    // Cuenta el numero de veces que un numero es divisible entre otro.
    // eje. num = 12, puede ser divisible entre 1,2,3,4,6 entonces el contador sera = 5    
    var contadorDivisible = 1; //2
    var numeroDivisor = 1; //2, 3, 4
    while (numeroDivisor <= maxDivisor && contadorDivisible <= 2) {
        if (numero % numeroDivisor == 0) {
            contadorDivisible++;
        }
        numeroDivisor++;
    }
    if (contadorDivisible == 2) {
        valorSiNoPrimo = true;
    }
    else {
        valorSiNoPrimo = false;
    }
    return valorSiNoPrimo;
}
function numeroPrimo(posicionPrimo) {
    var posPrimo = 0;
    var contadorPrimos = 0;
    var numerosNatural = 2;
    while (contadorPrimos < posicionPrimo) {
        if (esPrimo(numerosNatural)) {
            contadorPrimos++;
            posPrimo = numerosNatural;
        }
        numerosNatural++;
    }
    console.log("El numero primo en la posicion " + posicionPrimo + " es : " + posPrimo);
}
console.time();
console.log(numeroPrimo(10001));
console.timeEnd();
