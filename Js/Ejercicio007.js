"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ejercicio003_1 = require("./Ejercicio003");
function numeroPrimo(posicionPrimo) {
    let posPrimo = 0;
    let contadorPrimos = 0;
    let numerosNatural = 2;
    while (contadorPrimos < posicionPrimo) {
        if (Ejercicio003_1.esPrimo(numerosNatural)) {
            contadorPrimos++;
            posPrimo = numerosNatural;
        }
        numerosNatural++;
    }
    console.log(`El numero primo en la posicion ${posicionPrimo} es : ${posPrimo}`);
}
console.time();
numeroPrimo(10001);
console.timeEnd();
