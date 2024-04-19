//string array
let fruits=["Mango","Apple","Banana"];
//number array
let marks=[97,84,75,66];
//number+string array
let info=["Rahul",25,"Delhi"];
//we can also create array by new keyword
let arr=new Array ("cat","dog","cow");

// console.log(fruits);
// console.log(marks);
// console.log(info);
//console.log(arr);

//access elements by index
// let fruit_name=fruits[0];
// console.log(fruit_name);
//find length of array
// console.log(fruits.length);
//change value of array element
// info[2]="Benglore";
// console.log(info);
//prints elements of array
/*//using for loop
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
//using for of loop
for(let fruit of fruits){
    console.log(fruit);
}*/
//add elements in array
//at end
//fruits.push("Orange","Grape");
//at start
fruits.unshift("Pineapple");
//delete element from array
//from end
fruits.pop();
//from start
//fruits.shift();
console.log(fruits);
//print array as string
//console.log(fruits.toString());
//concat two arrays
console.log(fruits.concat(arr));
//slice array
console.log(fruits.slice(1,3));
//delete elements from particular index and add any element
arr.splice(0,1,"sheep");
//add elements without deleting
arr.splice(2,0,"Fox","Goat");
//delete element without adding
arr.splice(0,1);
//replace
arr.splice(1,1,"Horse");
console.log(arr);

