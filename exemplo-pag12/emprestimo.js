var valor = document.querySelector('#loan')
var porcentagem = document.querySelector('#juros')
var qtaPeriodo = document.querySelector('#qtaPeriodo')
var cep = document.querySelector('#cep')
var res1 = document.querySelector('#res1')
var res2 = document.querySelector('#res2')
var res3 = document.querySelector('#res3')

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
        var span1 = document.querySelector('#span1')
        var span2 = document.querySelector('#span2')
        var span3 = document.querySelector('#span3')

        ///M = C.(1+i)^t

        function calcularEmprestimo(c, j, t){
            var i = j/100
            var resultado = c * ((1+i)**t)
            return resultado.toFixed(2)
        }

        var resultadoCalculo = calcularEmprestimo(emprestimoNumber, jurosNumber, qtaPeriodoNumber)

        function calculaParcela(p, qp) {
            return p / qp
        } 

        var parcela = calculaParcela(resultadoCalculo, qtaPeriodoNumber)

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