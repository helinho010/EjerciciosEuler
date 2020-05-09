import { esPrimo } from "./Ejercicio003";

function numeroPrimo(posicionPrimo:number):void
{
    let posPrimo:number = 0;
    let contadorPrimos: number = 0;
    let numerosNatural: number = 2;
    while (contadorPrimos < posicionPrimo) 
    {
        if (esPrimo(numerosNatural)) 
        {
            contadorPrimos ++;    
            posPrimo = numerosNatural;
        }
        numerosNatural++;
    }

    console.log(`El numero primo en la posicion ${posicionPrimo} es : ${posPrimo}`);
}


console.time();
numeroPrimo(10001);
console.timeEnd();