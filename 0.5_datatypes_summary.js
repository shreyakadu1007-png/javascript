/* datatypes are divided into two basic types: "PRIMITIVE" and  "NON-PREMITIVE (REFERNCE TYPE)"
~ PRIMITIVE DATATYPES: 
7 types: String,Number,Boolean,null,undefined,symbol,bigInt

~ NON-PRIMITIVE DATATYPES:
Array,Object,functions.

"javascript is dynamically type language."
*/
const score = 100
const scoreValue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid =Symbol('123')
console.log(id==anotherid);

const bigNumber = 3357976564342346576970n


//array
const colours = ["Red","black","white"]
//object
let myObj={
    name:"shreya",
    age:19
}
//function
const myfunction(){
    console.log("hello world.")
}

/*type of datatypes
number=number
string=string
boolean=boolean
null=object
undefined= undefined
symbol = symbol
bigInt =bigint

arrays=object
function= function
object=object.
*/


