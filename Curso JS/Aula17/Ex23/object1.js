//objeto
let amigo = {
    nome: 'Lucas', //atributos do objeto
    peso: 70,
    engordar(p=0){ //função dentro do objeto
        console.log(`${amigo.nome} engordou!`)
        this.peso += p
    }
}

amigo.engordar(2) //passando valor 2 na função engordar
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)