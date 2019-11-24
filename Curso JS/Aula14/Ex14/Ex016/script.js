function countjs() {
    var msg = window.document.getElementById('result')
    var ini = window.document.getElementById('inicio')
    var fim = window.document.getElementById('final')
    var pas = window.document.getElementById('passo')

    if (pas.value.length == 0 || pas.value == 0) {
        var pasjs = Number(pas.value)
        pasjs = 1
        window.alert('Passo menor ou igual a zero. Foi definido passo 1 como padrão.')
    } else {
        var pasjs = Number(pas.value)
    }
    
    if (ini.value.length == 0 || fim.value.length == 0){
        window.alert("Valor inválido! Insira valores positivos e tente novamente!")
    } else {
        var inijs = Number(ini.value)
        var fimjs = Number(fim.value)
        
        
        var emoji1 = String.fromCodePoint(0x1F449)
        var emoji2 = String.fromCodePoint(0x1F3C1)
        // \u{1F3C1} forma de inserir unicode no JS sem criar variáveis

        if (inijs < fimjs) {
            for (var count = inijs; count <= fimjs; count += pasjs) {
                msg.innerHTML += (`${count} ${emoji1} `)
            }
            msg.innerHTML += emoji2
        } else {
            for (var count = inijs; count >= fimjs; count -= pasjs) {
                msg.innerHTML += (`${count} ${emoji1} `)
            }
            msg.innerHTML += emoji2
        }
    }


  
}