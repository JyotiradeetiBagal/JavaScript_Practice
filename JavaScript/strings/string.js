//string
/*let str="Javascript";
console.log(str);
console.log("Length of string is : "+str.length);
console.log("Second character of string is : "+str[1]);
*/

//template literals
/*let supString=`this is template literal`;
console.log(supString);
console.log(typeof supString);
//string interpolation
let obj={
    item:"Pen",
    cost:10
};
//without template litral
console.log("The cost of "+obj.item+" is "+obj.cost+" rupees.");
//with template litral
let output=`The cost of ${obj.item} is ${obj.cost} rupees.`;
console.log(output);*/

//string methods
let str=" JavaScript  ";
let str1="language";
//find index of character
console.log(str.indexOf('a'));
//find character at index
console.log(str.charAt(2));
//convert string to uppercase
console.log(str.toUpperCase());
//convert string to lowercase
console.log(str.toLowerCase());
//return a specific part of string
console.log(str.slice(5,11));
//replace specific character/string with another(only single replacement)
console.log(str.replace('Java','Hava'));
//multiple time replacement
console.log(str.replaceAll('a','o'));
//concatenation of two string
// console.log(str.concat(str1));
console.log(str+str1);
//remove space
console.log(str.trim( ));
