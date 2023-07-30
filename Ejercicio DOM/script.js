//La empresa perfumes latinos premiará a su empleado del mes (quien más dinero recaude en ventas) con una comisión y requiere un programa que almacene y muestre:

//Qué cantidad de cada productos vendió cada vendedor.
//La suma total de dinero recolectada por cada vendedor.
//Nombre del empleado del mes, en caso de haber vendido lo mismo indicar que fue un empate.

//La empresa actualmente cuenta con los siguientes 4 productos que tienen los siguientes nombres y precios:
//Aqua: 200 usd.
//Emoción: 180 usd.
//Alegría: 160 usd.
//Frescura: 150 usd.

//Y dos vendedores Juana y Pedro.

//Notas.
//Los resultados deben visualizarse en consola y deben activarse a través de botones.
//El programa debe validar y mostrar un mensaje de error si no se ingresa un valor numérico.(Opcional).
//Debe hacer uso de funciones, arrays y estructuras de control para resolver el ejercicio.
//Realizar el ejercicio por medio de cualquiera de los métodos de salidas en JS (console, alert o document).

const productos = {
    Aqua: 200,
    Emocion: 180,
    Alegria: 160,
    Frescura: 150
  };
  
  const VentasJuana = {
    Aqua: 0,
    Emocion: 0,
    Alegria: 0,
    Frescura: 0
  };
  
  const VentasPedro = {
    Aqua: 1,
    Emocion: 1,
    Alegria: 1,
    Frescura: 1,
  };
  
  function capturaVentas() {
    event.preventDefault();
    guardarVentas()
    totalventas = sumarVentasVendedores(VentasPedro, VentasJuana)
    console.log(totalventas)
    quienVendioMas(totalventas)
  }
  
  function guardarVentas() {
    VentasPedro.Aqua = document.getElementById('pedroAqua').value;
    VentasPedro.Emocion = document.getElementById('pedroEmocion').value;
    VentasPedro.Alegria = document.getElementById('pedroAlegria').value;
    VentasPedro.Frescura = document.getElementById('pedroFrescura').value;
  
    VentasJuana.Aqua = document.getElementById('juanaAqua').value;
    VentasJuana.Emocion = document.getElementById('juanaEmocion').value;
    VentasJuana.Alegria = document.getElementById('juanaAlegria').value;
    VentasJuana.Frescura = document.getElementById('juanaFrescura').value;
  }
  
  function sumarVentasVendedores(parametro1, VentasJuana) {
    let totalventaspedro = sumaVentas(parametro1)
    let totalventasjuana = sumaVentas(VentasJuana)
    return {
      'ventaspedro': totalventaspedro,
      'ventasjuana': totalventasjuana
    }
  }
  
  function sumaVentas(ventas) { 
    let totalventas = 0
     for (key in ventas) { 
        let element = ventas[key]
        let valorPerfume = productos[key] 
        let totalPerfume = element * valorPerfume 
        totalventas += totalPerfume 
     }
    return totalventas
  }
  
  function quienVendioMas(ventastotales) {
    let ventaspedro = ventastotales['ventaspedro'];
    let ventasjuana = ventastotales['ventasjuana'];
    let resultadoParrafo = document.getElementById('resultado');
    let totalVentaJuanaParrafo = document.getElementById('total-venta-juana');
    let totalVentaPedroParrafo = document.getElementById('total-venta-pedro');
  
    if (ventasjuana > ventaspedro) {
      resultadoParrafo.textContent = 'El empleado del mes es Juana :3';
      console.log('El empleado del mes es Juana');
    } else if (ventaspedro > ventasjuana) {
      resultadoParrafo.textContent = 'El empleado del mes es Pedro';
      console.log('El empleado del mes es Pedro');
    } else {
      resultadoParrafo.textContent = 'Empate';
      console.log('Empate');
    }
    totalVentaJuanaParrafo.textContent = `Las ventas totales de Juana fueron $${ventasjuana}`;
    totalVentaPedroParrafo.textContent = `Las ventas totales de Pedro fueron $${ventaspedro}`;
    console.log(`Las ventas totales de Juana fueron $${ventasjuana}`);
    console.log(`Las ventas totales de Pedro fueron $${ventaspedro}`);
  
  }