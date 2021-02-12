// 1°H Pablo Lago
function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	
	if(edad > 17 )
    {
    	alert(" es mayor de edad ");
    }
     else 
     
    if(edad > 12 && edad <17)
         {
    		alert(" es adolescente ");
    }
    else
    {   
     	alert(" es un niño ");
    }  
}