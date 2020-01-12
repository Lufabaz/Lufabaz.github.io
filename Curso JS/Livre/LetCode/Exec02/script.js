// HTML + Javascript
// Função para cálculo das conversões
function convert() {

    // Variável de entrada do valor e variável de exibição de resultados
    let medHtml = window.document.getElementById('medidaOrig')
    let resultHtml = window.document.getElementById('resultConvert')

    // Variáveis da medida de origem (metros ou centimentros)
    let idMedOrig = window.document.getElementsByName('radorig')
    let idMedDest = window.document.getElementsByName('raddest')

    let origMts = idMedOrig[0].checked
    let origCms = idMedOrig[1].checked

    let destMts = idMedDest[0].checked
    let destCms = idMedDest[1].checked

    if (origMts == true && destCms == true) {
        let convertToCm = medHtml.value*100
        resultHtml.innerHTML += `O valor ${medHtml.value} em Metros corresponde a ${convertToCm} em Centímetros <br>`
    } else if (origCms == true && destMts == true) {
        let convertToMt = medHtml.value/100
        resultHtml.innerHTML += `O valor ${medHtml.value} em Centímetros corresponde a ${convertToMt} em Metros <br>`
    } else {
        resultHtml.innerHTML += `<br>A medida de origem e destino são iguais. Por favor realizar nova conversão.<br><br>`
    }
}

// Limpa o formulário executando um reload na página web após clique do usuário
function finalizar() {
    document.location.reload(true)
}