//filter creates a array of elements that gives true for condition/result

//return even numbers
let arr=[3,5,6,4,2,8,9];
let res=arr.filter((val)=>{
    return val%2===0;
})
console.log(res);

//return numbers divisible by 3
let ans=arr.filter((val)=>{
    return val%3===0;
})
console.log(ans);