function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem1')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 06
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = '1fotomanha.jpg'
        document.body.style.background = '#dfc9b0'
    } else if (hora >= 12 && hora <= 18) {
        img.src = '2fototarde.jpg'
        document.body.style.background = '#7a8d6d'
    } else {
        img.src = '3fotonoite.jpg'
        document.body.style.background = '#753500'
    }
}
