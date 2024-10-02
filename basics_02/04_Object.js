//singleton - if created with constructor its singleton object

//object literals

const mySym = Symbol("Key1")


const JsUser = {
    name: "yashashree",
    "full name": "Yashashree Nimbalkar",
    [mySym]: "myKey1", //symbol key
    age:18,
    location:"Pune",
    email:"yashashree@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"] 
} 

//use mostly square bracket.
// console.log(JsUser.email)//it can be use if it is written in this format(name: "yashashree")
// //if it is written in "" then it is not access ( "name": "yashashree")
// console.log(JsUser["email"])//****/ this can be access in both the syntax.
// console.log(JsUser["full name"])//here fullname(key) is written in "" then to we can access as it is written in []
// console.log(JsUser[mySym]) //myKey1 all contain.

JsUser.email = "yashashree@chatgpt.com"
// Object.freeze(JsUser) //if we freeze it can't be changed.
JsUser.email = "Yashashree120405@gmail.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello js user");
}

console.log(JsUser.greeting);//function returns back )this is not of any use.

JsUser.greetingTwo = function(){
    console.log('hello js user, ${this.name}');
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());