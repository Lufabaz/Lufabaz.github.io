function verify(){
    let numero = window.document.getElementById('numHtml')
    let result = window.document.getElementById('result')

    result.innerHTML += `O número digitado é ${Number(numero.value)}.<br> Seu antecessor é ${Number(numero.value)-1}.<br> E seu sucessor é ${Number(numero.value)+1}.<br><br>`
}
function finish(){
    document.location.reload(true)
}