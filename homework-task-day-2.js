console.log("----------------------------------------------------------------");
console.log("------------ Day 2 Homework Task on Conditional Statements------------");

function launchBrowser(browserName){
    if (browserName == "Chrome") {
        console.log(`Launching Chrome browser`);
    } else {
        console.log("No browser specified.");
    }
}

function runTests(testType){
switch (testType) {
    case "smoke":
        console.log("Running smoke tests");
        break;
    case "sanity":
        console.log("Running sanity tests");
        break;
    case "regression":
        console.log("Running regression tests");
        break;
    default:
        console.log("Nothing specified, so running smoke tests by default");
        break;
    }
}

launchBrowser("Chrome");
launchBrowser("Firefox");
launchBrowser("");
launchBrowser();
console.log("------------------------------");
runTests("smoke");
runTests("sanity");
runTests("regression");
runTests();
runTests("default");
runTests("");
console.log("----------------------------------------------------------------");
console.log("------------ Day 2 Homework Task on Grade Calculation ------------");

function calculateGrade(marks) {
    switch (true) {
        case (marks >= 90):
            return "A+";
        case (marks >= 80):
            return "A";
        case (marks >= 70):
            return "B+";
        case (marks >= 60):
            return "B";
        case (marks >= 50):
            return "C";
        case (marks >= 40):
            return "D";
        case (marks < 40 && marks >= 0):
            return "E";
        default:
            return "F";
    }
}
console.log("----------------------------------------------------------------");
console.log("Grade for 95 marks:", calculateGrade(95));
console.log("Grade for 85 marks:", calculateGrade(85));
console.log("Grade for 75 marks:", calculateGrade(75));
console.log("Grade for 65 marks:", calculateGrade(65));
console.log("Grade for 55 marks:", calculateGrade(55));
console.log("Grade for 45 marks:", calculateGrade(45));
console.log("Grade for 35 marks:", calculateGrade(35));
console.log("Grade for 0 marks:", calculateGrade(0));
console.log("Grade for -10 marks:", calculateGrade(-10));
console.log("Grade for no marks assigned:", calculateGrade());
console.log("----------------------------------------------------------------");