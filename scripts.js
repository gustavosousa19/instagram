/*
[] Váriaveis
  - É um pedacinha da memória do computador, que podemos guarda alguma coisa.
  Mas, temos que identifica esse espacinho com um nome.

  let + um nome é = variável

  console.log("texto") - tudo dentro vai pra tela



[] Funções
  - Pedacinho de código que só executado, quando eu ordernar

    function + nome da função + () + {}

    function dizerMeuNome(){
    console.log("Gustavo")
}

dizerMeuNome() // ORDERNANDO PARA EXECUTAR A FUNÇÃO



[] Tempo
   setInterval - Ele chama uma função de tempos em tempos
   
[] If e Else
    SE e SE NÃO

    = -> Atribuir ou colocar um valor dentro
    == -> Comparando A com B
*/


        //document = HTML - querySelector seleciona alguma coisa
let imagem = document.querySelector(".troca-imagem")

function trocaImagem(){

    if(imagem.style.opacity == 0) {
      imagem.style.opacity = 1
    } else {
      imagem.style.opacity = 0 //opacidade / 1 visivel / 0 invisivel
    }
}

setInterval(trocaImagem, 3000) // tempo em milissegundos 1000 = 1 segundo

