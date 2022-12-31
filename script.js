var endereco = [];
const alfabetoMaiusculo = /[A-Z]/;
const alfabetoMinusculo = /[a-z]/;
const numerico = /[0-9]/;
const especialA = /[ÀÁÂÃÄÅ - àáâãäå - ÈÉÊË - èéêë - Ç - ç - ÌÍÏ - íìï - ÓÒÖ - óòö - úùü - ÚÙÜ]/;
var textoFinal = "";
var array = [];


function registrar(elem) {
  
  if (elem.id == "2") {
    endereco = ["Rua Muritiba 117", "Rua Pereira 22", "500 Rua General Ozório", "Quirino dos Santos 23 b", "100 Broadway Av", "4, Rue de la République"];

    for(let i = 0; i < endereco.length; i++) {
      var textoTratado = endereco[i];
      textoFinal = montarEndereco(textoTratado);
      document.getElementById("insertHere").innerHTML = textoFinal;
    }

  }else {
    boxvalue = document.getElementById('box').value;
    textoFinal = montarEndereco(boxvalue)
    document.getElementById("insertHere").innerHTML = textoFinal;
  }   

};

function montarEndereco(textoTratado){

    var textoSaida = "";
    var tamanho = textoTratado.length;
    var numero = "";
    
      for (let a =0; a < textoTratado.length; a++) {
        var charTexto = textoTratado.substr(textoTratado.length-tamanho, 1);
        tamanho--;

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

      array.push(textoSaida + " ", numero);

      for ( let r = 1; r <= array.length/2; r++)
      {
        for ( let c = 0; c <=1; c++)
              {
                textoFinal = textoFinal + array[c,c];
              }
          textoFinal += "<br>";
      }

      array = [];

      return textoFinal;
}