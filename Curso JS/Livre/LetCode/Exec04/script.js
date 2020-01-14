// Variáveis globais que tomam controle do HTML e cria um array
let num = document.getElementById('numeros')
let armazenar = document.getElementById('armazenar')
let exibir = document.getElementById('exibir')

let numarray = []
let sumarray = 0

function adicionar() {
    let numero = Number(num.value)

    if (numero < 0) {
        armazenar.innerHTML +=`\n Insira números positivos e tente novamente.\n\n`
    } else {
        numarray.push(numero) 
        let pos = numarray.length-1
        armazenar.innerHTML +=`Valor ${numarray[pos]} adicionado.\n`
    } 
}

function analisar() {
    for (i = 0; i < numarray.length; i++) {
        sumarray += Number(numarray[i])        
    }

    function compareNumbers(a, b) {
        return a - b;
      }
    numarray.sort(compareNumbers)

    exibir.innerHTML +=`Ao todo foram armazenados ${numarray.length} números.\n`
        exibir.innerHTML +=`O maior número armazenado é ${numarray[numarray.length-1]}.\n`
    exibir.innerHTML +=`O menor número armazenado é ${numarray[0]}.\n`
    exibir.innerHTML +=`A soma dos números armazenados é ${sumarray}.\n`
    exibir.innerHTML +=`A média dos números armazenados é ${sumarray / numarray.length}.\n`
}

function finish(){
    document.location.reload(true)
}