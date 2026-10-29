//calback function

const calculate = (a, b, operation) => {
  return operation(a, b); // here operation is a callback function
}

const summation = calculate(5, 10,(x, y)=>{

    return x + y;
});

console.log(summation); 

const subtraction = calculate(5, 10,function(x, y){

    return x - y;
});
console.log(subtraction);

const multiplication = calculate(5, 10, function operation(x, y){

    return x * y;
});

console.log(multiplication);