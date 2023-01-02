//função anônima
let a = 7
let b = 9
let c = 2

let d = function(a, b, c, fx=0) {
    return fx((b**2)-(4*a*c))
}

let x = d(a, b, c, function(x){
    let r = x
    return (-b + r) / (2*a)
})

let y = d(a, b, c, function(x){
    let r = x
    return (-b -r) / (2*a)
}) 
console.log(y)
console.log(x)
console.log(d(a, b, c, function(total){
    return total
}))