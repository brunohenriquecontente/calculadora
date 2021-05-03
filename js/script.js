
var resultado = document.getElementById('resultado')
resultado.innerHTML = '0' 

var btn = document.getElementsByTagName('td')


btn.addEventListener('click', function (){
    resultado.innerHTML = btn.value

})




// função limpar a tela
function limpaTela() {
    document.getElementById('resultado').innerHTML = '0'
}