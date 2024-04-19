/*//Q.1. given a array of students marks find the average marks of entire class
let studMarks=[85,97,44,37,76,60];
let sum=0;
for(let i=0;i<studMarks.length;i++){
    sum+=studMarks[i];
}
let avg=sum/studMarks.length;
console.log("The average of entire class is : "+avg);
*/

/*//Q.2. for a given array with prices of 5 items [250,645,300,900,50]
//all items have 10% off on them .Change the array to store final price after applying the offer

let prices_items=[250,645,300,900,50];

for(let i=0;i<prices_items.length;i++){
    //prices_items[i]=prices_items[i]-((10/100)*prices_items[i]);
    prices_items[i]=prices_items[i]-(prices_items[i]/10);
}
console.log(prices_items);
*/

//Q.3. create an array to store Companies ["Bloomberg","Microsoft","Google","Uber","IBM","Netflix"]
//i.remove first company from the array
//ii.remove uber and add OLA in its place
//iii.add Amazon at end

let companies=["Bloomberg","Microsoft","Google","Uber","IBM","Netflix"];
companies.shift();
companies.splice(2,1,"OLA");
companies.push("Amazon");

console.log(companies);


