// 1°H Pablo Lago
function mostrar()
{
	var edad;
  var estado;
    
  estado = document.getElementById('estadoCivil').value;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
    
    if (edad < 19 && estado != "Soltero" )
   	{ 
   	   alert(" es muy pequeño para NO ser soltero "); 
    }
	


}//FIN DE LA FUNCIÓN