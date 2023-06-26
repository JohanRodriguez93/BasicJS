//1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.

const numeros = [];

for (let i = 0; i < 10; i++) {
  numeros.push(Math.floor(Math.random() * 20));
}

console.log(numeros);

//2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.

const palabras = prompt("Ingresa varias palabras separadas por coma:");
const arreglo = palabras.split(",");

console.log(arreglo);

//3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.

const numeros1 = [10, 40, 30, 20, 15, 5];

numeros1.sort(function(a, b) {
  return a - b;
});

console.log("Array ordenado:", numeros1);
console.log("El número menor es:", numeros1[0]);
console.log("El número mayor es:", numeros1[numeros1.length - 1]);