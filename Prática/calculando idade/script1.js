let num = document.querySelector('#nas')
let gen = document.getElementsByName('rd')
let res = document.querySelector('#res')

function verificar() {
    let data = new Date() 
    let ano = data.getFullYear()

    if (num.value.length == 0 || num.value >= ano) {
        alert('Verifique o ano')
        num.value = ''
        num.focus()
    } else {
        let datn = new Date(num.value)
        let idade = ano - datn.getFullYear()
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        alert(idade)
        if (gen) {
            gen = 'Homem'
            if (idade >= 0 && idade < 18) {
                img.setAttribute('src', 'criança homem.png')
            }
        }
    }
    res.style.textalign = 'center'
    res.appendChild(img)
}