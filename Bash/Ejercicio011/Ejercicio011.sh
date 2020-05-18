#!/bin/bash

productoCuatroNumeros=1

for i in 1 2 #3 4 5 6 7 8 9 10 11 12 13 14 15 16 17
do
  for j in 1 2 #3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
  do

   num1=`cat matris.txt | cut -d " " -f $i | head -$j | tail -1 | bc`
   num2=`cat matris.txt | cut -d " " -f $i | head -$j | tail -1 | bc`
   num3=`cat matris.txt | cut -d " " -f $i | head -$j | tail -1 | bc`
   num4=`cat matris.txt | cut -d " " -f $i | head -$j | tail -1 | bc`

   if (( ($num1 == 0) || ($num2 == 0) ))
   then
    echo -e "\t si alguno de los numeros es igual a cero $num1 --- $num2" 
   else
    echo -e "\t todos son diferentes de cero $num1 --- $num2"
   fi

  done
done
