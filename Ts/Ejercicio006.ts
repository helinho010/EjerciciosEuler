function sumaCuadrados(limiteInferior: number, limiteSuperior:number): number
{
    let suma : number = 0;

    while (limiteInferior <= limiteSuperior) {
        
        suma += Math.pow(limiteInferior,2)
        limiteInferior ++;
    }

    return suma;
}

function cuadradoSuma(limiteInferior:number, limiteSuperior):number
{
    let suma: number = 0
    while (limiteInferior <= limiteSuperior) {
        
        suma += limiteInferior;
        limiteInferior ++;
    }
    suma = Math.pow(suma,2);
    return suma;
}

function cuadradoSuma2(limiteInferior:number, limiteSuperior:number): number
{
    let sumaTotal:number = 0 ;
    sumaTotal = (limiteInferior+limiteSuperior)*50;
    return Math.pow(sumaTotal,2);
}
function sumaCuadrados2(limiteInferior:number, limiteSuperior:number):number
{
    let sumaTotal:number = 0;
    sumaTotal = (limiteSuperior * (limiteSuperior +1) * (2*limiteSuperior+1))/6;
    return sumaTotal;
}

console.time();
let sc: number = sumaCuadrados(1,100);
let cs: number = cuadradoSuma(1,100);
console.log(`la diferencia de cuadrados entre ${cs} - ${sc} es: ${cs - sc}`);
console.timeEnd();
console.log();
console.time();
sc = sumaCuadrados2(1,100);
cs = cuadradoSuma2(1,100)
console.log(`la diferencia de cuadrados entre ${cs} - ${sc} es: ${cs - sc}`);
console.timeEnd();