//CALCULADORA

/*
<html>
    <head>
        <meta charset="UTF-8"/>
    </head>
    <body>
        
        <button onclick="calcular('+')">+</button>
        <button onclick="calcular('-')">-</button>
        <button onclick="calcular('*')">*</button>
        <button onclick="calcular('/')">/</button>

        <div id="numero"></div>

        <script>
*/
            var output = document.querySelector("#output");
            
            var n = parseFloat(prompt("Digite um número: "));

            if(n >= 0){
                output.innerHTML = n;
            }else{
                n = 0;
                output.innerHTML = n;
            }

            function limpar(zerar){
                n = zerar;
                output.innerHTML = n;
            }

            function calcular(simbolo){

                var n2 = parseFloat(prompt("Digite um número: "));
                
                if( n2 >= 0 ){
                    switch(simbolo){
                        case '+':
                            n += n2;
                            break;
                        case '-':
                            n -= n2;
                            break;
                        case '*':
                            n *= n2;
                            break;
                        case '/':
                            n /= n2;
                            break;
                    }
                }

                output.innerHTML = n;
            }

        
/*
        </script>
    </body>
</html>
*/
