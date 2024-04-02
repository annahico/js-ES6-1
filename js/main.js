function validarDNI(number, letter) {
    const letters = ['T,R,W,A,G,M,Y,F,P,D,X,B,N,J,Z,S,Q,V,H,L,C,K,E,T',];
    
    // Calcular el módulo del número del DNI entre 23
    const index = number % 23;
    
    // Obtener la letra correspondiente del array
    const calculatedLetter = letter [index];
    
    // Comparar con la letra proporcionada

    calculetedLetter = letter.toUpperCase();
//     if (letraCalculada === letra.toUpperCase()) {
//         return true;
//     } else {
//         return false;
//     }

return letter == calculatedLetter;

}

const result = validarDNI(123456789, "H");
console.log(result);