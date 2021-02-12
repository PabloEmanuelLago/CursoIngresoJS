// 1°H Pablo Lago
/*Test
examen = 9 EXCELENTE
examen = 8 usted aprobó con
examen = 4 usted aprobó con
examen = 3 vamos, la proxima se puede
*/
function mostrar()
{
	var examen;
   
	examen = Math.floor(Math.random() * 10) + 1;
	//Hardcodeo
    examen = parseInt(examen);

	if (examen > 8 )
    {	
	   alert(" tu nota es " + examen + " EXCELENTE ");
	}
	else
	//{
		if (examen > 3)
		{
		  alert(" usted aprobó con " + examen);
		}
	else
	{
		alert(" su nota es " + examen + " ," + " vamos, la proxima se puede ");	
	}
}