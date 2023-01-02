const num = [1, 2, 3, 4]

const nome = ['Caio', 'Cinira', 'Alons']

const pc = {
    cpu: {
        modelo: 'ryze 4',
        price: 389,
    }
,
    gabinete: {
        modelo: 'sla',
        price: 500
    }
,
    gpu: {
        modelo: 'gtx 3000',
        price: 568
    }
}

//let preçoTotal = []
let total = 0
let modeloS = []

for(let modelos in pc) {
    modeloS.push(pc[modelos].modelo)
}

console.log(modeloS[2])
