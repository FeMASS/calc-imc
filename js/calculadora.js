

function calcular() {
	var num1,num2,result,operacao;

	num1 = parseFloat(document.querySelector("#num1").value);
	num2 = parseFloat(document.querySelector("#num2").value);
	operacao = document.querySelector("#operacao").value;

	switch(operacao){
		case "1":
		result=num1+num2;
		break;
		case "2":
		result=num1-num2;
		break;
		case "3":
		result=num1/num2;
		break;
		case "4":
		result=num1*num2;
		break;
		}
		document.querySelector("#result").value=result;
	}
