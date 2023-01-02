let res = document.getElementById('res')
let cl = document.getElementById('cl')
let veld = document.getElementById('veld')
cl.addEventListener("click",

function cliquei() {
    let a1 = document.getElementById('ba') 
    let b1 = document.getElementById('bb')
    let c1 = document.getElementById('bc')

    if (!a1.value && !b1.value && !c1.value) {
        alert('[ERRO] Faltam dados')
    } else {

    let a = Number(a1.value)
    let b = Number(b1.value)
    let c = Number(c1.value)
    
    function delta(n1=0, n2=0, n3=0){
        let d = b**2 - 4*a*c // calculo do delta
        return  d
    }
    var d = delta(a, b, c)
    
    function calx(n1=0, n2=0) {
        let rd = Math.sqrt(d) // codigo pro calculo de raiz quadrada 
        let x = (-b + rd) / (2*a) // calculo de 'x'
        return x
    }
    var x = calx(a, b)
    
    function caly(n1=0, n2=0) {
        let rd = Math.sqrt(d)
        let y = (-b - rd) / (2*a) // calculo de 'y'
        return y
    }
    var y = caly(a, b)
    let r = [x, y]
    r.sort()
    
    function rest() {
        if (a, b, c == 0 ) {
            veld.innerHTML = `O valor de Δ é ${d}`
            res.innerHTML = `A resposta da fórmula é {${r = 0}}`
        }
        else if ( d >= 0) {
                veld.innerHTML = `O valor de Δ é ${d}`
                res.innerHTML = `A resposta da fórmula é {${r}}`
                if (x == y) { // caso os 2 resultados forem igual irá aparecer apenas um
                    res.innerHTML = `A resposta da fórmula é {${x}}`
                }
        } else {
            veld.innerHTML = `O valor de Δ é ${d}`
            res.innerHTML = `Impossivel de fazer o cálculo pois o Δ é negativo`
        }
        
    }
    rest()
}})
// obs: ainda n sei como fazer para aparecer em forma de fração 