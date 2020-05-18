#!/bin/bash
function esPrimo
{
    maxDivisor=`echo "sqrt($1)" | bc`
    valorSiNoPrimo=0
    contadorDivisible=1
    numeroDivisor=1
    while (( ( $numeroDivisor <= $maxDivisor ) && ( $contadorDivisible <= 2 ) ))
    do
        if (( ($1%$numeroDivisor) == 0 ))
        then
            ((contadorDivisible++))
        fi
            ((numeroDivisor++))
    done

    if (( $contadorDivisible == 2 ))
     then
       valorSiNoPrimo=0
     else
        valorSiNoPrimo=1
     fi
    return $valorSiNoPrimo
}
#
#esPrimo 23
#echo $?
#
timeInicial=`date +%H:%M:%S`
numTopeSuma=2000000
contador=2
suma=0
while (( $contador <= $numTopeSuma ))
do 
#  relacion="import {esPrimo} from './Ejercicio003'; console.log(esPrimo($contador))";
#  primo=`ts-node -e $relacion"`

  if `esPrimo $contador` 
  then
   (( suma=$suma+$contador ))
  fi

 ((contador=$contador+1))
done
echo "la suma de los primos menores de $numTopeSuma es: $suma" >> RspEjercio10.txt
timeFinal=`date +%H:%M:%S`
echo "Inicio: $timeInicial - final: $timeFinal" >> RspEjercio10.txt


