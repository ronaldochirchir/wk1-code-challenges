const readline = require('readline'); // Import the readline module

// Create an interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate salary details
function calculateSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // Example KRA, NHIF, and NSSF rates (adjust based on the provided links)
    const taxRate = 0.3; // Example tax rate of 30%
    const NHIF = 1000; // Example NHIF deduction
    const NSSF = 500;  // Example NSSF deduction

    const tax = grossSalary * taxRate;
    const netSalary = grossSalary - tax - NHIF - NSSF;

    console.log("Gross Salary:", grossSalary);
    console.log("Tax Deduction:", tax);
    console.log("NHIF Deduction:", NHIF);
    console.log("NSSF Deduction:", NSSF);
    console.log("Net Salary:", netSalary);
}

// Prompt the user to enter basic salary and benefits
rl.question("Enter your basic salary: ", (basicSalaryInput) => {
    rl.question("Enter your benefits: ", (benefitsInput) => {
        let basicSalary = parseFloat(basicSalaryInput);
        let benefits = parseFloat(benefitsInput);

        // Validate inputs
        if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
            console.log("Invalid input. Please enter valid positive numbers.");
        } else {
            // Call the function with the entered values
            calculateSalary(basicSalary, benefits);
        }

        rl.close(); // Close the readline interface after use
    });
});
