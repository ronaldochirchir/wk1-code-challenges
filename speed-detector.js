const readline = require('readline'); // Import the readline module

// Create an interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to check speed and calculate demerit points
function checkSpeed(speed) {
    const speedLimit = 70; // Speed limit in km/h
    const demeritPointThreshold = 12; // Threshold for license suspension

    // Check if the speed is less than the speed limit
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        // Calculate demerit points for speeding
        const excessSpeed = speed - speedLimit; // Calculate how much over the limit
        const demeritPoints = Math.floor(excessSpeed / 5); // Calculate demerit points

        console.log(`Points: ${demeritPoints}`); // Print total demerit points

        // Check if points exceed threshold for license suspension
        if (demeritPoints > demeritPointThreshold) {
            console.log("License suspended");
        }
    }
}

// Prompt the user to enter the speed of the car
rl.question("Please enter the speed of the car: ", (input) => {
    let speed = parseInt(input); // Convert input to an integer

    // Validate the input
    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input. Please enter a positive number.");
    } else {
        // Call the checkSpeed function with the provided speed
        checkSpeed(speed);
    }

    rl.close(); // Close the readline interface after input
});
