function tabuar() {
    var resultado = document.getElementById('resultado')
    var numhtml = (document.getElementById('numero'))

    if (numhtml.value.length != 0) {
        var numero = Number(numhtml.value)
        var count = 0       
        resultado.innerHTML = ''
        while (count <= 10) {
            var multi = (numero * count)
            resultado.innerHTML += `${numero} x ${count} = ${multi}\n`
            count++
            }
        resultado.innerHTML += `\u{1F929} \u{1F44F} \u{1F389}\n`
    } else {
        resultado.innerHTML = `Valor inválido! \u{1F644}`
        window.alert('Insira um número e tente novamente')
    }  
}
function limpar() {
    document.location.reload(true)
}