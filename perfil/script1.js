/**a selection está no final do formulario para ter um controle de resultado */

let nome = document.querySelector('#name')
let sobrenome = document.querySelector('#sob')
let dia = document.querySelector('#dia')
let mes = document.querySelector('#mes')
let ano = document.querySelector('#ano')
let ema = document.querySelector('#ema')
let rd = document.getElementsByName('rd')
let res = document.querySelector('#res')
let sel = document.querySelector('#sel')
let c = document.querySelector('#cpf')
let cpfs = []

c.addEventListener('keypress', formatandoCPF)

function formatandoCPF(){
    let cpflength = c.value.length
        if (cpflength === 3 || cpflength === 7) {
            c.value += '.'
        } else if (cpflength === 11) {
            c.value += '-'
        }
}

function isLista(n) {
    if (n.indexOf(c.value) != -1){
        alert('Você já nós enviou um formulário')
        return true 
    } else {
        alert('Formulário enviado com sucesso')
        return false
    }

}

let click = document.querySelector('#pro')
click.addEventListener('click', function cliquei(){
    res.innerHTML = ''
    if (!nome.value || !sobrenome.value || !dia.value || !ema.value || !mes.value || !ano.value || !c.value || !rd[0].checked && !rd[1].checked && !rd[2].checked) {
        alert('[ERRO] Faltam dados')
    } else {
        let meses = Number(mes.value)
        let numerosDia = new Date()
        let di = numerosDia.getDate()
        let numeroMes = new Date()
        let me = numeroMes.getMonth() +1;
        let numeroAno = new Date()
        let Ano = numeroAno.getFullYear()
        let idade = Ano - Number(ano.value) 
        let g = ''
        
        let nomes = nome.value.toLowerCase()
        let sobrenomes = sobrenome.value.toLowerCase()

        if (Number(ano.value) > Ano){
            alert('[ERRO] Ano inválido')
        } else if (idade < 18) {
            alert('[ERRO] Não aceitamos menores de idade')
        } else if (idade == 18 && meses == me && di < Number(dia.value)) {
            alert('[ERRO] Não aceitamos menores de idade')
        } else if (rd[0].checked && !isLista(cpfs)) {
            g = 'Masculino'
            cpfs.push(c.value)
            let item = document.createElement('option')
            item.addEventListener('click', function cli(){
                res.innerHTML = ''
                let perfil = {nome: nomes[0].toUpperCase() + nomes.substring(1) + ' ' + sobrenomes[0].toUpperCase() + sobrenomes.substring(1), idade: idade, email: ema.value, gênero: g, cpf: c.value}
                    
                    res.innerHTML += `<p>Nome: ${perfil.nome}</p>`
                    res.innerHTML += `<p>Gênero: ${perfil.gênero}</p>`
                    res.innerHTML += `<p>Idade: ${perfil.idade} anos</p>`
                    res.innerHTML += `<p>CPF: ${perfil.cpf}</p>`
                    res.innerHTML += `<p>Caso seja contratado entraremos em contato por meio do email: ${perfil.email}</p>`
            })
            
            item.text = `${nomes[0].toUpperCase() + nomes.substring(1)} ${sobrenomes[0].toUpperCase() + sobrenomes.substring(1)}`
            item.value = `${c.value}`
            sel.appendChild(item)
        
        } else if (rd[1].checked && !isLista(cpfs)) {
            g = 'Feminino'
            cpfs.push(c.value)
            let item = document.createElement('option')
            
            item.addEventListener('click', function cli(){
                res.innerHTML = ''
                let perfil = {nome: nome.value + ' ' + sobrenome.value, idade: idade, email: ema.value, gênero: g, cpf: c.value}
                   
                    res.innerHTML += `<p>Nome: ${perfil.nome}</p>`
                    res.innerHTML += `<p>Gênero: ${perfil.gênero}</p>`
                    res.innerHTML += `<p>Idade: ${perfil.idade} anos</p>`
                    res.innerHTML += `<p>Caso seja contratado entraremos em contato por meio do email: ${perfil.email}</p>`
                    res.innerHTML += `<p>CPF: ${perfil.cpf}</p>`
            })
            item.text = `${nome.value} ${sobrenome.value}`
            item.value = c.value
            sel.appendChild(item)
        
        } else if (rd[2].checked && !isLista(cpfs)) {
            g = 'Indefinido'
            cpfs.push(c.value)
            let item = document.createElement('option')
            item.addEventListener('click', function cli(){
                res.innerHTML = ''
                let perfil = {nome: nome.value + ' ' + sobrenome.value, idade: idade, email: ema.value, gênero: g, cpf: c.value}
                   
                    res.innerHTML += `<p>Nome: ${perfil.nome +' '+ sobrenome.value}</p>`
                    res.innerHTML += `<p>Gênero: ${perfil.gênero}</p>`
                    res.innerHTML += `<p>Idade: ${perfil.idade} anos</p>`
                    res.innerHTML += `<p>Caso seja contratado entraremos em contato por meio do email: ${perfil.email}</p>`
                    res.innerHTML += `<p>CPF: ${perfil.cpf}</p>`
            })
            item.text = `${nome.value} ${sobrenome.value}`
            item.value = c.value
            sel.appendChild(item)
        }
    }
})