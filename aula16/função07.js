let n = [1,6,7,25] // passando vetor como parametro para uma função

function somar(n){
    let soma = 0
    for (let pos in n) {
        soma += n[pos]
    }
    return soma
}

var r = somar(n)
console.log(r)