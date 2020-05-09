"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ejercicio003_1 = require("./Ejercicio003");
function exponente(num, limite) {
    let contador = 1;
    while (Math.pow(num, contador) <= limite) {
        contador++;
    }
    return Math.pow(num, contador - 1);
}
function numMinimoMultiplo(numInicial, numFinal) {
    let primos = [];
    if (numInicial < numFinal) {
        for (let index = numInicial; index <= numFinal; index++) {
            if (Ejercicio003_1.esPrimo(index)) {
                if (index == 2 || index == 3) {
                    primos.push(exponente(index, numFinal));
                }
                else {
                    primos.push(index);
                }
            }
        }
    }
    let numMultiplo = 1;
    for (let index = 0; index < primos.length; index++) {
        numMultiplo *= primos[index];
    }
    return numMultiplo;
}
console.time();
console.log("::: Numero positivo mas chico que puede ser dividido entre 1,...,10 es:");
console.log(numMinimoMultiplo(1, 10));
console.timeEnd();
console.log();
console.time();
console.log("::: Numero positivo mas chico que puede ser dividido entre 1,...,20 es:");
console.log(numMinimoMultiplo(1, 20));
console.timeEnd();
