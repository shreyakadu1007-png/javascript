/* If Statement
let age = 19;
if(age>=18){
    console.log("eligible to vote ");
}
    

//If-Else statement
let age = 10;
if(age>=18){
    console.log("eligible to vote");
} else{
    console.log("Not eligible to vote"); 
}
    */

//else if statement
let mode ="dark";
let color;

if(mode==="dark"){
    color="black";
}else if(mode==="blue" ){
    color="blue";
}else if(mode ==="pink"){
    color="pink";
}else{
    color = "light";
}
console.log("mode color is:",color);
