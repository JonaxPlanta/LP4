// functions
console.log(`================`);
console.log(`FUNCTIONS REVIEW`);
console.log(`================`);

// commom functions (uses params)
// function to calculate the student average without using template strings
function gradeAverageWithoutParams(grade1, grade2) {
    return "Student grade average: " + (grade1 + grade2) / 2;
}

// calling function
console.log(gradeAverageWithoutParams(9, 8));

// function to calculate the student average using template strings
function gradeAverageWithParams(grade1, grade2) {
    // using template strings (`${}`)
    return `Student grade average: ${(grade1 + grade2) / 2}`
}

// calling function
console.log(gradeAverageWithParams(9, 8));

// anonimous functions (do't uses params)
// function to say hello
function sayHello() {
    return "Hello";
}

// calling function
console.log(sayHello());

// arrow functions (another notation)
// function to multiply
const multiplier = (number1, number2) => {
    return `${number1} x ${number2} = ${number1 * number2}`
};

// calling function
console.log(multiplier(2, 2));

