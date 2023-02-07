let nome, age

nome = "Pedro"
age = 22
adress = {
    street: "Rua Central",
    city: "Cidade"
}

//// Concatenação (antiga)
console.log(nome + " tem " + age + " anos. E reside em " + JSON.stringify(adress))
//// console não printa objetos


//// Interpolação
console.log(`${nome} tem ${age} anos. E reside em ${JSON.stringify(adress)}`)