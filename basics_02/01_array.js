//array

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman" , "naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]); 
console.log(myArr2);
console.log(myHeros);

//array methods
myArr.push(6)
myArr.push(7) //add elements at end.
myArr.pop() //remove elements from the end.
console.log(myArr);

myArr.unshift(9) //it add the no.at start of the array.
myArr.shift() //it remove elements from the start.
console.log(myArr);

console.log(myArr.includes(9)); //checks if 9 is there or not.
console.log(myArr.indexOf(3)); //it return the index of the given value.

const newArr = myArr.join()

console.log(myArr);
console.log(newArr); // it will return array in string format
console.log(typeof newArr); //string

//slice, splice
console.log("a",myArr);
const myn1 = myArr.slice(1,3); //it will slice from index 1 till 3-1

console.log(myn1);
console.log("b",myArr);

const myn2 = myArr.splice(1,3); //it will splice from index 1 till 3.
console.log("c",myArr);  //Removes the splice no. from original array.
console.log(myn2);  //it display spliced elements [1,2,3].

// difference between slice and splice is: 
// 1.slice:it will display no. from given no. till n-1
//and if we display original array it will be display as it is.
//2.splice:it will display no from given no. till n
//and if we display original array it will display all no. except the spliced no.


