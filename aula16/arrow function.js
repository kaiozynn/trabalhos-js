let soma = (a,b) => {
    return a + b
}

console.log(soma(10,10))

let soma1 = (a, b) => a + b
console.log(soma1(10,10))


let perfil = cidade => ({
    nome: 'Caio',
    idade: 18,
    cidade
})

console.log(perfil('Encruzilhada'))