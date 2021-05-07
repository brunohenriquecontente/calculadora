
var resultado = document.getElementById('resultado')
// resultado.innerHTML = '12'

var botao = document.getElementsByTagName('tr,td')
botao.addEventListener("click", function(){
conteudobotao = botao.innerHTML
})




// função limpar a tela
function limpaTela() {
    document.getElementById('resultado').innerHTML = '0'
}