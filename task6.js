
function reverseString(str) {
    
    return str.split('').reverse().join('');
}


let str1 = "hello";
let str2 = "JavaScript";
let str3 = "racecar";
let str4 = "12345";

console.log("Reversed str1: " + reverseString(str1)); 
console.log("Reversed str2: " + reverseString(str2));  
console.log("Reversed str3: " + reverseString(str3));  
console.log("Reversed str4: " + reverseString(str4));  
