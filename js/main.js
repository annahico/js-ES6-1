function validarDNI(number, letter) {
    const letters = ["T,R,W,A,G,M,Y,F,P,D,X,B,N,J,Z,S,Q,V,H,L,C,K,E,T",];
    
    // Calcular el módulo del número del DNI entre 23
    const index = number % 23;
    
    // Obtener la letra correspondiente del array
    const calculatedLetter = letters [index];
    
    // Comparar con la letra proporcionada

    calculetedLetter = letter.toUpperCase();
//     if (calculatedLetter === letter.toUpperCase()) {
//         return true;
//     } else {
//         return false;
//     }

return letter == calculatedLetter;

}

const result = validarDNI(123456789, "H");
console.log(result);

// FUNCION ARROW  =>

// function suma (a, b ){
//     return a + b;
// }

// const suma = (a, b) => {
//     return a + b;
// } ahora compactaremos el codigo porque tiene UN solo return

const suma = (a, b) => a + b;

//MAP///

let singulares = ["manzana", "banana", "naranja"];


let plurales = singulares.map(function (f) {
    return f + "s";
});

console.log(plurales);


///parametros de valores por defecto

let getPrecioFinal = (precio, impuesto = 0.7) => precio + precio *
impuesto;

let resultado = getPrecioFinal(500); //850
let resultado2 = getPrecioFinal(500, 1); //1000

console.log(resultado);
console.log(resultado2);

let generaNombre = (numero, prefijo = "RX") => prefijo + numero;

let random = Math.floor(Math.random() * 999);

let nombre = generaNombre(random);

console.log("El robot se llama: ", nombre);

