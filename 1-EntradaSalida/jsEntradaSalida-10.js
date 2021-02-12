/* Pablo Lago 1°H
2- en el ejercicio 10 de entrada y salida , se debe pedir el nombre del producto , el importe y tambien se debe pedir el porcentaje de descuento al usuario, mostar el mensaje "usted compro un XXXXXX con XX % de descuento, el precio final es XXXX"*/
function mostrarAumento()
{
	var importe;
	var resultado;
	var descuento;
  var nombreDelProducto;
  var porcentaje;
  var mensaje;

  nombreDelProducto = prompt("nombre del producto");

  importe= txtIdImporte.value;        
  importe = parseInt(importe);

  descuento = prompt("ingrese descuento");
  descuento = parseInt(descuento);
    
  porcentaje = importe * descuento/100;

  resultado = importe - porcentaje;  

  txtIdResultado.value = mensaje;
   
  mensaje =" usted compró un " + nombreDelProducto + " con " + descuento;
  mensaje = mensaje +" % de descuento " + " el precio final es " + resultado;
  txtIdResultado.value = mensaje;
   //alert(" usted compró un " + nombreDelProducto + " con " + descuento + " % de descuento " + " el precio final es " + resultado);  
}

//porcentaje = prompt(" nombre del producto");

//txtIdResultado.value = descuento; 
/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
// txtidresultado es salida*/
//resultado = importe * 0.5;    //procesos
   // Pablo Lago 1°H