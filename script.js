var endereco = [];
const alfabetoMaiusculo = /[A-Z]/;
const alfabetoMinusculo = /[a-z]/;
const numerico = /[0-9]/;
const especialA = /[ÀÁÂÃÄÅ - àáâãäå - ÈÉÊË - Ç - ç - èéêë - úùü - ÚÙÜ]/;
var textoFinal = "";
var array = [];


function registrar() {
  boxvalue = document.getElementById('box').value;
  endereco.push(boxvalue);
  var texto = "";

  for (let i = 0; i < endereco.length; i++) {
  texto += endereco[i];
  var textoTratado = endereco[i];
  var textoSaida = "";
  var tamanho = textoTratado.length;
  var numero = "";
 
    for (let a =0; a < textoTratado.length; a++) {
      
       
        var charTexto = textoTratado.substr(textoTratado.length-tamanho, 1);
        tamanho--;
        if(charTexto == " "){
          textoSaida += charTexto;
        }
       if (charTexto.search(alfabetoMaiusculo)>=0) {
        textoSaida += charTexto;
       }else if(charTexto.search(alfabetoMinusculo)>=0) {
         textoSaida += charTexto;
       }else if (charTexto.search(numerico)>=0){
         numero += charTexto;
       }else if (charTexto.search(especialA)>=0){
         textoSaida += charTexto;
       }
    }
 

  }

  array.push(textoSaida, numero);

  for ( let r = 1; r <= array.length/2; r++)   // r for row
   {
     for ( let c = 0; c <=1; c++)  //c for coloumn
          {
            textoFinal = textoFinal + array[c,c];
          }
       textoFinal += "<br>";
      
      console.log(textoFinal)
   }
  array = [];
 document.getElementById("insertHere").innerHTML = textoFinal;

};