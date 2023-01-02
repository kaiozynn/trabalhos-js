let num = document.querySelector('#num')
let lista = document.querySelector('#sel')
let res = document.querySelector('#res')
let vetor = []

    function isNumber(n) {
        if (Number(n) >= 1 && Number(n) <= 100) { //analisa se o número passado como parametro está entre 1 e 100
         return true
    } else {
         return false
    }
} 
    function isLista(n, l) {
        if (l.indexOf(Number(n)) != -1) { /* ele analisa se o vetor passado como parametro para 'l', tem o numero de num.value passado 
        como parametro para n, por isso a sintaxe fica, 'l.indexOf(Number(n))'*/
            return true
    } else {
            return false
}
}  

    function adicionar() {
        if (isNumber(num.value) && !isLista(num.value, vetor)) { // ao clicar em adicionar ele chama 2 funções e faz os testes pra validação
            vetor.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Número ${num.value} foi inserido`
            lista.appendChild(item)
            res.innerHTML = ''
    } else {
        alert('Número inválido')
    }
    num.value = ''
    num.focus()
}

    function finalizar() {
        if (lista.length == 0) {
            alert('Adicione algum número na lista')
        } else {
            let tot = lista.length
            let menor = Math.min(...vetor) // vai pegar o menor valor do vetor/array
            let maior = Math.max(...vetor) // vai pegar o maior valor do vetor/array
            let soma = 0
            for (let pos in vetor) {
                soma += vetor[pos] // vai somar todos os valores do vetor
            }
        
            media = soma / tot
            res.innerHTML += `<p>Existe ${tot} números</p>`
            res.innerHTML += `<p>O maior número é ${maior}</p>`
            res.innerHTML += `<p>O menor número é ${menor}</p>`
            res.innerHTML += `<p>A soma dos números é ${soma}</p>`
            res.innerHTML += `<p>A media é ${media}</p>`
    }
    }