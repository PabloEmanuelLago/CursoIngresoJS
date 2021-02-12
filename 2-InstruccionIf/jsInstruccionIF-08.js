// 1°H Pablo Lago
function mostrar()
{
	var edad;
	var estados; 

	estados = estadoCivil.value;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
    
 	if(edad > 17 && estados != " Soltero ")
{
    alert(" es soltero y no es menor "); 
}
	
}//FIN DE LA FUNCIÓN