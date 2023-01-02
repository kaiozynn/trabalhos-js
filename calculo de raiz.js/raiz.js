let a = 3
let b = -15
let c = 12

let d = b**2 - 4*a*c

console.log(d)
let rd = Math.sqrt(d)
let x = (-b + rd) / (2*a)
console.log(x)

let y = (-b - rd) / (2*a)
console.log(y)

let r = [x ,y]
r.sort()
console.log(r)
console.log(a+b+c)