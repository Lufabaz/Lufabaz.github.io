let salmen = document.getElementById('salmen')
let horasemana = document.getElementById('horasemana')
let salnor = document.getElementById('salnor')
let salsab = document.getElementById('salsab')
let saldom = document.getElementById('saldom')
let salfer = document.getElementById('salfer')
let salmad = document.getElementById('salmad')
let entradas = document.getElementById('entradas')
let resultado = document.getElementById('resultado')

function insertdata() {
    if (salmen.value.length > 0 && horasemana.value.length <= 0 && salnor.value.length <= 0 && salsab.value.length <= 0 && saldom.value.length <= 0 && salfer.value.length <= 0 && salmad.value.length <= 0) {
        entradas.innerHTML += `Salário bruto mensal: R$ ${Number(salmen.value)}<br>`
    }
    if (horasemana.value.length > 0 && salnor.value.length <= 0 && salsab.value.length <= 0 && saldom.value.length <= 0 && salfer.value.length <= 0 && salmad.value.length <= 0) {
        entradas.innerHTML += `Horas semanais trabalhadas: ${Number(horasemana.value)}<br>`
    }
    if (salnor.value.length > 0 && salsab.value.length <= 0 && saldom.value.length <= 0 && salfer.value.length <= 0 && salmad.value.length <= 0) {
        entradas.innerHTML += `${Number(salnor.value)} horas extras normais (5h às 22h).<br>`    
    }
    if (salsab.value.length > 0 && saldom.value.length <= 0 && salfer.value.length <= 0 && salmad.value.length <= 0) {
        entradas.innerHTML += `${Number(salsab.value)} horas aos sábados.<br>`
    }
    if (saldom.value.length > 0 && salfer.value.length <= 0 && salmad.value.length <= 0) {
        entradas.innerHTML += `${Number(saldom.value)} horas aos domingos.<br>`
    }
    if (salfer.value.length > 0 && salmad.value.length <= 0) {
        entradas.innerHTML += `${Number(salfer.value)} horas aos feriados.<br>`
    }
    if (salmad.value.length > 0) {
        entradas.innerHTML += `${Number(salmad.value)} horas de madrugada (22h ás 5h).<br>`
    }   
}

function calculate() {
    let salariohora = (Number(salmen.value) / (Number(horasemana.value)*5))
    
    let hora50 = ((salariohora * 1.5) * Number(salnor.value))
    if (hora50 > 0) {
        resultado.innerHTML += `Horas extras normais: ${hora50.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}<br>`
    }

    let hora60 = ((salariohora * 1.6) * Number(salsab.value))
    if (hora60 > 0) {
        resultado.innerHTML += `Horas extras sábados: ${hora60.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}<br>`
    }

    let hora100dom = ((salariohora * 2.0) * Number(saldom.value))
    if (hora100dom > 0) {
        resultado.innerHTML += `Horas extras domingos: ${hora100dom.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}<br>`
    }

    let hora100fer = ((salariohora * 2.0) * Number(salfer.value))
    if (hora100fer > 0) {
        resultado.innerHTML += `Horas extras feriados: ${hora100fer.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}<br>`
    }

    let horamad = (((salariohora * 1.5) * 1.2) * (Number(salmad.value)))
    if (horamad > 0) {
        resultado.innerHTML += `Horas extras madrugadas: ${horamad.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}<br>`
    }

    let extrastotais = (hora50 + hora60 + hora100dom + hora100fer + horamad)
    let salario = parseInt(salmen.value)
    totalgeral = parseInt(salario) + parseInt(extrastotais)

    resultado.innerHTML += `<br>+ Salário bruto: ${salario.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})} <br>+ Horas extras ${extrastotais.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})} <br>= ${totalgeral.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})} <br>`
}

function finalizar() {
    document.location.reload(true)
}