// Function to determine grade based on marks
function calculateGrade(marks) {
  if (marks >= 90) {
    return "Grade A";
  } else if (marks >= 70) {
    return "Grade B";
  } else if (marks >= 50) {
    return "Grade C";
  } else if (marks >= 35) {
    return "Grade D";
  } else {
    return "Fail";
  }
}

// Test cases
console.log("Marks: 95 ->", calculateGrade(95)); // Grade A
console.log("Marks: 75 ->", calculateGrade(75)); // Grade B
console.log("Marks: 55 ->", calculateGrade(55)); // Grade C
console.log("Marks: 40 ->", calculateGrade(40)); // Grade D
console.log("Marks: 30 ->", calculateGrade(30)); // Fail
