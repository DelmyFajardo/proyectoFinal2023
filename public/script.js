 var resultado = document.getElementById("resultado")
var division =  document.getElementById("division")
var multiplicacion = document.getElementById("multiplicacion")
var resta = document.getElementById("resta")
var igual  = document.getElementById("igual")
var uno = document.getElementById("uno")
var dos  = document.getElementById("dos")
var tres = document.getElementById("tres")
var cuatro = document.getElementById("cuatro")
var cinco = document.getElementById("cinco")
var seis = document.getElementById("seis")
var siete = document.getElementById("siete")
var ocho = document.getElementById("ocho")
var nueve = document.getElementById("nueve")
var cero = document.getElementById("cero") 


document.getElementById("reset").onclick = function (e){
    resetear ()
}

var operandoa
var operandob
var operacion
document.getElementById("division").onclick = function (e){
    operandoa = resultado.textContent;
     operacion = "/"; 
    limpiar();
}
document.getElementById("multiplicacion").onclick = function (e){
    operandoa = resultado.textContent;
    operacion = "*"; 
    limpiar();
    }

document.getElementById("resta").onclick = function (e){
    operandoa = resultado.textContent;
     operacion = "-"; 
    limpiar();
    }

document.getElementById("suma").onclick = function (e){
     operandoa = resultado.textContent;
     operacion = "+"; 
    limpiar();
}
document.getElementById("igual").onclick = function (e){
    operandob = resultado.textContent;
     resolver();
    }

 function limpiar(){
    resultado.textContent= "";
 }   
 function resetear (){
    resultado.textContent = "";
    operandoa = "0";
    operandob = "0";
    operacion = "";
 }

 function resolver (){
    var res = 0 ;
    switch (operacion){
        case "/":
        res = parseFloat(operandoa) / parseFloat (operandob);
        break;

        case "*":
        res = parseFloat(operandoa) * parseFloat (operandob);
        break;

        case "-":
        res = parseFloat(operandoa) - parseFloat (operandob);
        break;

        case "+":
        res = parseFloat(operandoa) + parseFloat (operandob);
        break;
    }
    resetear();
    resultado.textContent = res;
   }

document.getElementById("uno").onclick = function (e){
    resultado.textContent = resultado.textContent + "1"
}
document.getElementById("dos").onclick = function (e){
    resultado.textContent = resultado.textContent + "2"
}
document.getElementById("tres").onclick = function (e){
    resultado.textContent = resultado.textContent + "3"
}
document.getElementById("cuatro").onclick = function (e){
    resultado.textContent = resultado.textContent + "4"
}
document.getElementById("cinco").onclick = function (e){
    resultado.textContent = resultado.textContent + "5"
}
document.getElementById("seis").onclick = function (e){
    resultado.textContent = resultado.textContent + "6"
}
document.getElementById("siete").onclick = function (e){
    resultado.textContent = resultado.textContent + "7"
}
document.getElementById("ocho").onclick = function (e){
    resultado.textContent = resultado.textContent + "8"
}
document.getElementById("nueve").onclick = function (e){
    resultado.textContent = resultado.textContent + "9"
}
document.getElementById("cero").onclick = function (e){
    resultado.textContent = resultado.textContent + "0"
}


