// 1.String

let a =""
let b= ''
let c =``
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

/** 
 * Numbers-integer,float,bigInt
 */
let d=123;
let e =12.3
let f=1e23 
let g = NaN
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

// null
let h= null
console.log(typeof h);

// array
// single dimensional array
let arr=[]
let myProfile=["sirjana",123,"bkt"]
console.log(myProfile[0])
console.log(myProfile[1])
console.log(myProfile[3])


// multi dimensional array
let mulArr=[]
let myProfile1=["sirjana",123,"bkt",[98765442,9777637654]]
console.log(myProfile1[1])
console.log(myProfile1[3][1]);

// object
// let productInfo={
//     name:"apple iphone 12",
//         brand:"apple",
//         store:"oliz store",
//         price:12000,
//         stock:5
// }

// mixed
let allProducts=[
    {
        name:"apple iphone 12",
        brand:"apple",
        store:"oliz store",
        price:12000,
        stock:5
    },
    {
        name:"apple iphone 12",
        brand:"apple",
        store:"oliz store",
        price:12000,
        stock:5
    }
];
console.log(allProducts[0].name);
console.log(allProducts[0]['brand']);


// function-consider as datatypes in javascript
const getName= function(){}
const getUserName=()=>{}

// set-select unique data
let arrData=[1,2,3,4,5,2,3,54,6,7,3,2,1]
const unique= new set[arrData]
console.log(unique);

let obj ={
    key:"value",
    key:"new value"
}
const symbool =symbool("key");

obj={
    [symbool]:"value"
}
console.log(obj.key);

// JSON universal datatype
let objData=JSON.stringify(allProducts)
console.log(objData);