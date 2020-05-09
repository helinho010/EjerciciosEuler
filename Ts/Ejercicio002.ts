console.time();
let numInicialFibo: number = 0;
let numsiguienteFibo: number = 1;
let numSerieFibo: number = 0;
let controlNumSerieFibo: boolean = true;
let sumaParesFibo:number = 0;

while (controlNumSerieFibo == true) {
    
    numSerieFibo = numInicialFibo + numsiguienteFibo;
    
    // Condicion para que el numero de la serie fibonacci no exceda la cantidad permitida. 
    if (numSerieFibo <= 4000000) {
        
        // condicional para sumar los numeros pares de la serie Fibonacci
        if (numSerieFibo % 2 == 0) 
        {
            sumaParesFibo += numSerieFibo;
        }
        console.log(numSerieFibo); 
        //Nuevos Valores para generar el siguiente numero de la serie fibonacci
        numInicialFibo = numsiguienteFibo;
        numsiguienteFibo = numSerieFibo;
        numSerieFibo = 0;    
    }else{
        controlNumSerieFibo = false;
    }           
}
console.log("---Suma de los numeros pares: ---");
console.log(sumaParesFibo);
console.timeEnd();
