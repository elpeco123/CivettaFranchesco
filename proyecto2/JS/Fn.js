let persona1 = {
    nombre: "franchesco",
    apellido: "civetta",
    edad: 19,
    dni: 46520690,
    colores:["rojo","azul","verde"] 
}
let persona2 = {
    nombre: "nahuel",
    apellido: "bertulo",
    edad:21,
    dni:12345678,
    colores: ["amarillo","azul","negro"]
}
function calcular (persona1, persona2){
    if (persona1.edad>persona2.edad){
        console.log (persona1.nombre + " es mayor que "+ persona2.nombre);
        for (let i = 0; i < persona1.colores.length; i++) {
            if (persona1.colores[i]=="azul"){
                console.log (persona1.nombre+" le gusta el color azul")
            }
        }
    }else {console.log (persona2.nombre + " es mayor que "+ persona1.nombre)
    for (let i = 0; i < persona2.colores.length; i++) {
        if (persona2.colores[i]=="azul"){
            console.log (persona2.nombre+" le gusta el color azul")
        }
    }
    }
return calcular;
}

calcular(persona1,persona2);