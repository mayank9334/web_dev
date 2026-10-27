/*it is study about function in javascript

function in javascript is mainly of three types
1. named function
2. anonymous function
3. arrow function

some topics that we will cover in this study are:
 1. nested function
 2. function hoisting


named fuction is a the function which is generally used in javascript and it has a name which is used to call the function.
*/

//1. named function

/*syntax of named function 

function myNamedFunction() {
    console.log("this is a named function");
}
    */

//2. anonymous function

/*syntax of anonymous function
let myAnonymousFunction = function() {
    console.log("this is an anonymous function");
};
    */

//3. arrow function

/*syntax of arrow function
let myArrowFunction = () => {
    console.log("this is an arrow function");
};
    */

//nested function

/*syntax of nested function
function outerFunction() {
    console.log("this is the outer function");
    
    function innerFunction() {
        console.log("this is the inner function");
    }
    
    innerFunction();
}
    */

//function hoisting

/*syntax of function hoisting

hoistedFunction(); //function call before the function declaration is possible because of function hoisting.

function hoistedFunction() {
    console.log("this is a hoisted function");
}
*/
