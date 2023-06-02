
function aplicarEstilo(numero){
   var titulo = document.getElementById('titulo');
   var parrafo = document.getElementById('parrafo');
   var parrafo1 = document.getElementById('parrafo1');
   var parrafo2 = document.getElementById('parrafo2');
   var parrafo3 = document.getElementById('parrafo3');
   var body = document.body;

   titulo.classList = "estilo" + numero;
   parrafo.classList = "estilo" + numero;
   parrafo1.classList = "estilo" + numero;
   parrafo2.classList = "estilo" + numero;
   parrafo3.classList = "estilo" + numero;
   body.classList = "estilo"  + numero;


}

function resetear (numero) {
   var titulo = document. getElementById ("titulo"); 
   var parrafo = document. getElementById ("parrafo");
   var body = document. body;

   titulo.classList = "" ;
   parrafo.classList = "";
   body.classList = "";
}