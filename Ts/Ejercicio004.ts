function numeroInvertido(numero:number):number
{
    let numeroDigitosInicial:number = (numero.toString()).length ;
    let numeroDigitos:number = numeroDigitosInicial;
    let digitoNumero:number = 0;
    let numeroNuevo:number = 0;

    for (let index = 0; index < numeroDigitosInicial ; index++) 
    {
       digitoNumero = numero % 10;
       numero = Math.floor(numero / 10);
       numeroNuevo += digitoNumero * Math.pow(10,numeroDigitos-1);       
       numeroDigitos --;
    }

    return numeroNuevo ;
}

function esPalindromo(numero:number):boolean
{
    let respuesta:boolean = false;    
    if (numero === numeroInvertido(numero)) 
    {
        respuesta = true;    
    }

    return respuesta;
}

function palindromeMultiploDosNumerosDeTresDigitos(cantidadDeDigitos:number):number
{
    let numerosPalindromos:Array<number> =[0];
    
    for (let i = Math.pow(10,cantidadDeDigitos)-1 ; i >= Math.pow(10,cantidadDeDigitos-1); i--) 
    {
        for (let j = i; j >= Math.pow(10,cantidadDeDigitos-1); j--)
        {
            if (i*j === numeroInvertido(i*j)) 
            {
                numerosPalindromos.push(i*j);
            }        
        }
    }
    return numerosPalindromos.sort((a,b) => b-a)[0]; //Retorna el numero palindromico mayor de tres digitos
    //return numerosPalindromos.sort((a,b) => b-a); //Retorna el array de numeros palindromicos
}
console.time();
console.log(palindromeMultiploDosNumerosDeTresDigitos(2));
console.timeEnd();
console.log("\n");
console.time();
console.log(palindromeMultiploDosNumerosDeTresDigitos(3));
console.timeEnd();
console.log("\n");
console.time();
console.log(palindromeMultiploDosNumerosDeTresDigitos(4));
console.timeEnd();
console.log("\n");
