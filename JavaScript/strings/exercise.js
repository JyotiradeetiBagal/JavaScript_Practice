//prompt the user to enter their full name generate username for them based on the input .
//start username with @ followed by their full name and ending with fullname length
//eg uName="ElonMusk" userName="@ElonMusk8"

let uname=prompt("Enter your full name : ");
let username="@"+uname+uname.length;
console.log(username);