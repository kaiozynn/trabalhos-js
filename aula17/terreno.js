let numero = 45679

let array = numero.toString().split('')
array.push('10', '20')
array.sort(function(a, b) {
    return a - b
})

console.log(array)