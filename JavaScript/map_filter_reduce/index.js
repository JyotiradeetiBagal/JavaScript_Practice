const users=[
    {firstName:"Jyotiradeeti",lastName:"Bagal",age:22},
    {firstName:"Donald",lastName:"Trump",age:75},
    {firstName:"Elon",lastName:"Musk",age:50}
];
//return firstname and lastname
//const output=users.map((x)=> x.firstName +" "+x.lastName);
//console.log(output);

//return age and their occurence (22:1,75:1,50:1)
// const output=users.reduce(function(acc,curr){
//     if(acc[curr.age]){
//         acc[curr.age]=++arr[curr.age];
//     }
//     else{
//         acc[curr.age]=1;
//     }
//     return acc;
// },{});
// console.log(output);

//return the firstname of users whose age is less than 30
// const output=users.filter((x)=> x.age<30).map((x)=>x.firstName);
// console.log(output);
//using reduce
const output=users.reduce(function(acc,curr){
    if(curr.age<30){
        acc=curr.firstName;
    }
    return acc;
},[]);
console.log(output);