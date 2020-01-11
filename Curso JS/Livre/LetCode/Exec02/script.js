// HTML + Javascript

function convert() {
    let metros = window.document.getElementById('medidaMt')
    let result = window.document.getElementById('resultCm')

    let convertToCm = Number(numero.value)

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
