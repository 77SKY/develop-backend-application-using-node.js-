
const students = [
    { name: "Alice", age: 20, grade: 85 },
    { name: "Bob", age: 22, grade: 92 },
    { name: "Charlie", age: 21, grade: 75 },
    { name: "David", age: 23, grade: 88 },
    { name: "Eve", age: 19, grade: 95 }
];


function getStudentsAboveGrade(students, threshold) {
   
    return students
        .filter(student => student.grade > threshold)  
        .map(student => student.name);
}

let threshold = 80;
let studentsAboveThreshold = getStudentsAboveGrade(students, threshold);

console.log("Students with grade above " + threshold + ": " + studentsAboveThreshold.join(", "));
