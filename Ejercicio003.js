// Funcion para saber si un numero es primo o no
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
function calcularMayorPrimoDivisor(numero) {
    var numeroPrincipal = numero;
    var primoMayor = 0;
    for (var index = Math.floor(numeroPrincipal / 2); index >= 2; index--) {
        if (esPrimo(index)) {
            if (numeroPrincipal % index == 0) {
                console.log("\n El numero primo mayor divisible de " + numeroPrincipal + " es: " + index + "\n");
                break;
            }
        }
    }
}
console.time();
calcularMayorPrimoDivisor(10);
console.timeEnd();
console.time();
calcularMayorPrimoDivisor(13195);
console.timeEnd();
console.time();
calcularMayorPrimoDivisor(53195);
console.timeEnd();
console.time();
calcularMayorPrimoDivisor(600851475143);
console.timeEnd();
