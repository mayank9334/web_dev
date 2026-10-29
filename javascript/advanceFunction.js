//calback function

const calculate = (a, b, operation) => {
  return operation(a, b);
}

const summation = calculate(5, 10, function(x, y){

    return x + y;
});

console.log(summation); 