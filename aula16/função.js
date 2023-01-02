let r = [2, 6, 39, 100]

function somar(n) {
    let soma = 0
    for(let val of n){ /**para usar o laço for of vc resgata o valor da primeira variavel dentro do teste  */
        soma += val
    }
    return soma
}

let soma = somar(r)
console.log(soma)