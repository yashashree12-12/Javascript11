   function sayMyName()
   {
    console.log("y");
    console.log("a");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("s");
    console.log("h");
    console.log("r");
    console.log("e");
    console.log("e");
   }

   sayMyName()

   // function addTwoNumbers(number1,number2)
   // {
   //  console.log(number1+number2);
   // }

   function addTwoNumbers(number1,number2)
   {
    let result = number1 + number2
    return result
   //  return number1 + number2 
   }

   // addTwoNumbers(3,4)
   // addTwoNumbers(3,"a")
   // addTwoNumbers(3,null)

   const result = addTwoNumbers(5,5)

   console.log("Result:", result);

   // .........................................................

   function loginUserMessage(username) {
      // if(username === undefined)
      if(!username)
      {
         console.log("pls enter name: ")
      }
      return `${username} just logged in`;
   }
   

   // console.log(loginUserMessage("yashashree"))
   console.log(loginUserMessage())

   //..................................................................

   function loginUserMessage(username="yash") {
      // if(username === undefined)
      if(!username)
      {
         console.log("pls enter name: ")
      }
      return `${username} just logged in`;
   }
   

   console.log(loginUserMessage("yashashree"))
   // console.log(loginUserMessage())


   //..................................................................
   function calculateCartPrice(...num1) { // ...num1 wraps all arguments into an array
      return num1; // Returns the array of numbers
  }
  
  console.log(calculateCartPrice(200, 400, 500)); // Outputs: [200, 400, 500]
  
//...........................................................................
function calculateCartPrice(val1, val2, ...num1) { // val1 and val2 are individual arguments; ...num1 collects the rest into an array
   return num1; // Returns the array of additional numbers passed after val1 and val2
}

console.log(calculateCartPrice(200, 400, 500, 2000)); // Outputs: [500, 2000]

//..........................................................................

const user = {
   username: "yashashree mohan nimbalkar",
   price:1000
}

function handleObject(anyobject) { // Accepts an object as an argument
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); // Use backticks for template literals
}

handleObject(user); // Calls the function with the user object

// handleObject(user)
// ({
//    username: "Yashashree",
//    price: 399
// })
//......................................................................
const myNewArray = [200, 400, 100, 600]

function returnSecondaryValue(getArray)
{
   return getArray[1]
}

// console.log(returnSecondaryValue(myNewArray));
console.log(returnSecondaryValue([200,400,500,1000])); //400
