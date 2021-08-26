var resultado = document.querySelector("#output")

var numero = parseFloat(prompt("Digite um número: "));
if(numero>0){
  resultado.innerHTML = numero;
}
else{
  numero = 0;
  resultado.innerHTML = numero;
}

function somar(){
  numero += parseFloat(prompt("Digite um número: "));
  resultado.innerHTML = numero;
}

function subtrair(){
  numero -= parseFloat(prompt("Digite um número: "));
  resultado.innerHTML = numero;
}

function multiplicar(){
  numero *= parseFloat(prompt("Digite um número: "));
  resultado.innerHTML = numero;
}

function dividir(){
  numero /= parseFloat(prompt("Digite um número: "));
  resultado.innerHTML = numero;
}

function limpar(){
  resultado.innerHTML = 0;
}