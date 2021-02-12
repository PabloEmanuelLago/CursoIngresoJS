/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/  
 // Pablo Lago 1°H

function Rectangulo () 
{
	var largo;
	var ancho;
    var alambre;

    largo = txtIdLargo.value;
    largo = parseInt(largo);

    ancho = txtIdAncho.value;
    ancho = parseInt(ancho);

    alambre = (2 * largo + 2 * ancho) * 3;
    

    alert( " se necesitan " + alambre + " hilos de alambres ");

}
   //Pablo Lago 1°H
function Circulo () 
{
var radio;
var cantidad; 
var circulo;

radio = txtIdRadio.value;
radio = parseInt(radio);

circulo = 2 * Math.PI * radio;

cantidad = circulo * 3;

   alert( " la cantidad necesaria de alambre es " + cantidad);
}
function Materiales () 
{
   var largo1;
   var ancho1;
   var alambre;
   var cemento;
   var cal;

   largo1 = txtIdLargo.value;
   largo1 = parseInt(largo1);

   ancho1 = txtIdAncho.value;
   ancho1 = parseInt(ancho1);

   cemento = (largo1 * ancho1) * 3;
   cal = (largo1 * ancho1) * 2; 

   alert( " se necesitan " + cemento + " bolsas de cemento " + " y " + cal + " bolsas de cal ");



	 //area = b*h
	 //cemento = area * 2
	 //cal = area * 3
    
     


}