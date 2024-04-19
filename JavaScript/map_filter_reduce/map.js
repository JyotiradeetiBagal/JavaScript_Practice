//map gives copy of the array with performed operations on it

let arr=[20,40,30,60];
//print array using array
let narr=arr.map((val)=>{
    return val;
})
console.log(narr);

//print the squre of element of array using map
let sqarr=arr.map((x)=>{
    return x*x;
})
console.log(sqarr);

