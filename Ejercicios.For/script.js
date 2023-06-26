//1. Crea un programa que imprima en consola los números impares del 1 al 50.

for (let i = 1; i <= 50; i ++) {
    if(i % 2 !== 0) {
        console.log(i);
    }
}

//2. Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. https://pastebin.com/Zzk8g7Z6.

const pokemon = [
    { name: 'Snorlax', number: 1 },
    { name: 'Butterfree', number: 2 },
    { name: 'Charizard', number: 3 },
    { name: 'Charmander', number: 4 },
    { name: 'Charmeleon', number: 5 },
    { name: 'Venusaur', number: 6 },
    { name: 'Squirtle', number: 7 },
    { name: 'Wartortle', number: 8 },
    { name: 'Blastoise', number: 9 },
    { name: 'Hypno', number: 10 },
    { name: 'Metapod', number: 11 },
    { name: 'Ivysaur', number: 12 },
    { name: 'Tauros', number: 13 },
    { name: 'Pikachu', number: 14 },
    { name: 'Raichu', number: 15 },
    { name: 'Lapras', number: 16 },
    { name: 'Pidgeotto', number: 17 },
    { name: 'Pidgeot', number: 18 },
    { name: 'Rattata', number: 19 },
    { name: 'Bulbasaur', number: 20 }
];

const numero = prompt("Introduce un número");

for (let i = 1; i <= numero; i++) {
    if (i % 5 === 0) {
        console.log(pokemon[i].name);
    }
}

//3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.

const array = [4,"dos",8,"tres",5,9,1,"cero"];

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
        console.log(array[i]);
    }
}