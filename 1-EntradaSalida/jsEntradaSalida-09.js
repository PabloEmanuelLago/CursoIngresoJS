/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
  var porcentaje
	var sueldo;
	var resultado;
  var descuento;

	sueldo = txtIdSueldo.value;
	sueldo = parseInt(sueldo);
   
  descuento = parseInt(descuento);
  descuento = 10;

  porcentaje = sueldo * descuento/100;

  resultado = sueldo +porcentaje;
  
  txtIdResultado.value = resultado;


   //Pablo Lago 1°H
   
	//valor = sueldo * 10/100;

   // valor = sueldo * 0.1;

   // resultado = sueldo + aumento;
 
    //resultado = sueldo + (sueldo * 0.1);

}
