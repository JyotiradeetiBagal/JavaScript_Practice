//reduce performs some operation and reduce the array to single value and return value

//find sum of array
let arr=[3,5,4,2,7,8,6];
let output=arr.reduce((acc,curr)=>{
    acc=acc+curr;
    return acc;
},0)
console.log(output);
console.log(output/arr.length);

