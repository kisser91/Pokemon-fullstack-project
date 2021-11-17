ejercicio 3 -> MAX VALUE


ENCONTRAR CUAL ES LA MAXIMA GANANCIA POSIBLE DE COMPRAR A UN HORARIO Y VENDER A OTRO DESPUES


ACCIONES:[4,3,2,5,11]
MAYOR GANANCIA [9]


AVERGIUAR QUE DIA ESTA EL VALOR MAS BAJO --> COMPARAR CON LOS SIGUIENTES
SI NO HAY VALOR DE GANANCIA, CAMBIAR EL MINIMO.

FUERZA BRUTA->
COMPLEJIDAD TEMPORAL O(N**)
COMPLEJIDAD ESPACIAL O(1)


buscar la maxima ganancia iterando el array 2 veces

funciton Maxvalue (acciones){
    let max = acciones[1] -acciones[0];
    for(let i=o, i < acciones.length -1, i++){
        for(let j=i+1, j < acciones.length -1, j++){
            const potencial= acciones[j]-acciones[i];
            max = potencial > max? potencial: max;
            }
    }
}


FUERZA BRUTA->
COMPLEJIDAD TEMPORAL O(N)
COMPLEJIDAD ESPACIAL O(1)


funciton Maxvalue (acciones){
    let max = acciones[1] -acciones[0];
    let min = acciones[0]
    for(let i=o, i < acciones.length , i++){
        const potencial = acciones[i]-min;
        max= math.max(potencial,max); // trae al max grande de los 2
        min= math.min(acciones[i],min); // trae al min de los 2

    }
    return max;
}

