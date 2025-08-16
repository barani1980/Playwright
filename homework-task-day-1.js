console.log("------------ Day 1 Homework Task ------------");

// String Example
const city = "Chennai"
console.log(`I live in the city of ${city} and the DataType is: ${typeof city}`)

// Number Example
let marks = 85
console.log(`I got the test score of ${marks + 10} and the DataType is: ${typeof (marks)}`)

// Boolean Example
var isWeekend = true
if (isWeekend) {
    let isWeekend = false; // This is a new variable, not overwriting outer
    console.log(`Yay! It's the weekend! and value of variable is ${isWeekend} and the DataType is: ${typeof isWeekend}`);
    // var isWeekend = true; // Will not allow this to be executed as it is already declared in the if block
} else {
    let isWeekend = false; // This is a new variable, not overwriting outer
    console.log(`It's a weekday, back to work! and value of variable is ${isWeekend} and the DataType is: ${typeof isWeekend}`);
} 

// Undefined Example
let futureGoal;
console.log(`My future goal is: ${futureGoal} and the DataType is: ${typeof futureGoal}`)

// Null Example
const emptyBox = null;
console.log(`The box contains: ${emptyBox} and the DataType is: ${typeof emptyBox}`);

// Symbol Example
const uniqueId = Symbol('id');
console.log(`The symbol description is: ${uniqueId.description} and the DataType is: ${typeof uniqueId}`);

// BigInt Example
const largeNumber = 9007199254740991n;
console.log(`A very large number: ${largeNumber} and the DataType is: ${typeof largeNumber}`);

console.log("------------ Variable Declaration Differences below ------------");

const variableDeclarationDifferences = `
1. var variables are function-scoped, can be redeclared, and hoisted with a default value of undefined.
2. let variables are block-scoped, cannot be redeclared in the same scope, and are hoisted without a default value.
3. const variables are block-scoped, must be initialized when declared, and cannot be reassigned after declaration.
`;
console.log(variableDeclarationDifferences);
console.log("------------ Variable Declaration Differences above ------------");

// 1. Scope difference
function testScope() {
    if (true) {
      var usingVar = "I am var";
      let usingLet = "I am let";
    }
  
    console.log("VAR Scope:", usingVar); // ✅ Works
    // console.log("LET Scope:", usingLet); // ❌ Error: usingLet is not defined
  }
  testScope();
  
  console.log("-----");
  
  // 2. Re-declaration
  var userName = "Alice";
  var userName = "Bob"; // ✅ Allowed with var
  console.log("Re-declared var:", userName); 
  
  let age = 25;
  // let age = 30; // ❌ Error: Identifier 'age' has already been declared
  console.log("Original let:", age);
  
  console.log("-----");