const radius=[3,1,2,4];
const area=function(radius){
    console.log("Area of circle is :");
    return Math.PI*radius*radius;
};
const circumference=function(radius){
    console.log("Circumference of circle is :");
    return 2* Math.PI*radius;
};
const diameter=function(radius){
    console.log("Diameter of circle is :");
    return 2* radius;
}

const calculate=function(radius,logic){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));
console.log("Calculating area using map method : ");
console.log(radius.map(area));