//we are given a array of marks of students.filter out of the marks of students that scored 90+ .
const marks=[87,93,64,99,86];

const ans=marks.filter((val)=>{
    return val>=90;
})
console.log(ans);

//Take a number  n as input from user.Create an array of numbers from 1 to n.
//use reduce method to calculate sum of all numbers in array;
//use reduce method to calculate product of all numbers in array;
let n=prompt("Enter a value of n : ");
let arr=[];
for(let i=1;i<=n;i++){
    arr.push(i);
}

let sum=arr.reduce((acc,curr)=>{
    acc+=curr;
    return acc;
},0)
console.log(`Sum of ${n} numbers is : ${sum}`);
//gives factorial of number n
let mult=arr.reduce((acc,curr)=>{
    acc*=curr;
    return acc;
},1)
console.log(`Sum of ${n} numbers is : ${mult}`);

