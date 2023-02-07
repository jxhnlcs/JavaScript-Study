const person = {
nome: "Pedro",
age: 22,
adress: {
    street: "Rua Central",
    city: "Cidade"
}
}

/// person.nome = "John"
person.hair = "preto"
console.log(person)

console.log(`${person.nome} tem ${person.age} e reside na cidade de ${person.adress.city}`)