
function Operation(choice, num1, num2) {
    switch(choice) {
        case 1: // Addition
            return num1 + num2;
        case 2: // Subtraction
            return num1 - num2;
        case 3: // Multiplication
            return num1 * num2;
        case 4: // Division
            if(num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error: Division by zero";
            }
        case 5: // Exit
            return "Exiting the program.";
        default:
            return "Invalid choice!";
    }
}

// Display menu and get user input
function showMenu() {
    let choice = parseInt(prompt("Choose an operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Exit"));

    if (choice !== 5) {
        let num1 = parseFloat(prompt("Enter the first number:"));
        let num2 = parseFloat(prompt("Enter the second number:"));

        // Perform the operation and display result
        let result = performOperation(choice, num1, num2);
        console.log("Result: " + result);
    } else {
        console.log("Exiting the program.");
    }
}
showMenu()
