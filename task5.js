




function sumArray(numbers) {
    let sum = 0; 

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum; 
}


let array1 = [1, 2, 3, 4, 5];
let array2 = [10, 20, 30, 40];
let array3 = [0, 0, 0, 0];
let array4 = [100, 200, 300];

console.log("Sum of array1: " + sumArray(array1));  
console.log("Sum of array2: " + sumArray(array2));  
console.log("Sum of array3: " + sumArray(array3));  
console.log("Sum of array4: " + sumArray(array4));
