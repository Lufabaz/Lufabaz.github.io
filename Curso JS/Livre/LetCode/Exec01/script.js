//Javascript puro exibindo em NodeJS

let num = 15.5
let compareInt = Number.isInteger(num)

if (compareInt==true) {
    console.log(`O número ${num} é inteiro.`)
} else {
    console.log(`O valor ${num} não é inteiro.`)
}



// HTML + Javascript

function verify() {
    let numero = window.document.getElementById('numint')
    let result = window.document.getElementById('resdob')

    let compareInt = Number.isInteger(Number(numero.value))

    if (compareInt==true) {
        result.innerHTML+=(`O número digitado é ${numero.value} e o dobro de seu valor é ${numero.value*2}.<br>`)

    } else {
        result.innerHTML+=(`<br>O valor ${numero.value} digitado não é um número inteiro.<br> Por favor insira um novo valor.<br><br>`)
    }
}

// Limpa o formulário executando um reload na página web após clique do usuário
function finalizar() {
    document.location.reload(true)
}
