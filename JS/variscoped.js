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
console.log("x", y)