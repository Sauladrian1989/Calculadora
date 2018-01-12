var operandoA; // Declaracion de variables generales del programa
var operandoB;
var operacion;


function init(){ // Funcion inicial que se carga al abrir la pagina para que las guardar en variables los id de los elementos html y poder usarlos en eventos
	//variables

	var display= document.getElementById("display");
	var on= document.getElementById("on");
	var suma= document.getElementById("mas");
	var resta= document.getElementById("menos");
	var multiplicacion= document.getElementById("por");
	var division= document.getElementById("dividido");
	var igual= document.getElementById("igual");
	var uno= document.getElementById("1");
	var dos= document.getElementById("2");
	var tres= document.getElementById("3");
	var cuatro= document.getElementById("4");
	var cinco= document.getElementById("5");
	var seis= document.getElementById("6");
	var siete= document.getElementById("7");
	var ocho= document.getElementById("8");
	var nueve= document.getElementById("9");
	var cero= document.getElementById("0");
	var punto= document.getElementById("punto");
	var signo= document.getElementById("sign");
    var mas= document.getElementById("mas");
    var on= document.getElementById("on");
    var raiz= document.getElementById("raiz");


//Eventos




uno.onclick= function(e){ // Evento para captura del numero 1
	  	for(var i=0; display.textContent.length>=8;i++){ //ciclo que permite solo teclear 8 numeros en el display
		display.textContent=null;
	}
	

	if(display.textContent=="0"){// ciclo que permite eliminar el 0 cada vez que se teclea un numero nuevo
		display.textContent= display.textContent ="";
		display.textContent= display.textContent +"1";
	}else{
		display.textContent= display.textContent +"1";
	}
	

  	document.getElementById("1").style.transform = "scaleX(.9)";// Funcion que permite hacer el efecto de pulsar la tecla cuando se hace click

  	setTimeout(function() {document.getElementById("1").style.transform="scale(1)";}, 200);
  	

 }

dos.onclick= function(e){ // Evento para captura del numero 2
	for(var i=0; display.textContent.length>=8;i++){
		display.textContent=null;
	}	

	if(display.textContent=="0"){
		display.textContent= display.textContent ="";
		display.textContent= display.textContent +"2";
	}else{
		display.textContent= display.textContent +"2";
	}

	document.getElementById("2").style.transform = "scaleX(.9)";
	setTimeout(function() {document.getElementById("2").style.transform="scale(1)";}, 200);
	

}

tres.onclick= function(e){ // Evento para captura del numero 1
	for(var i=0; display.textContent.length>=8;i++){
		display.textContent=null;
	}

if(display.textContent=="0"){
		display.textContent= display.textContent ="";
		display.textContent= display.textContent +"3";
	}else{
		display.textContent= display.textContent +"3";
	}
	document.getElementById("3").style.transform = "scaleX(.9)";
	setTimeout(function() {document.getElementById("3").style.transform="scale(1)";}, 200);
}

cuatro.onclick= function(e){ //Evento para captura del numero 4
	for(var i=0; display.textContent.length>=8;i++){
		display.textContent=null;
	}	

	if(display.textContent=="0"){
		display.textContent= display.textContent ="";
		display.textContent= display.textContent +"4";
	}else{
		display.textContent= display.textContent +"4";
	}

	document.getElementById("4").style.transform = "scaleX(.9)";
	setTimeout(function() {document.getElementById("4").style.transform="scale(1)";}, 200);
	}

cinco.onclick= function(e){//Evento para captura del numero 5
	for(var i=0; display.textContent.length>=8;i++){
		display.textContent=null;
	}

if(display.textContent=="0"){
		display.textContent= display.textContent ="";
		display.textContent= display.textContent +"5";
	}else{
		display.textContent= display.textContent +"5";
	}

	document.getElementById("5").style.transform = "scaleX(.9)";
	setTimeout(function() {document.getElementById("5").style.transform="scale(1)";}, 200);
}

seis.onclick= function(e){ //Evento para captura del numero 6
	for(var i=0; display.textContent.length>=8;i++){
		display.textContent=null;
	}

	if(display.textContent=="0"){
		display.textContent= display.textContent ="";
		display.textContent= display.textContent +"6";
	}else{
		display.textContent= display.textContent +"6";
	}
	document.getElementById("6").style.transform = "scaleX(.9)";
	setTimeout(function() {document.getElementById("6").style.transform="scale(1)";}, 200);
	}

siete.onclick= function(e){ //Evento para captura del numero 7
	for(var i=0; display.textContent.length>=8;i++){
		display.textContent=null;
	}

	if(display.textContent=="0"){
		display.textContent= display.textContent ="";
		display.textContent= display.textContent +"7";
	}else{
		display.textContent= display.textContent +"7";
	}

	document.getElementById("7").style.transform = "scaleX(.9)";
	setTimeout(function() {document.getElementById("7").style.transform="scale(1)";}, 200);
	}

ocho.onclick= function(e){//Evento para captura del numero 8
	for(var i=0; display.textContent.length>=8;i++){
		display.textContent=null;
	}

	if(display.textContent=="0"){
		display.textContent= display.textContent ="";
		display.textContent= display.textContent +"8";
	}else{
		display.textContent= display.textContent +"8";
	}
	document.getElementById("8").style.transform = "scaleX(.9)";
	setTimeout(function() {document.getElementById("8").style.transform="scale(1)";}, 200);
	}

nueve.onclick= function(e){//Evento para captura del numero 0

	for(var i=0; display.textContent.length>=8;i++){
		display.textContent=null;
	}
	if(display.textContent=="0"){
		display.textContent= display.textContent ="";
		display.textContent= display.textContent +"9";
	}else{
		display.textContent= display.textContent +"9";
	}
	document.getElementById("9").style.transform = "scaleX(.9)";
	setTimeout(function() {document.getElementById("9").style.transform="scale(1)";}, 200);

}

cero.onclick= function(e){ //Evento para captura del numero 0
	for(var i=0; display.textContent.length>=9;i++){
		display.textContent=null;
	}
	if(display.textContent!="0"){ //ciclo para que el cero no se repita una vez que este a sido tecleado

	display.textContent= display.textContent + "0";
		}else{
			display.textContent="0";
		}

	document.getElementById("0").style.transform = "scaleX(.9)";
	setTimeout(function() {document.getElementById("0").style.transform="scale(1)";}, 200);
	}

	punto.onclick= function(e){ //funcion que permite agregar el punto en el display 
		 
     var elemento = document.getElementById('display')
	if (elemento.innerHTML.indexOf('.') < 0 && elemento.innerHTML != '-1' && elemento.innerHTML != '') {
	document.getElementById('display').innerHTML = elemento.innerHTML +'.' ;
	} else if (elemento.innerHTML != -1 && elemento.innerHTML != '') {
	document.getElementById('display').innerHTML = elemento.innerHTML.substring(1);
	}
	document.getElementById("punto").style.transform = "scaleX(.9)";
    setTimeout(function() {document.getElementById("punto").style.transform="scale(1)";}, 200);


	}



signo.onclick= function(e){//funcion que permite agregar  y quitar el signo - en el display

 	var elemento = document.getElementById('display')
	if (elemento.innerHTML.indexOf('-') < 0 && elemento.innerHTML != '-1' && elemento.innerHTML != '') {
	document.getElementById('display').innerHTML = '-' + elemento.innerHTML;
	} else if (elemento.innerHTML != -1 && elemento.innerHTML != '') {
	document.getElementById('display').innerHTML = elemento.innerHTML.substring(1);
	}
	document.getElementById("sign").style.transform = "scaleX(.9)";
    setTimeout(function() {document.getElementById("sign").style.transform="scale(1)";}, 200);
 
}





raiz.onclick= function(){ 
	document.getElementById("raiz").style.transform = "scaleX(.9)";
    setTimeout(function() {document.getElementById("raiz").style.transform="scale(1)";}, 200);
}




on.onclick= function(e){ //funciones que se ejuctan cuando se presiona la tecla on, + , - , =, * y /.
	document.getElementById("on").style.transform = "scaleX(.9)";
    setTimeout(function() {document.getElementById("on").style.transform="scale(1)";}, 200);
	resetear();
}

suma.onclick= function(e){
	document.getElementById("mas").style.transform = "scaleX(.9)";
    setTimeout(function() {document.getElementById("mas").style.transform="scale(1)";}, 200);
	operandoA= display.textContent;
	operacion= "+";
   
	limpiar();

}

resta.onclick= function(e){
	document.getElementById("menos").style.transform = "scaleX(.9)";
    setTimeout(function() {document.getElementById("menos").style.transform="scale(1)";}, 200);
	operandoA= display.textContent;
	operacion= "-" ;
	
	limpiar();

}

multiplicacion.onclick= function(e){
	document.getElementById("por").style.transform = "scaleX(.9)";
    setTimeout(function() {document.getElementById("por").style.transform="scale(1)";}, 200);
	operandoA= display.textContent;
	operacion ="*";
	limpiar();

}

division.onclick= function(e){
	document.getElementById("dividido").style.transform = "scaleX(.9)";
    setTimeout(function() {document.getElementById("dividido").style.transform="scale(1)";}, 200);
	operandoA= display.textContent;
	operacion ="/";
	limpiar();

}

igual.onclick= function(e){
	document.getElementById("igual").style.transform = "scaleX(.9)";
    setTimeout(function() {document.getElementById("igual").style.transform="scale(1)";}, 200);
	operandoB= display.textContent;
	resolver();

}


}


function limpiar(){//funcion que se encarga de limpiar el display cuando presaionamos on/c
	display.textContent="";

}

function resetear(){ //Funcion que permite resetear los valores de los operando A y B para volver a realizar una operacion
	display.textContent="0";
	operandoA=0;
	operandoB=0;
	operacion="";


}

function resolver(){ // Funcion que se encarga de realizar las operaciones suma,resta, multiplicacion y division mediante un ciclo switch de opciones.
	var res= 0;
	switch(operacion){
		case "+":
		res= parseFloat(operandoA) + parseFloat(operandoB);

            
		break;

		case "-":
		res= parseFloat(operandoA) - parseFloat(operandoB);
		if(operandoB>operandoA){
			display.textContent= display.textContent + "-";
 
		}

		break;

		case "*":
		res= parseFloat(operandoA) * parseFloat(operandoB);
		break;

		case "/":
		res= parseFloat(operandoA) / parseFloat(operandoB);
		break;
	}

	resetear();
	display.textContent= res;
}