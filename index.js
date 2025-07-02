// variable-changes with flow
// console.log(fullName);var can access before intialization 
// hoisting
var fullName="sirjana"  
let emailAddress="sirjana7@gmail.com" // let cant access before initialization
console.log(fullName);
console.log(emailAddress);

var fullName="updated"
console.log(fullName);

// scope
// global-var
// local
// block {code of block}

// var a =10
// console.log(a);
// {
//     var a=20
//     console.log(a);
// }
// console.log(a);

let b=10;
console.log(b);
{
    // let b=20
    b=20
    console.log(b);
}
console.log(b);

// constants-can't be empty,must be assign value
const PI = 3.14
console.log(PI);