var clc = document.querySelector('#clc')
clc.addEventListener('click', 

    function contar(){
        let ini = document.querySelector('#ini')
        let fim = document.querySelector('#fim')
        let pas = document.querySelector('#pas')
        let res = document.querySelector("#res")
       
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        //window.alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0) {
            // ira considerar passo = 1
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // contagem crescente
            for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
            }  
        } else {
            // contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}` 
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
})