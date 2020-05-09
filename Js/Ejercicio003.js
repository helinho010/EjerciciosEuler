"use strict";
// Funcion para saber si un numero es primo o no
Object.defineProperty(exports, "__esModule", { value: true });
exports.esPrimo = void 0;
function esPrimo(numero) {
    const maxDivisor = Math.floor(Math.sqrt(numero));
    let valorSiNoPrimo = false;
    // Cuenta el numero de veces que un numero es divisible entre otro.
    // eje. num = 12, puede ser divisible entre 1,2,3,4,6 entonces el contador sera = 5    
    let contadorDivisible = 1; //2
    let numeroDivisor = 1; //2, 3, 4
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
exports.esPrimo = esPrimo;
function calcularMayorPrimoDivisor(numero) {
    const numeroPrincipal = numero;
    let primoMayor = 0;
    for (let index = Math.floor(numeroPrincipal / 2); index >= 2; index--) {
        if (esPrimo(index)) {
            if (numeroPrincipal % index == 0) {
                console.log(`\n El numero primo mayor divisible de ${numeroPrincipal} es: ` + index + "\n");
                break;
            }
        }
    }
}
/*console.time();
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
console.timeEnd();*/
