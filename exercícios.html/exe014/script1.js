function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var hr = new Date()
    var agr = hr.getHours()
    msg.innerHTML = `Agora são ${agr} horas.`
    if (agr >=0 && agr < 12 ) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#e3caa6'
    } else if (agr < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#f5ad87'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#213661'
    }
    
}
