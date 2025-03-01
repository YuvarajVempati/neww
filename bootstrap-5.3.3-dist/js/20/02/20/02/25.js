//1.arrow function definition:
//The function which does not have function keyword and function name and denoted by => is known as arrow function
//syntax of arrow function:
var x=()=>"syntax"
console.log(x())

 //2.Basic conersion
var add=(a,b)=>a+b
console.log(add(2,3))

//3.Implicit return
var square=(n)=>n*n
console.log(square(3))

//4. single parameter syntax
var functionname=a=>a*a

//5.concise body vas block body:
//Implicit Return/concise
var cube=a=>a**3
console.log(cube(2))
//explicit Return/block
var cude=a=>{
    return a**3
}
console.log(cube(2))

//6.Multiple parameters and parentheses:
var arrow=(x,y)=>x-y
console.log(arrow(5,3))

//7.No parameters Arrow function:
var hello=()=>"Hello, World !"
console.log(hello())