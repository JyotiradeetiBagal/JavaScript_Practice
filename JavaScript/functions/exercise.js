//write a function to take string as an argument and return count of vowels in string
/*function countVowels(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'||
           str[i]=='A'||str[i]=='E'||str[i]=='I'||str[i]=='O'||str[i]=='U'){
            count++;
        }
    }
    console.log(`The number of vowels in string "${str}" are ${count}`);
}*/
/*let countVowels=(str)=>{
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'||
           str[i]=='A'||str[i]=='E'||str[i]=='I'||str[i]=='O'||str[i]=='U'){
            count++;
        }
    }
    console.log(`The number of vowels in string "${str}" are ${count}`);
}
let str="JavaScript is my favourite language!";
countVowels(str);
*/

//for given array of numbers, print the square of each value using forEach loop
let arr=[3,2,6,4,5];

arr.forEach((val)=>{
    console.log(val*val);
});
