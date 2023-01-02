function carregar() {
    var res = document.querySelector('#res')
    var img = document.querySelector('#img')
    let h = new Date()
    let agr = h.getHours()

    res.innerHTML = `Agora são ${agr} horas`

    if (agr >= 0 && agr < 12) {
        img.src = 'fotomamha.png'
        document.body.style.background = 'red'
    } else if (agr < 18) {
        img.src = 'tarde.png'
        document.body.style.background = 'blue'
    } else {
        img.src = 'noite.png'
        document.body.style.background = 'black'
    }
}