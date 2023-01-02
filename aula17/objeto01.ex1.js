let perfil = {
    nome:'Caio',
    idade: 18,
    peso: 54,
    engordou(engordar){
        return this.peso + engordar  
    }
}

console.log(`${perfil.engordou(2)} kg`)