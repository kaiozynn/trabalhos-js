var valor = document.querySelector('#loan')
var porcentagem = document.querySelector('#juros')
var qtaPeriodo = document.querySelector('#qtaPeriodo')
var cep = document.querySelector('#cep')
var res1 = document.querySelector('#res1')
var res2 = document.querySelector('#res2')
var res3 = document.querySelector('#res3')
var span1 = document.querySelector('#span1')
var span2 = document.querySelector('#span2')
var span3 = document.querySelector('#span3')

var calcular = document.querySelector('#calcular')

calcular.addEventListener('click', function(){
    nomePeriodo.innerHTML = 'Quantidade do Período:'

    var emprestimoNumber = Number(valor.value)
    var jurosNumber = Number(juros.value)
    var qtaPeriodoNumber = Number(qtaPeriodo.value)
    var cepNumber = Number(cep.value)

    if(!valor.value || !juros.value) {
        alert('[ERRO] Faltam dados')
    }  else if (!qtaPeriodo.value || !cep.value) { 
        alert('[ERRO] Faltam dados')
    } else {
        ///M = C.(1+i)^t - formula usada
        /** calcular o emprestimo
        * @param {number} c - valor do emprestimo
        * @param {number} j - valor da taxa de juros
        * @param {number} t - quantidade de período
        * @returns {number} - valor do emprestimo
        */
        function calcularEmprestimo(c, j, t){
            var i = j/100
            var resultado = c * ((1+i)**t)
            return resultado.toFixed(2)
        }

        var resultadoCalculo = calcularEmprestimo(emprestimoNumber, jurosNumber, qtaPeriodoNumber)

        /**
         * Calcula o valor da parcela do empréstimo.
         * @param {number} p - Valor total do empréstimo
         * @param {number} qp - Quantidade de períodos
         * @returns {number} - Valor da parcela do empréstimo
         */

        function calculaParcela(p, qp) {
            return p / qp
        } 

        var parcela = calculaParcela(resultadoCalculo, qtaPeriodoNumber)

        /**
        * Calcula o valor total de juros do empréstimo.
        * @param {number} j - Valor total do empréstimo
        * @param {number} c - Valor do empréstimo
        * @returns {number} - Valor total de juros do empréstimo
        */

        function totalJuros(j, c){
            return j - c
        }

        var total_juros = totalJuros( resultadoCalculo, emprestimoNumber)

        span1.innerHTML = parcela.toFixed(2)
        span2.innerHTML = resultadoCalculo
        span3.innerHTML = total_juros.toFixed(2)

        valor.value = ''
        porcentagem.value = ''
        qtaPeriodo.value = ''
        cep.value = ''
    }
})