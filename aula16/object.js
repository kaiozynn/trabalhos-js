let perfil = [
    {
        nome: 'Caio',
        idade: 18
    },{
        nome: 'Jonh',
        idade: 18
    },{
        nome: 'Kenny',
        idade: 17
    }
]

let menorIdade = {
    posicao: 0,
    get atual(){
        if(perfil[this.posicao].idade > 17){
            return perfil[this.posicao]
        } else {
            return `A pessoa de nome ${perfil[this.posicao].nome} é menor de idade pois tem ${perfil[this.posicao].idade} anos`
        }
    },
    proximo(){
        ++this.posicao
    },
    anterior(){
        --this.posicao
    }
}

console.log(menorIdade.atual)
menorIdade.proximo()

console.log(menorIdade.atual)
menorIdade.proximo()

console.log(menorIdade.atual)