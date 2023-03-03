var texto = "testing: 1, 2, 3"
var pattern = /\d+/g

console.log(pattern.test(texto))
console.log(texto.search(pattern))
console.log(texto[9])
console.log(texto.match(pattern))
console.log(texto.replace(pattern, '$'))
console.log(texto.split(/\D+/))