let num = [5,2,8,3,0,9]

//num.sort()

/*for (let index = 0; index < num.length; index++) {
    console.log(`A posição do elemento é ${index} e o valor do elemento é ${num[index]}`)
}*/

/*for (index in num) {
    console.log(`A posição do elemento é ${index} e o valor do elemento é ${num[index]}`)
}*/

let search = num.indexOf(1)
if (search < 0) {
    console.log(`O valor não foi encontrado no vetor`)
} else {
    console.log(`O valor ${num[search]} está na posição ${search}`)
}