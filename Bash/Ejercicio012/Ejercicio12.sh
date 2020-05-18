#!/bin/bash

resultado=`echo "2^$1" | bc -l | tr -d "\n" | tr -d '\'`
ndigitos=${#resultado}
suma=0
for ((c=1; c<=$ndigitos; c++))
do
 digito=`echo "$resultado" | cut -c "$c"`
 ((suma=$suma+$digito))
done
echo -e " digitos: $ndigitos \n"
echo -e " resultado: $resultado\n"
echo -e "suma: $suma"
