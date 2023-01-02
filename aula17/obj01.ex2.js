
let usuario4 = {
    nome: 'Caio',
    idade: 18
}

let extraInfo = {
    pais: 'Brasil',
    estafo: 'Bahia'
}

Object.assign(usuario4, extraInfo)
console.log(usuario4)

let novoUsuario2 = {
    ...usuario4,
    ...extraInfo,
    ...{
        sexo: 'M',
        passaTempo: 'Programador' 
    }

}

console.log(novoUsuario2)

let nomeVariavel = 'Estado'
let usuario5 = {
    nome:'Caio',
    [nomeVariavel]: 'Bahia'
}

console.log(usuario5)

// getters e setters

let usuarios = [{
    nome: 'Caio',
    idade: 18
},
{
    nome: 'Cinira',
    idade: 42
},
{
    nome: 'Alons',
    idade: 58
}]

console.log(usuarios)