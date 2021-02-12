//1°H Pablo Lago

// Ingresar descripción (por prompt) y precio de un producto (por id).
// programa deberá mostrar por alert la descripción del producto junto al precio aumentado en un 30%. Pueden utilizar el html del ejercicio 4 para resolverlo.

function mostrar()
{   var producto;
	var precio;
    var aumento;
    var resultado;
    var porcentaje;

    precio = document.getElementById('txtIdNombre').value;
    precio = parseInt(precio);
    
    producto = prompt(" ingrese su producto ");
    
    aumento = parseInt(aumento);

    porcentaje = precio * 30/100;
   
    resultado = precio + porcentaje;

    alert(" el precio con el 30% de aumento es " + resultado );
}   

/*bemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/




//salida de datos:
//alert
//document.getElementById("txt..").value = var

//ingreso de datos:

//pablo = document.getElementById('txt...').value = "su nombre es" + pablo;

/*Entradas: prompt, id.value o document.getElementById("...").value
Procesos: concatenar (+)
Salidas:alert, console.log, document.write, id.value o document.getElementById("...").value
*/