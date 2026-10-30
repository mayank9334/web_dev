const myArray = [ 10, 20, 30, 40, 50]

// 1.map

/*const result = myArray.map((data)=> {
    return data +6;
})

console.log(result);
*/

const result = myArray.map((data) => data +6) //map atleast iterate all elements for once

console.log("map : " , result);

// 2. filter

// const filterNewArr = myArray.filter((data) => data<40) ;

// console.log("filter :" , filterNewArr); //used to filter specific conditions
//can use for loop to iterate over all elements but filter is a method

const filterNew = myArray.filter((data) => {//another basic way to write same thing
    if(data<50){
        return data;
    }
})

console.log("2. filter :" , filterNew);

// 3. find

const findArr = myArray.find((data) => data<30)

console.log("3. find : " , findArr);

const reduceArr = myArray.reduce( (accumulatorValue, currentValue ) =>{
         return accumulatorValue + currentValue ;
  
},0)

console.log(" 4. reduce, sum of all array elements :" , reduceArr) ;

const cartItems = 
[

  { name : "laptop",
    price : 400,
    quantity : 2
  },

  { name : "water bottle",
    price : 30,
    quantity : 4
  },

 { name : "table",
   price : 100 ,
   quantity : 1 
 }
]

const totalPrice = cartItems.reduce( (accValue , currValue) =>
  { return accValue + currValue.price * currValue.quantity ;
    },0 )

console.log( totalPrice ) ;

//reduce syntax :
/* it reduces the array to one value.
chahe add ya multiply ya koi operation krke saare
elements ki 1 value deta hai.

syntax : array.reduce( callback() , 0 ) 

here 0 is accumulator value or start value.

*/