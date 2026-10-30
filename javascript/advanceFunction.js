//calback function

/*const calculate = (a, b, operation) => {
  return operation(a, b); // here operation is a callback function
}

const summation = calculate(5, 10,(x, y)=>{

    return x + y;
});

console.log(summation); 

const subtraction = calculate(25, 10,function(x, y){

    return x - y;
});
console.log(subtraction);

const multiplication = calculate(3, 10, function operation(x, y){

    return x * y;
});

console.log(multiplication);

const multiply = (a, b) => a * b; //beauty of arrow function.(must be used when we have only one line of code in the function body)

console.log(multiply(40, 10)); 
*/

const arr = [ 10, 20, 30, 40 , -39, -20, -20, -10, 0, 100];

// const printFirstNegativeNumber = (arr) => arr.find((num) => num < 0);
// console.log(printFirstNegativeNumber(arr));

// const printFirstNegativeNumber = (num) => num < 0
// const result = arr.find(printFirstNegativeNumber); //array.find() method returns the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
// console.log(result);

const printFirstNegativeNumber = (num) => {
    if (num < 0) {
        return num;
    }
}

// const result = arr.find(printFirstNegativeNumber); //array.find() method returns the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
// console.log(result);

arr.forEach( (num, index) => { //array.forEach() method executes a provided function once for each array element.
    console.log(`Element at index ${index}: ${num}`);
});