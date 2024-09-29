const name = "yashashree"
const repoCount = 50

//console.log(name + repoCount + "Value");

console.log('Hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String('yashashreenimbalkar')

console.log(gameName.__proto__); //{}
console.log(gameName.length); //19
console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(2)); //s
console.log(gameName.indexOf('h'));


const gm="yashashree-nimbalkar-CSEAI";
const newString = gm.substring(0,4) //can't give negative value if given it will start from 0 only.
console.log(newString);
const anotherstring = gm.slice(-8,15) //can give negative value
console.log(anotherstring);

const newStringOne = "        yashraj       "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://yashashree.com/yashashree%01nimbalkar"
console.log(url.replace('%01','-'))

console.log(url.includes('sundar'))

console.log(gm)
console.log(gm.split('-'));
