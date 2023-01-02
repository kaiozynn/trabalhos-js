var ca = document.querySelector("#ca")
ca.addEventListener("click", function calcular(){
    let num = document.querySelector('#num')
    let tab = document.querySelector('#seltab')
    
    if (num.value.length == 0) {
        window.alert('Porfavor digite um número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
             for (c; c <= 10; c++) {
            let item = document.createElement('option') // vai criar options para uma selection
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item) // vai herdar os valores do 'filho "item"'
        }
    }
})