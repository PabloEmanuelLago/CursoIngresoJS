// Pablo Lago 1°H

/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/ 
 
function FahrenheitCentigrados () 
{
  var centigrados;
  var tempF;
   
   centigrados = txtIdTemperatura.value;
   centigrados = parseInt(centigrados);

   tempF = txtIdTemperatura.value;
   tempF = parseInt(tempF);

   centigrados = (tempF - 32) / 1.8;

  alert(" los " + tempF + " fahrenheit " + " equivalen a " + centigrados+ " centigrados ");
 
}

function CentigradosFahrenheit () 
{
	var centigrados;
    var tempF;
   
   tempF = txtIdTemperatura.value;
   tempF = parseInt(tempF);

   centigrados = txtIdTemperatura.value;
   centigrados = parseInt(centigrados);

   tempF = (centigrados * 1.8) + 32;

  

  alert(" los " + centigrados + " centigrados " + " equivalen a " + tempF + " fahrenheit ");


}


