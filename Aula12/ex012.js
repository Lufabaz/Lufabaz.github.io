var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
// var mostra = console.log(`Agora são exatamente ${hora} hora(s) e ${minutos} minuto(s)`)

if (hora < 6) {
    var mostra = console.log(`Agora são exatamente ${hora} hora(s) e ${minutos} minuto(s)`)
    console.log('Boa madrugada!')
} else if (hora < 12) {
    var mostra = console.log(`Agora são exatamente ${hora} hora(s) e ${minutos} minuto(s)`)
    console.log('Bom dia!')
} else if (hora <= 18) {
        var mostra = console.log(`Agora são exatamente ${hora} hora(s) e ${minutos} minuto(s)`)
        console.log('Boa tarde')
    } else if (hora <= 23) {
        var mostra = console.log(`Agora são exatamente ${hora} hora(s) e ${minutos} minuto(s)`)
        console.log('Boa noite!')
    } else {
        console.log('O horário informado é inválido')
    }