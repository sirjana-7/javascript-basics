/**
 * Arithmetic or mathematical operator
 * +,-,*,/,%
 * increment or decremnet
 * ++,--
 */

// let a=10;
// a=a+1;
// a++;
// ++a;
// console.log(a++);  //console.log(a) a=a+1
// console.log(++a);  // a=a+1 console.log(a)

/**
 * Assignment
 * =,+=,-=,*=,/=
 */

/**
 * string/concatenation +
 */
// let x='10';
// let y='10';
// let z=x +y
// console.log(z);

/**
 * cOMPARISON OPERATOR
 * <,>,<=,>=,==,!=,===,!==
 */
// console.log(x<y)
// console.log(x>y);
// console.log(x<=y);
// console.log(x>=y);
// console.log(x==y);
// console.log(x===y); //false

/**
 * LOgical oprator
 * &&,||,!
 */


//  * conditional/ternary-single line if else statement
//  * (expression )? code:codelock
// let user={
//     age:16

// }
// let result=(user.age>=18)?"age is greater than 18":"age is less than 18"
// console.log(result);
//  * nullish colleaching
// <input data>=data?? null
// let age = user.age ?? null
//  * template literals
// let name="alice"
// let email="alice@gmail.com"
// let template=`
// Dear ${name}
// your email ${email}has been registered with us

// Regards,
// No_Reply system
// `
// console.log(template);
//  * Array Destructure-assign aarray into variable
let[firstname,lastName]=["sir","sir@gmail.com"]
// object destructor
// let userInfo={
//     name:"sirjana",
//     email:"abc@gmai.com",
//     address:"bkt",
//     phone:98765544
// }
// let { name,phone,email:emailAddress}=userInfo
// let { name,phone,email:emailAddress,...remaining}=userInfo  //rest



//  * spread and Rest
// spread-copy the value not reference
let userInfo={
    name:"sirjana",
    email:"abc@gmai.com",
    address:"bkt",
    phone:98765544
}
let userObj={
    ...userInfo
}
// userObj.phone.landline=986754
// console.log(userInfo);
// userObj.name='updated name'
// console.log(userInfo);

// let obj=JSON.parse(JSON.stringify(userInfo))

// deep copy,shallow copy

// Bitwise
console.log(4 & 5);


