function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Ano inválido! Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 11) {
                // Criança
                img.setAttribute('src', '1-foto-bebe-menino.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', '3-foto-jovem-menino.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', '5-foto-adulto-homem.jpg')
            } else {
                // Idoso
                img.setAttribute('src', '7-foto-idoso-homem.jpg')
            }

        } else if (sexo[1].checked) {
            genero = 'Mulher' 
            if (idade >=0 && idade < 11) {
                // Criança
                img.setAttribute('src', '2-foto-bebe-menina.jpg')

            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', '4-foto-jovem-menina.jpg')

            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', '6-foto-adulto-mulher.jpg')
            } else {
                // Idoso
                img.setAttribute('src', '8-foto-idoso-mulher.jpg')
            }           
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}