//IMC

function imc(){
	var altura;
	var peso;
	var resultado;

	altura=parseFloat(document.querySelector("#altura").value);
	peso=parseFloat(document.querySelector("#peso").value);
	resultado=(peso/(altura*altura));

	document.querySelector("#resultado").value = resultado;
}
