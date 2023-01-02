var enviar = document.querySelector('#envi')
enviar.addEventListener('click', function enviar(){

var nome = document.querySelector('#nome')
var datn = document.querySelector('#data')
var gênero = document.getElementsByName('radgen')
var dataAtual = new Date()
var dataInput = new Date(datn.value)
var idade = dataAtual.getFullYear() - dataInput.getFullYear() // calcula a idade vindo do input:date
var email = document.querySelector('#ema')
var codarea = document.querySelector('#tele')
var numerotel = document.querySelector('#tel')
var sit = document.getElementsByName('sit')
var anime = document.getElementsByName('ani')
var res = document.querySelector('#res')
var numero = codarea.value + numerotel.value // soma codigo de área mais o resto do número
var anim1 = document.querySelector('#anim')

    if (idade < 18) {
        window.alert('Você não tem idade nescessária')
    }
    
    if (sit[0].checked) {
        sit = 'Empregado'
    } else {
        sit = 'Desempregado'
    }
    
    if (anime[0].checked) {
        anime = window.prompt('Qual seria? Me diga')
        anim1.innerHTML = `Gosta de ${anime} anime`
    }
    
    if (gênero[0].checked) {
        gênero = 'Masculino'
    } else if (gênero[1].checked) {
        gênero = 'Feminino'
    } else {
        gênero = 'Outros'
    } 

    res.innerHTML = `${nome.value}, ${idade} anos, de gênero ${gênero} está atualmente ${sit}. Seu perfil foi encaminhado para avaliação, 
    entraremos em contato por meio do número ${numero} ou por meio do e-mail ${email.value}.`
})