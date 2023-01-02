document.body.style.color = 'white'
var rd = document.getElementsByName('rd') 
var numd = document.querySelector('#numd')
var nums = document.querySelector('#nums')
var numm = document.querySelector('#numm')
var qd = document.querySelector('#qd')
var qs = document.querySelector('#qs')
var qm = document.querySelector('#qm')
var res = document.querySelector('#res')
var pessoa = document.querySelector('#txt')
var pessoadia = [] // esse vetor receberá os nomes das pessoa q tem como forma de pagamento a diária
var ps = [] // esse os nomes das pessoas pagas em forma de semanas
var pm = [] // e esse os nomes das pessoas pagas por mês

function desabilitar() { // esses codigos desabilitam os inputs onde 'false' habilita e 'true' desabilita
    if (rd[0].checked) { // esse seria o radio de dias onde desabilita os inputs q n sejam relacionados a dia
        numd.disabled = false
        qd.disabled = false
        qs.disabled = true
        qm.disabled = true
        nums.disabled = true
        numm.disabled = true
        numd.focus()
    } else if (rd[1].checked) { //esse o radio de semana onde desabilita os inputs q n sejam de semanas 
        nums.disabled = false
        qs.disabled = false
        qd.disabled = true
        qm.disabled = true
        numd.disabled = true
        numm.disabled = true
        nums.focus()
    } else { // e esse o radio de mês onde ele desabilita os inputs q n sejam de meses
        numm.disabled = false
        qm.disabled = false
        qd.disabled = true
        qs.disabled = true
        numd.disabled = true
        nums.disabled = true
        numm.focus()
    }
}

function isLista(l) {
    if (l.indexOf(pessoa.value) != -1) { // aqui vc verifica se ele ja existe na lista onde 'l' recebe o vetor 'pessoadia' como parametro
        alert('[ERRO] Nome existente')
        pessoa.value = '' // caso ja tenha o nome na select ele da o alerta por meio desse codigo
        pessoa.focus()
        return true
    } else {
        return false
    }
} 

function add() {
    res.innerHTML = ''
    if (rd[0].checked && numd.value.length == 0 || rd[0].checked && qd.value.length == 0) { /*aqui ele faz os testes de informações, se ha algum campo vazio
    usei o '|| = ou' e o '&& = e' para verificar varios elementos considerando q o radio marcado libera os inputs relacionas*/
        alert('[ERRO] Falta as infromações sobre o tema dia')
    }  else if (rd[1].checked && nums.value.length == 0 || rd[1].checked && qs.value.length == 0) {
        alert('[ERRO] Falta as informções sobre semana')
    } else if (rd[2].checked && numm.value.length == 0 || rd[2].checked && qm.value.length == 0) {
        alert('[ERRO] Falta as informações sobre mês')
    } else if (pessoa.value.length == 0) {
        alert('[Erro] Insira o nome')
        pessoa.focus()
    } else {
        // aqui ele armazenará as informações de dias trabalhados e o valor, porém n sei oq fazer com esses dados ainda
        let dias = []
        let semanas = []
        let meses = []
        let sd = []
        let ss = []
        let sm = []


        if (rd[0].checked && !isLista(pessoadia)) { /*considerando o radio[0] == ao 1° marcado, ele testa se o nome da pessoa já esta na lista
        de pessoas na diária fazendo a ligação de um function isLista(l) passando pessoadia como parametro para l.*/
           
            pessoadia.push(pessoa.value) // aqui ele ira adicionar esse nome no vetor para fazer a verificação depois se ele já existe ou n no mesmo.
            dias.push(Number(qd.value))
            sd.push(Number(numd.value))
            let seld = document.querySelector('#seld')
            let item = document.createElement('option')
            item.addEventListener('click', function cliquei(){
                /*
                    Esse addEventListener me permite colocar a função de clicar na option q será enviada para o select 
                */
                res.innerHTML = ''
                let t = dias*sd
                res.innerHTML += `<p>${item.value} trabalhou ${dias} dias há ${sd.toLocaleString('PT-BR', {style: 'currency', currency: 'BRL'})} então devem ser pagos ${t.toLocaleString('PT-BR', {style: 'currency', currency: 'BRL'})}</p>`
            }) // essa parte faz a formatação do texto ao clicar na option
            item.text = pessoa.value
            item.value = pessoa.value
            seld.appendChild(item) // esse comando faz a ligação da select com as option q são criadas por meio da 'let item'
            numd.value = ''
            qd.value = ''
        // isso se reptirá nas linhas abaixo, considerando sempre o radio marcado
        } else if (rd[1].checked && !isLista(ps)) {
            ps.push(pessoa.value)
            semanas.push(Number(qs.value))
            ss.push(Number(nums.value))
            let sels = document.querySelector('#sels')
            let item = document.createElement('option')
            item.addEventListener('click', function cliquei(){
                res.innerHTML = ''
                let t = semanas*ss
                res.innerHTML += `<p>${item.value} trabalhou ${semanas} semanas há ${ss.toLocaleString('PT-BR', {style: 'currency', currency: 'BRL'})} então devem ser pagos ${t.toLocaleString('PT-BR', {style: 'currency', currency: 'BRL'})}</p>`
            })
            item.text = pessoa.value
            item.value = pessoa.value
            sels.appendChild(item)
            nums.value = ''
            qs.value = ''
        
        } else if (rd[2].checked && !isLista(pm)){
            pm.push(pessoa.value)
            meses.push(Number(qm.value))
            sm.push(Number(numm.value))
            let selm = document.querySelector('#selm')
            let item = document.createElement('option')
            item.addEventListener('click', function cl(){
                res.innerHTML = ''
                let t = meses*sm
                res.innerHTML += `<p>${item.value} trabalhou ${meses} meses há ${sm.toLocaleString('PT-BR', {style: 'currency', currency:'BRL'})} então devem ser pagos ${t.toLocaleString('PT-BR', {style: 'currency', currency:'BRL'})}</p>`
            })
            item.text = pessoa.value
            item.value = pessoa.value
            selm.appendChild(item)
            numm.value = ''
            qm.value = ''
        }
    }
    
}