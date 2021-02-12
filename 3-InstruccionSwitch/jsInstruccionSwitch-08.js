// 1°H Pablo Lago
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch (destinoIngresado)
	{

	case "Ushuaia":
	case "Bariloche":
		alert("Hace frío");
		break;

	case "Mar del plata":
	case "Cataratas":
		alert("Hace calor");
		break;
	}
}//FIN DE LA FUNCIÓN