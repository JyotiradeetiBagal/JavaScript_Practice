/*//ceate a new button element. give it text "Click me" ,background color of red,text color of white
//insert the button as first element inside the body
let newBtn=document.createElement("button");
newBtn.innerText="Click me!";
newBtn.style.backgroundColor="red";
newBtn.style.color="white";
let b=document.querySelector("body");
b.prepend(newBtn);
*/
//create a <p> tag in html,give it a class and some styling
//now create a new class in css and try to append this class to <p> element 
//did you notice how you overwrite the class name when you add new one
//solve this problem with classList

let para=document.querySelector("p");
//para.setAttribute("class","newClass");
para.classList.add("newClass");