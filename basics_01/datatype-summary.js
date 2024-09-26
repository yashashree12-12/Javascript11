// primitive datatype

// 7 types : String, Number, Boolean, null, undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);//false

const bigNumber = 33456788765435677654n

//Reference (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "yashashree",
    age: 19,
}

const myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof heros); //object 
console.log(typeof bigNumber); //undefined
console.log(typeof outsideTemp); //object
console.log(typeof scoreValue); //number

//+++++++++++++++++++++++++++++++++++++++++

//stack (primitive), heap (non-primitive)


let myYoutubename = "yashashreeNimbalkarcom"

let anothername = myYoutubename

console.log(anothername);
