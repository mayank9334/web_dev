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