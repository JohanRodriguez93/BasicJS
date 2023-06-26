//Deberas realizar un semáforo utilizando JS.
//El semáforo deberá cambiar de luz de Verde a Amarilla y de Amarilla a Roja y luego de nuevo a Verde.
//Puedes mostrar la imagen del semáforo cambiando, hacer el cambio con console.log o con alert.
//Se debe respetar el orden de los colores:
//De rojo pasa a Verde.
//De amarillo puede pasar a Rojo.
//De Verde pasa a Amarillo.

let Colores = ['Rojo', 'Amarillo', 'Verde'];
const semaforoImg = document.querySelector('.Semaforo-img');

function CambiarLuz() {
  const color = Colores.pop()
  console.log(color)
  //document.write(color)
  if (!Colores.length)
  Colores = ['Rojo', 'Amarillo', 'Verde']
  semaforoImg.src = "Imagenes/"+color+".png"
  return color
}

setInterval(CambiarLuz, 3500);  