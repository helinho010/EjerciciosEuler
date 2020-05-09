function esPrimo( numero:number):boolean
{
    const maxDivisor:number = Math.floor(Math.sqrt(numero));
    let valorSiNoPrimo: boolean = false;
    // Cuenta el numero de veces que un numero es divisible entre otro.
    // eje. num = 12, puede ser divisible entre 1,2,3,4,6 entonces el contador sera = 5    
    let contadorDivisible:number = 1; //2
    let numeroDivisor:number = 1; //2, 3, 4
    
    while (numeroDivisor <= maxDivisor && contadorDivisible <= 2)  
    {
        if (numero % numeroDivisor == 0) {
            contadorDivisible ++;
        }
        numeroDivisor++;
    }
    if (contadorDivisible == 2) {
        valorSiNoPrimo = true;
    } else {
        valorSiNoPrimo = false;
    }

    return valorSiNoPrimo;
}

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