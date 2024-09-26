const fs = require('fs');

// Step 1: Function to read and parse the JSON input
function parseJSONInput(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading file:", err);
        process.exit(1);
    }
}

// Step 2: Decode the y-values based on their respective bases
function decodeBaseValue(base, value) {
    return parseInt(value, base);
}

// Step 3: Implement Lagrange Interpolation to solve for the constant term 'c'
function calculateLagrangeInterpolation(points, k) {
    let result = 0;

    for (let i = 0; i < k; i++) {
        let xi = points[i].x;
        let yi = points[i].y;
        let li = 1;

        for (let j = 0; j < k; j++) {
            if (i !== j) {
                li *= (0 - points[j].x) / (xi - points[j].x); // Lagrange basis polynomial
            }
        }

        result += li * yi;
    }

    return result; // This is the constant term 'c'
}

// Step 4: Main function to drive the program
function executeMain() {
    const inputFilePath = 'exam3.json'; // Change the file path if necessary
    const input = parseJSONInput(inputFilePath);

    let n = input.keys.n; // Number of provided points
    let k = input.keys.k; // Minimum points required to solve

    // Step 5: Collect and decode points
    let points = [];
    let count = 0;

    // Extract and decode points only from the relevant keys in the JSON
    for (let key in input) {
        if (key !== 'keys') {
            let x = parseInt(key); // x is the key of the object
            let base = parseInt(input[key].base); // Base is provided in the JSON
            let value = input[key].value; // Encoded y value
            let y = decodeBaseValue(base, value); // Decode the y value
            points.push({ x, y });

            count++;
            if (count >= n) break; // Only take 'n' points
        }
    }

    // Validate that there are enough points for interpolation
    if (points.length < k) {
        console.error(`Insufficient points for interpolation. Found ${points.length}, required ${k}.`);
        process.exit(1);
    }

    // Step 6: Use Lagrange Interpolation to find the constant term 'c'
    let secret = calculateLagrangeInterpolation(points, k);
    console.log("The secret constant 'c' is:", secret);
}

// Step 7: Execute the main function
executeMain();
