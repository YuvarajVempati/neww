
//1.program
function sayHello ()
{
    console.log("Hello, World!")
}
sayHello()




//2.program
function displayWarning ()
{
    console.log( "Warning! System Overload!")

}
displayWarning()



//3.program
function printStatus()
{
    console.log("System Status: Active")

}
printStatus()


//4.program
function initialize()
{
    console.log("Initialization Complete")
    shutdown()
}
function shutdown()
{
    console.log("System Shutting Down…")
}
initialize()



//5.program
function startProcess()
{
    console.log("Process Started")
    endProcess()
}
function endProcess()
{
    console.log("Process Ended")
}
startProcess()



//6.program
function greetUser(name)
{
    console.log("Hello",name)
}
greetUser("manohar hero")

//7.program
function calculateSum(a,b)
{
    console.log(a+b)
}
calculateSum(2,3)







//8.program
function countDown()
{
    for( var i=5 ;i>= 1 ;i--){
    console.log(i)
    }

}
countDown()
//9.program
function checkEvenOdd(num)
{
    if (num % 2== 0){
        console.log("even")
    }
    else {
        console.log("odd")
    }


}
checkEvenOdd(3)
checkEvenOdd(4)


//10.program
function beginSession ()
{
    console.log("Session Started")
    endSession()
}
function endSession()
{
    console.log("Session Ended")
}
beginSession()


function logMessage() {
    console.log("Hello");
    }
    let result = logMessage();
    console.log(result);
//callback
var  first=function(a,b){
    console.log("hero")
    console.log(a)
    console.log(b())
}
first(10,second)
function second(){
    console.log("gopal")
}

//calculator
var sum=function(a,b){
    console.log(a+b)
}
var sub=function(a,b){
    console.log(a-b)
}
var mul=function(a,b){
    console.log(a*b)
}
function calculate(v1,v2,operation){
    operation(v1,v2)
}
calculate(2,4,mul)



var vinay=function(vinay0,vinay1,vinay2){
    return vinay2()

}
console.log(vinay("krishna","Indu",second))
function second(){
    console.log("hello")
 }
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