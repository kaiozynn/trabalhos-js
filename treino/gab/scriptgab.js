var b = document.querySelector('#b')


b.addEventListener('click', function clicar() {
    var gab01 = document.getElementsByName('gab')
    var ques = ['1° = 950', 
        ' 2° = 10.620',
        ' 3° = ano de 2043',
        ' 4° = 212',
        ' 5° = 74 anos',
        ' 6° = 468 anos',
        ' 7° = 197 anos',
        ' 8° = falta 235',
        ' 9° = falta 1.520m',
        ' 10° = 180 apartamentos. 720 janelas',
        ' 11° = 60 reais',
        ' 12° = 14 reais de troco',
        ' 13° = 405 selos',
        ' 14° = 354 km',
        ' 15° = 775 reais cada parcela'
        ]
        var msg = document.querySelector('#msg')
    if (gab01[0].checked) {
        msg.innerHTML = ques
    } else {
        window.alert('Não tem nada aqui ainda')
    }
    msg.style.textAlign = 'center'
})
// obs: n sei como fazer um recuo dos itens do vetor