/**
 * This is a function that takes a string representing an Excel column name and returns the integer value.
 * 
 * @param {string} stringInput - The Excel column name to convert.
 * @returns {number} The zero-based column index.
 * No exception is raised.
 */
function excelColumnFunction(stringInput) {
    let stringCount = stringInput.length; // The set the length of the string input
    let startCount = 0; // Initialize the count
    let counter = 0; // Initialize while loop index

    while (counter < stringCount) {
        let number = stringInput.charCodeAt(counter) - 'A'.charCodeAt(0); // Get the value of the char
        startCount = startCount * 26 + number; // Convert to base-26
        counter++; // Increment for the next iteration
    }

    return startCount; // Return value
}
