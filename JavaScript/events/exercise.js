let modebtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currMode="light";
modebtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        //modebtn.innerText="light Mode";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currMode="light";
        //modebtn.innerText="dark Mode";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
})