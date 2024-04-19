let btn1=document.querySelector("#btn1");
btn1.onclick=(evt)=>{
    console.log("Clicked on button");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
}

let div=document.querySelector("div");
div.onmouseover=()=>{
    console.log("you are in div block")
};

let btn2=document.querySelector("#btn2");
let handler=()=>{
    console.log("Button 2 was clicked ");
};
btn2.addEventListener("click",handler);
btn2.removeEventListener("click",handler);
