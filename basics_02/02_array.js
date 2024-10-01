const marvel_heros= ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros) //1.returns same array with added part

console.log(marvel_heros);
console.log(marvel_heros[3][1]);


const allheros = marvel_heros.concat(dc_heros) //2.returns new array with added part
console.log(allheros);

const all_new_heros = [...marvel_heros, ...dc_heros]//spread operator (easy way) use to concat the string
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("yashashree")) //check it is array or not.
console.log(Array.from("Yashashree")) //convert into array.
console.log(Array.from({name: "hitesh"})) //interesting it will give empty string.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));