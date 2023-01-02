let inicio = document.querySelector('#inicio')
let fim = document.querySelector('#fim')
let passo = document.querySelector('#passo')
let res = document.querySelector('#res')

function contar() {
    if (inicio.value.length == 0 || fim.value.length == 0) {
        //alert('[ERRO] Verifique as informações e tente novamente')
        res.innerHTML = 'Impossivel contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
    
    if (p <= 0 || passo.value.length == 0) {
        alert('Passo não especificado, considerando passo 1')
        p = 1
    }
    if (i < f) {
        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}` 
        }
    } else {
        for (let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1F449}` 
        }
    }
    res.innerHTML += ` \u{1F3C1}`
}}