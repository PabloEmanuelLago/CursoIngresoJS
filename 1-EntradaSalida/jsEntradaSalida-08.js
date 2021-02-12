/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{ 
	var Dividendo;
	var Divisor;
	var resultado;

    Dividendo = txtIdNumeroDividendo.value;
    Dividendo = parseInt(Dividendo);

    Divisor = txtIdNumeroDivisor.value;
    Divisor = parseInt(Divisor);

   
    resultado = Dividendo % Divisor;

	alert(" el resto es " + resultado);
}

//Pablo Lago 1°H
