

let firstName = "pushpendra chourasiya";
console.log(firstName.length);
firstName = firstName.toUpperCase();
console.log(firstName);

// start endex , end index
let newString = firstName.slice(1);
console.log(newString);
let age = 22;
let fName = 'harshith';
console.log(typeof age);
// 22 -> "22"
// convert number to string
age = age + "";
console.log(typeof(age)); '22'
// string concatenation
let string1 = '11';
let string2 = '10';
let newString1 = +string1 + string2;
console.log(typeof newString);
 
// string indexing
let x = "kanpurnagarutterpradesh"
console.log(x[2]);
console.log(x.length);
console.log(x[x.length-21]);
// if ealse cond
let age1 = 10;
 if(age1>=15){
    console.log("User can play audio");
 } else {
  console.log("User can play video");
 }
// Iterables
// jisme ham for of  loop laga ske 
// string and array are iterable 
// string - array like a objects
const firstClass = "Radhan";
for(let char of firstClass){
    console.log(char)
}
// set
// Has() this method to sure particular value hai or nahi
const numbers = new Set("abc");
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(['item1','item2']);
numbers.add(['item1','item2']);
numbers.add('item3');

if(numbers.has(10)){
    console.log("10 is present")
} else {
    console.log("10 is not present")
}
console.log(numbers);
for(let number of numbers){
    console.log(number);
}
const numbers1 = [1,2,3,4,5];
const doubled = numbers1.map(x => x * 20);
console.log(doubled);

