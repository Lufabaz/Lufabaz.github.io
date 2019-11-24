// Variáveis globais que tomam controle do HTML e cria um array
let res = document.getElementById('res')
let num = document.getElementById('num')
let resultado = document.getElementById('result')
let numarray = []
let sumarray = 0

// Recebe valores do usuário vindo do HTML e adiciona em um array
function add() {
    let numero = Number(num.value)

    if (numero <= 0 || numero > 100) {
        res.innerHTML = `O número ${numero} é inválido, insira valores entre 1 e 100.`
    } else {
        numarray.push(numero)   
        let pos = numarray.length-1
        res.innerHTML += `Valor ${numarray[pos]}\n`
    }   
}

// Analisará o Array acima com n valores [20, 30, 40]
function analisar() {

    function compareNumbers(a, b) {
        return a - b;
      }

    numarray.sort(compareNumbers)

    for (i=0 ; i < numarray.length ; i++) {
        sumarray += Number(numarray[i])
    }

    resultado.innerHTML += `Ao todo existem ${numarray.length} números cadastrados.\n`
    resultado.innerHTML += `O maior valor informado foi ${numarray[numarray.length-1]}.\n`
    resultado.innerHTML += `O menor valor informado foi ${numarray[0]}.\n`
    resultado.innerHTML += `A soma de todos os valores é ${sumarray}.\n`
    resultado.innerHTML += `A média dos valores digitados é ${sumarray / numarray.length}.\n`
}

// Limpa o formulário executando um reload na página web após clique do usuário
function finalizar() {
    document.location.reload(true)
}