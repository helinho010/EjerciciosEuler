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

function exponente(num:number, limite:number):number
{
    let contador:number = 1;
    while (Math.pow(num,contador) <= limite) 
    {
        contador ++;    
    }

    return Math.pow(num,contador-1);
}


function numMinimoMultiplo(numInicial:number, numFinal:number):number
{
    let primos: Array<number> = [];

    if (numInicial < numFinal ) 
    {
        for (let index = numInicial; index <= numFinal ;index++) 
        {
            if(esPrimo(index))
            {
               if (index == 2 || index == 3) 
               {
                  primos.push( exponente(index, numFinal) ); 
               }
               else
               {
                 primos.push(index); 
               } 
               
            }
            
        }
    }
    let numMultiplo:number = 1;

    for (let index = 0; index < primos.length; index++) {
        numMultiplo *= primos[index];
    }
    return numMultiplo;
}




console.time();
console.log("::: Numero positivo mas chico que puede ser dividido entre 1,...,10 es:");
console.log(numMinimoMultiplo(1,10));
console.timeEnd();
console.log();
console.time();
console.log("::: Numero positivo mas chico que puede ser dividido entre 1,...,20 es:");
console.log(numMinimoMultiplo(1,20));
console.timeEnd();