//loops
//use to execute a piece of code again and again
//for loop
//for(initialization;stopping_condition;increament or decreament)

let sum=0;
for(let i = 1;i<=5;i++){
    sum = sum + i;
}
    console.log("sum of 1 to 5:",sum);     
   
for(let a= 1; a<=5; a++) {
console.log("a:",a);
} 

// infinite loops: a loops never ends. don't use this type of loop

//while loop
let b = 1; // initialization
while(b<=5){ // stopping condition
    console.log("b:",b);// block of statement
    b++;// increment or decrement
}

//do while loop 
//it first execute then check loop condition
// in do while loop after(while); semicolon is must
let p =20;; //initialization
do{
    console.log("shreya");
    p++;
}while (p<=10);
//print 1 to 5 numbers
let q = 1;
do{
    console.log("q:",q);
    q++;
}while(q<=5);

//for of loop
//to iterate on some special data types
/*syntax- for( let val of strVar){
// do some work
}
*/
let str = "shreya";
let size = 0;
for(let s of str){ //iterator  will give characters
    console.log("s:",s);    
    size++;
}
console.log("string size:",size);

//for in loop
//give objects key
/* syntax- for(let key in objVar){
// do some work
}
*/
let student = {
    name:"shreya",
    age : 19,
    isPass: True
};
for(let key in student){
    console.log("key:",key);
}  