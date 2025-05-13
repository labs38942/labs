//variable declare
let string = "Hello World"
let age = "20"
let bool = true
let array = ["apple", "bannana", "cherry"]
let object = { firstname: "John", lastName: "Doe"}
//

if (string !== null) 
    if (string === "Hello World") {
        console.log("Hello World")
    }
    else {
    }
else {
    console.log("Is Null")
}

let add = Number(age) * 2
console.log(add)

if (bool) {
    console.log("Is true")
}
else {
    console.log("Is False")
}


if (array.includes("apple") || array.includes("cherry")) {
    console.log("apple and cherry exists")
}

console.log(Object.values(object).includes("John"));

