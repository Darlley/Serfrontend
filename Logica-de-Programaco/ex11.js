
var output = document.querySelector('#output')

var largura = parseFloat(prompt('Informe a medida da largura: '));
if(isNaN(largura)){
    while(isNaN(largura)){
        largura = parseFloat(prompt('Informe a medida da largura: '));
    }
}

var altura = parseFloat(prompt('Informe a medida da altura: '));
if(isNaN(altura)){
    while(isNaN(altura)){
        altura = parseFloat(prompt('Informe a medida da altura: '));
    }
}


if( largura >= 0 || altura >=0 ){
    
    function mostarAreaAlert(largura, altura){
        alert("Área total: " + calcular(largura, altura));
    }
    function mostarAreaOutput(){
        output.innerHTML = "Área total: " + calcular(largura, altura);
    }

}else{

    if( !(largura >= 0) ){
        largura = 0;
    }else if( !(altura >=0) ){
        altura = 0;
    }
    
}

function calcular(altura, largura){
    return altura * largura;
}