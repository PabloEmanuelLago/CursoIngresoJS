/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/  

/*Pablo 1°H*/

function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
    var Sumar;
    
	precio1 = txtIdPrecioUno.value;
	precio1 = parseInt(precio1);

	precio2 = txtIdPrecioDos.value;
	precio2 = parseInt(precio2);

	precio3 = txtIdPrecioTres.value;
	precio3 = parseInt(precio3);

	Sumar = precio1 + precio2 + precio3;

	alert(" la suma total es $ " + Sumar);
	
}
function Promedio () 
{
	var precio1;
    var precio2;
    var precio3;
    var Suma;
    var promedio;
    
    precio1 = txtIdPrecioUno.value;
    precio1 = parseInt(precio1);

    precio2 = txtIdPrecioDos.value;
    precio2 = parseInt(precio2);

    precio3 = txtIdPrecioTres.value;
    precio3 = parseInt(precio3);

    Suma = precio1 + precio2 + precio3;

    promedio = Suma / 3;

    alert(" el promedio es $ " + promedio);

}


function PrecioFinal () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var PrecioFinal;
    
	precio1 = txtIdPrecioUno.value;
	precio1 = parseInt(precio1);

	precio2 = txtIdPrecioDos.value;
	precio2 = parseInt(precio2);

	precio3 = txtIdPrecioTres.value;
	precio3 = parseInt(precio3);

	suma = precio1 + precio2 + precio3;

    PrecioFinal = suma * 1.21;

	alert(" el Precio Final con IVA es $ " + PrecioFinal);
}