// 1°H Pablo Lago
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch (destinoIngresado)
	{

	case "Ushuaia":
	case "Bariloche":
		alert("Sur");
		break;

	case "Mar del plata":
		alert("Este");
		break;

	case "Cataratas":
		alert("Norte");
		break;
	}
}//FIN DE LA FUNCIÓN