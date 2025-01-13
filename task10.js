
const student = {
    name: "Alice",
    age: 20,
    grade: "A",
    school: "XYZ University"
};

const { name, age, grade } = student;

console.log("Name:", name);  
console.log("Age:", age);    
console.log("Grade:", grade);

const { school: university } = student;
console.log("University:", university); 
