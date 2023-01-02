let usuarios = [{
    nome: 'Caio',
    idade: 18
},
{
    nome: 'Jonh',
    idade: 18
},
{
    nome: 'Kenny',
    idade: 17
}]

let usuario = {
    posição: 0,
    get  atual(){
        return usuarios[this.posição]
    },
    set atual(posição){
        this.posição = posição
    },
    proximo(){
        ++this.posição
    },
    anterior(){
        --this.posição
    }
}

console.log(usuario.atual)
usuario.proximo()

console.log(usuario.atual)
usuario.proximo()

console.log(usuario.atual)
usuario.anterior()

console.log(usuario.atual)
usuario.atual = 0

console.log(usuario.atual)
usuario.atual = 2

console.log(usuario.atual)