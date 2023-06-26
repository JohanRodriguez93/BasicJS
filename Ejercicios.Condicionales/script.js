//1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

let userInput = prompt("¿Eres bellisimo/a?");

if (userInput === `si`) {
    alert(`Ciertamente`);
 }
 else if(userInput === `no`) {
     alert(`No te creo`);
 }

//2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

 let number = prompt("Escribe cualquier número:");

 number = parseInt(number);

 if (number % 2 === 0) {
   alert(`${number} es divisible entre 2`);
 } 
 else {
   alert(`${number} No es divisible entre 2`);
 }

//3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

 let number1 = prompt("Registra un número:");

 number1 = parseInt(number1);

  if(number1 % 2 === 0) {
    alert(`${number1} el númer es par`);
  }
 else {
   alert(`${number1} el número es impar`);
 }

//4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

 let number2 = prompt("Ingresa tu número de cliente:");

 number2 = parseInt(number2);

 if(number2 === 1000){
     alert(`Ganaste un premio`)
 }
 else {
     alert(`Lo sentimos, sigue participando`)
 }

//5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

 let number_uno = prompt("Ingresa un número:");
 number_uno = parseInt(number_uno);
 let number_dos = prompt("Ingresa otro número");
 number_dos = parseInt(number_dos);

 if(number_uno>number_dos){
     alert(`${number_dos} Este es el número menor`)
 }
 else{
     alert(`${number_uno} Este es el número menor`)
 }

//6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

 let numberUno = prompt("Ingresa un número:");
 numberUno = parseInt(numberUno);
 let numberDos = prompt("Ingresa otro número");
 numberDos = parseInt(numberDos);
 let numberTres = prompt("Ingresa un ultimo número");
 numberTres = parseInt(numberTres);

 if(numberUno>numberDos)
 {
     if(numberUno>numberTres){
         alert(`${numberUno} es el numero mayor`)
     }
     else{
         alert(`${numberTres} es el numero mayor`)
     }
 }
 else if (numberDos>numberTres){
     alert(`${numberDos} es el numero mayor`)
 }
 else{
     alert(`${numberTres} es el numero mayor`)
 }

//7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

 let dia = prompt("Ingresa un día de la semana");

 if (dia === "lunes"){
     alert('Inicio de semana')
 }
 else if (dia === "viernes"){
     alert("Inicio del fin de semana")
 }
 else if (dia === "sábado" || dia ==="domingo"){
     alert("fin de semana")
 }
 else{
     alert("por favor ingrese un día valido")
 }

//8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

 let calificacion = prompt("Ingresa tu calificación");
 calificacion = parseInt(calificacion);

 if (calificacion >=1 && calificacion <=5){
     alert("reprobado");
 }
 else if(calificacion >=6 && calificacion <=8){
     alert("Regular");
 }
 else if(calificacion === 9){
     alert("Bien");
 }
 else if(calificacion === 10){
     alert("Excelente");
 }
 else {
    alert("Ingrese un valor valido");
 }

//9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
//El helado sin topping cuesta 50 MXN.
//El topping de oreo cuesta 10 MXN.
//El topping de KitKat cuesta 15 MXN.
//El topping de brownie cuesta 20 MXN.
//En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.

let topping = prompt("Como quiere su helado?");

if (topping === "topping de oreo") {
  alert("El precio total es de 60 MXN.");
} 
else if (topping === "topping de KitKat") {
  alert("El precio total es de 65 MXN.");
} 
else if (topping === "topping de brownie") {
  alert("El precio total es de 70 MXN.");
} 
else {
  alert("no tenemos este topping, lo sentimos. El precio del helado sin topping es de 50 MXN.");
}

//10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida. 
//El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:
 //Course: $4999 MXN
 //Carrera $3999 MXN
 //Master: $2999 MXN
//Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
 //Beca Facebook: 20% de descuento.
 //Beca Google: 15% de descuento.
 //Beca Jesua: 50% de descuento.
//Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
 //Course: 2 meses
 //Carrera 6 meses
 //Master: 12 meses
 
let nivel = prompt("Qué nivel de educación deseas tomar? (Course/Carrera/Master)");
let beca = prompt("Tienes alguna beca? (Facebook/Google/Jesua)");

let precioMensual;
let duracion;
let precioTotal;
let precioBeca;

if (nivel === "Course") {
  precioMensual = 4999;
  duracion = 2;
} else if (nivel === "Carrera") {
  precioMensual = 3999;
  duracion = 6;
} else if (nivel === "Master") {
  precioMensual = 2999;
  duracion = 12;
}

if (beca === "Facebook") {
  precioBeca = precioMensual * 0.2;
} else if (beca === "Google") {
  precioBeca = precioMensual * 0.15;
} else if (beca === "Jesua") {
  precioBeca = precioMensual * 0.5;
}

precioTotal = precioBeca * duracion;

alert(`El precio mensual con descuento es de ${precioBeca} MXN. El precio total del curso es de ${precioTotal} MXN.`);

//11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
//Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
//Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
//total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.

let vehiculo = prompt("Qué tipo de vehículo es? (coche/moto/autobús)");
let kilometros = prompt("Cuántos kilómetros ha recorrido?");
let litros = prompt("Cuántos litros ha consumido?");
let precioKilometro;
let extra;

if (vehiculo === "coche") {
  precioKilometro = 0.20;
} else if (vehiculo === "moto") {
  precioKilometro = 0.10;
} else if (vehiculo === "autobús") {
  precioKilometro = 0.5;
}

if (litros <= 100) {
  extra = 5;
} else {
  extra = 10;
}

let total = (precioKilometro * kilometros) + extra;

alert(`El total a pagar es de ${total}.`);