const name = "aditya"
const repoCount = 50

//console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)  

const gameName = new String('aditya-race-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
console.log(gameName.indexOf('race'));
 
const newString = gameName.substring(0, 6)
console.log(newString);

const anoterString = gameName.slice(-8, 4)
console.log(anoterString);

const newStringone = "  aditya  "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://www.youtube.com/20watchadii";

console.log(url.replace('20', '/'));

console.log(url.includes('Insta'));