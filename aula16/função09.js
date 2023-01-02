function perfil(nome, pais, cidade, ...complementos) { //parametro rest
    console.log(nome)
    console.log(pais)
    console.log(cidade)
    for (let pos in complementos) {
        console.log(complementos[pos])
    }
}

let per = perfil('Caio', 'Brasil', 'Encruzilhada', 'cep: 111.111.111', 'Apartamento: Juqueira')
console.log(per)

(function autoExecutei(nome){
    console.log('executei', nome)
}('Caio'));