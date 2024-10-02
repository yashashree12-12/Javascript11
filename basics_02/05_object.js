// const tinderUser = new Object() //singleton object
const tinderUser = {} //non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "yashashree"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: 
    {
        userfullname: 
        {
            firstname: "yashashree",
            lastname: "nimbalkar"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname?.userfullname.firstname,);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"r", 6:"h"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) //here all object will be stored in {} and display the {}
// const obj3 = Object.assign(obj1, obj2) // //here all object will go in obj1 and display obj1 

const obj3 = {...obj1, ...obj2} //99% used
console.log(obj3); 

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

//array ka object
const users = 
[
    {
        id: 1,
        email: "y@gmail.com"
    },

    {
        id: 1,
        email: "y@gmail.com"
    },

    {
        id: 1,
        email: "y@gmail.com"
    },

    {
        id: 2,
        email: "a@gmail.com"
    }

]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //check is there that property.

const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "yashashree"
}

// course.courseInstructor

const {courseInstructor} = course
const {price} = course
const {coursename} = course

console.log(price);
console.log(coursename);
console.log(courseInstructor); 

const {courseInstructor: instructor} = course
console.log(instructor);

//API

//the below syntax is correct(even it showing underline)
// {
//     "name": "hitesh",
//     "coursename": "js",
//     "price": "free"
// }

//API=https://randomuser.me/
//JSON -> TO Understand API code we use json formatter to convert api to readable code
//JSON=https://jsonformatter.org/