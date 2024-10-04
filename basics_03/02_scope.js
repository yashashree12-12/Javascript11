// var c = 300
let a = 3000
if(true)
{
    let a = 10
    const b = 20
    // var c = 30
    console.log("inner: ",a);
}

console.log(a); 
// console.log(b);
// console.log(c); //confusing not to use as it can be acessed out of scope also.

//.................................................................
function one()
{
    const username = "yashashree"

        function two() 
        {
            const website = "youtube"
            console.log(username); // Logs 'username' from the outer scope (function 'one')
        } 
    
    // console.log(website); // This will throw a ReferenceError because 'website' is not accessible outside function 'two'
    two(); // Calls function 'two'
}

one(); // Calls the outer function 'one'

//...........................................................................
if(true)
{
    const username = "yashashree123456"
    if(username === "yashashree123456")
    {
        const website = "youtube"
        console.log(username + website); // Logs "yashashree123456youtube"
    }
    
    // console.log(website); // This will throw a ReferenceError because 'website' is not accessible outside the inner 'if' block
}

// console.log(username); // This will also throw a ReferenceError because 'username' is not accessible outside the outer 'if' block

//..................................interesting.....................................

console.log(addone(5))

function addone(num) {
    return num + 1
}
// addone(5)

// addTwo(5)//error as variable is declared below this so we can't access the var before declaration.
const addTwo = function(num)
{
    return num + 2
}
// addTwo(5) //no 
