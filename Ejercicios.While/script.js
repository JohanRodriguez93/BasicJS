//1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

let numero = parseInt(prompt("Ingrese un número:"));
let i = 1;

while (i <= numero) {
  if (i % 5 === 0) {
    console.log(i);
  }
  
    i++; 
}

//2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

let numero1 = parseInt(prompt("Ingrese el primer número entre 1 y 50: "));
let numero2 = parseInt(prompt("Ingrese el segundo número entre 1 y 50: "));
let i1 = 1;

while (i1 <= 50) {
    if (i1 === numero1 && i1 === numero2) {
        console.log(i1 + " ¡Lotería!");
    } else {
        console.log(i1);
    }
    i1++;
}

//3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.

const numeros = [];
let num = parseInt(prompt("Ingrese un número; 0 para terminar: "));

while (num !== 0) {
    numeros.push(num);
    num = parseInt(prompt("Ingrese un número; 0 para terminar: "));
}
console.log(numeros);

//4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.

let palabras = "";
let palabra = prompt("Ingrese una palabra; no escribir para terminar: ");

while (palabra !== "") {
    palabras + palabra;
    palabra = prompt("Ingrese una palabra; no escribir para terminar: ");
}
console.log(palabras);

//5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.

let dia = "";
dia = prompt("Ingrese un día de la semana: ");

while (dia !== "domingo") {
    
    if (dia === "lunes") {
      alert("Inicio de semana");
            break;
    }
    else if (dia === "martes") {
      alert("Todavia falta para el fin de semana");
            break;
    }
    else if (dia === "miércoles") {
      alert("Ombligo de la semana");
            break;
    }
    else if (dia === "jueves") {
      alert("¡¡Juernes!!");
            break;
    }
    else if (dia === "viernes") {
      alert("¡¡Por fin!!");
            break;
    }
    else if (dia === "sábado") {
      alert("Fin de semana");
            break;
    }
    else if (dia === "domingo"){
      alert("Ve a descansar");
            break;
    }
    else {
      alert("Ingrese un día valido");
    }
}