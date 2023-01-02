var num = document.querySelector('#num')
var stab = document.querySelector('#stab')
var radio = document.getElementsByName('rd')

function calcular () {
    if (num.value.length == 0) {
        alert('Digite um número primeiro')
        num.value = ''
        num.focus()
    } else {
    var n = Number(num.value)
        if (radio[0].checked) {
            for (let c = 1; c <= 10; c++) {
                let item = document.createElement('option')
                item.text = `${n} x ${c} = ${n*c}`
                item.value = c
                stab.appendChild(item)
                num.focus()
            }
        } else if (radio[1].checked) {
            stab.innerHTML = ''
            for (let c = 1; c <= 20; c++) {
                let item = document.createElement('option')
                item.text = `${n} x ${c} = ${n*c}`
                item.value = c
                stab.appendChild(item)
                num.focus()
        }
        } else {
            stab.innerHTML = ''
            for(let c = 1; c <= 30; c++) {
                let item = document.createElement('option')
                item.text = `${n} x ${c} = ${n*c}`
                item.value = c
                stab.appendChild(item)
                num.focus()
            }
        }
    }
}