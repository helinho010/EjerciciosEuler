// Funcion para saber si un numero es primo o no

export function esPrimo( numero:number):boolean
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

function calcularMayorPrimoDivisor( numero:number):void
{
    const numeroPrincipal:number = numero;
    let primoMayor:number = 0;

    for (let index = Math.floor(numeroPrincipal/2); index >= 2 ; index--) 
    {
        if (esPrimo(index)) 
        {
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


