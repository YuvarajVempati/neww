
// //1.program
// function sayHello ()
// {
//     console.log("Hello, World!")
// }
// sayHello()




// //2.program
// function displayWarning ()
// {
//     console.log( "Warning! System Overload!")

// }
// displayWarning()



// //3.program
// function printStatus()
// {
//     console.log("System Status: Active")

// }
// printStatus()


// //4.program
// function initialize()
// {
//     console.log("Initialization Complete")
//     shutdown()
// }
// function shutdown()
// {
//     console.log("System Shutting Down…")
// }
// initialize()



// //5.program
// function startProcess()
// {
//     console.log("Process Started")
//     endProcess()
// }
// function endProcess()
// {
//     console.log("Process Ended")
// }
// startProcess()



// //6.program
// function greetUser(name)
// {
//     console.log("Hello",name)
// }
// greetUser("manohar hero")

// //7.program
// function calculateSum(a,b)
// {
//     console.log(a+b)
// }
// calculateSum(2,3)







// //8.program
// function countDown()
// {
//     for( var i=5 ;i>= 1 ;i--){
//     console.log(i)
//     }

// }
// countDown()
// //9.program
// function checkEvenOdd(num)
// {
//     if (num % 2== 0){
//         console.log("even")
//     }
//     else {
//         console.log("odd")
//     }


// }
// checkEvenOdd(3)
// checkEvenOdd(4)


// //10.program
// function beginSession ()
// {
//     console.log("Session Started")
//     endSession()
// }
// function endSession()
// {
//     console.log("Session Ended")
// }
// beginSession()


// function logMessage() {
//     console.log("Hello");
//     }
//     let result = logMessage();
//     console.log(result);
// //callback
// var  first=function(a,b){
//     console.log("hero")
//     console.log(a)
//     console.log(b())
// }
// first(10,second)
// function second(){
//     console.log("gopal")
// }

// //calculator
// var sum=function(a,b){
//     console.log(a+b)
// }
// var sub=function(a,b){
//     console.log(a-b)
// }
// var mul=function(a,b){
//     console.log(a*b)
// }
// function calculate(v1,v2,operation){
//     operation(v1,v2)
// }
// calculate(2,4,mul)



// var vinay=function(vinay0,vinay1,vinay2){
//     return vinay2()

// }
// console.log(vinay("krishna","Indu",second))
// function second(){
//     console.log("hello")
//  }
// //1.arrow function definition:
// //The function which does not have function keyword and function name and denoted by => is known as arrow function
// //syntax of arrow function:
// var x=()=>"syntax"
// console.log(x())

//  //2.Basic conersion
// var add=(a,b)=>a+b
// console.log(add(2,3))

// //3.Implicit return
// var square=(n)=>n*n
// console.log(square(3))

// //4. single parameter syntax
// var functionname=a=>a*a

// //5.concise body vas block body:
// //Implicit Return/concise
// var cube=a=>a**3
// console.log(cube(2))
// //explicit Return/block
// var cude=a=>{
//     return a**3
// }
// console.log(cube(2))

// //6.Multiple parameters and parentheses:
// var arrow=(x,y)=>x-y
// console.log(arrow(5,3))


//7.No parameters Arrow function:
// var hello=()=>"Hello, World !"
// console.log(hello())



// var res=(a,b)=>{
//     return (a+b)
// }
// console.log(res(3,4))
// funone=(a,b)=>{return(a+b),(a-b)};
// console.log(funone(3,4))

// function runProcess(callback) {
//     callback();
//     console.log("Running...");
// }
// runProcess(() => console.log("Started"));
// runProcess(() => console.log("In Progress"));

// function funcA(callback1, callback2) {
//     callback1();
//     console.log("A1");
//     callback2();
//     console.log("A2");
// }

// function funcB(callback) {
//     console.log("B1");
//     callback();
//     console.log("B2");
// }

// funcA(() => funcB(() => console.log("Inside B")), () => console.log("End of A"));
// function outerFunc(callback) {
//     console.log("Outer Start");
//     callback();
//     console.log("Outer End");
// }

// function innerFunc(callback) {
//     console.log("Inner Start");
//     callback();
//     console.log("Inner End");
// }

// outerFunc(() => innerFunc(() => console.log("Innermost")));
// function action1(callback1, callback2) {
//     callback1();
//     console.log("Action 1");
//     callback2();
// }

// function action2() {
//     console.log("Action 2");
// }

// function action3(callback) {
//     callback();
//     console.log("Action 3");
// }

// action1(() => action3(() => console.log("Start")), action2);
// function first(callback) {
//     console.log("First");
//     callback();
// }

// function second(callback) {
//     console.log("Second");
//     callback();
// }

// function third() {
//     console.log("Third");
// }

// first(() => second(third));
// function main(callback1, callback2, callback3) {
//     console.log("Main Start");
//     callback1(() => {
//         console.log("Main Mid");
//         callback2(() => {
//             console.log("Main End");
//             callback3();
//         });
//     });
// }

// function sub1(callback) {
//     console.log("Sub1 Start");
//     callback();
//     console.log("Sub1 End");
// }

// function sub2() {
//     console.log("Sub2 Start");
//     console.log("Sub2 End");
// }
// main((cb) => sub1(cb), (cb) => sub1(cb), sub2);

// function gh(a,b){
//     console.log(a+b)
// }
// gh(2,3)

// var gh=function(a,b){
//     console.log(a+b)
// }
// gh(2,3)

// var gh=(a,b)=>a+b
// console.log(gh(2,3))

//callback hell

// function add(v1, callback) {
//     var result = v1 + 2
//     callback(result, true)
// }
// var sub = function (v2, callback1) {
//     var result = v2 - 5
//     callback1(result, true)
// }
// var mul = (v3, callback) => {
//     var result = v3 * 4
//     callback(result, true)
// }
// add(2, (sum, status) => {
//     console.log(sum);
//     if (status == true) {
//         sub(sum, (sub, status) => {
//             console.log(sub);
//             if (status == true) {
//                 mul(sub, (mul, status) => {
//                     if (status == true) {
//                         console.log(mul);
//                     }
//                     else {
//                         console.log("mult is failed")
//                     }
//                 })
//             }
//             else {
//                 console.log("sub is failed")
//             }
//         })
//     }
//     else {
//         console.log("addition is failed")
//     }
// })






//if (condition){
// statements
//}
// else{
// statement
//}

// var a=(sum,s)=>console.log(sum)
// a(2,876)

function a (num1,num2,callback){
    var x = callback(num1,num2);
    return x
}
console.log (a(2,4,(num1,num2) => {
    return num1 * num2
}))


