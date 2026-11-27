// Primitive

//7 types: String, Number, BigInt, Boolean, undefined, Symbol, null

const score = 100
const scoreValue = "100.3"

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) 

//Reference Types(non-primitive)

// Array, Object, Function, 

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Aditya",
    age: 23,
}

const myFunction = function() {
    console.log("Hello World");
    
} 



// Stack (primitive ), Heap (non-primitive) 

let anotherName = "Aditya";
anotherName = "Sharma";
console.log(anotherName);
console.log(anotherName);

let userOne = {
    email: "user@example.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "user2@example.com"

console.log(userOne.email);
console.log(userTwo.email);
