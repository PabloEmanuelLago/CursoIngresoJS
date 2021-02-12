/* Pablo Lago 1°H
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var nombre;
    var edad;
    
    //var apellidoDelCliente;

   nombre = document.getElementById('txtIdNombre').value;
    edad = document.getElementById('txtIdEdad').value;

    alert (" usted se llama "+ nombre + " y tiene " + edad + " años ");  

    //mensaje concatenado
    
    
    
    //apellidoDelCliente = document.getElementById('txtIdApellido').value;

 
   //alert(" usted se llama "+ nombreDelCliente+" apellido: " + apellidoDelCliente+" y tiene " + edadDelCliente + " años");

   
}

