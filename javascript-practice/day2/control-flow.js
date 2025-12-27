// If-Else Statements
// Grading System 

const grade = (score) => {

    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";

}


console.log(grade(50));
console.log(grade(80));
console.log(grade(60));
console.log(grade(80));
