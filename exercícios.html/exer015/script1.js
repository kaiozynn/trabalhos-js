let ver = document.querySelector('#ver')
ver.addEventListener('click', function cliquei() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique o ano e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 14 ) {
                //criança
                img.setAttribute('src', 'criança homem.png')
            } else if (idade < 26) {
                //adolescente
                img.setAttribute('src', 'adolescente homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso homem.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 14 ) {
                //criança
                img.setAttribute('src', 'criança mulher.png')
            } else if (idade < 26) {
                //adolescente
                img.setAttribute('src', 'adolescente mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
})

