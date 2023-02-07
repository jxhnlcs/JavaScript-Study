//// Não podem conter espaço    ( Usar _ ou camelCase)
//// Precisam iniciar com uma letra, _ ou $
//// Podem conter apenas letras, números _ ou $
let dataNascimento = new Date(1982, 02, 18)

//// Case-sensitive
let cpf = "123.456.789-12"
let Cpf = "123.456.789-00"
let CPF = "123.456.789-00"
//// Não podem utilizar palavras reservadas ()

var x = 10
console.log("x", x)

{
    console.log("x", x)
    x = 20

    var y = 30
}

console.log("x", x)
console.log("x", y)

/////////////////////////

let x = 10
console.log("x", x)

{
    console.log("x", x)
    x = 20

    let y = 30
}

console.log("x", x)
console.log("x", y)

/////////////////////////

const x = 10
console.log("x", x)

{
    console.log("x", x)
    x = 20

    const y = 30
}

console.log("x", x)
console.log("x", y) // não acessivel fora do seu contexto