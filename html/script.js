function add (a, b) {
    //console.log(a + b);
    return a + b;
}


// console.log(add(33, 14));

// console.log(Math.max(33, 14));
// console.log(Math.ceil(33.01)); // ceiling means uper wala 
// console.log(Math.floor(33.01)); // floor means niche wala 

// console.log(Math.random()); // 0 to 1 ke bich me hi values deta hai

// console.log(Math.floor(Math.random())); 

/*
let result = Math.ceil(Math.random()) ;
while (result !== 1) {
    let result = Math.ceil(Math.random()) ; //1 included hota hai na esliye wo dekh rha tha ki kitne baar me aata hai 1
    console.log(result);
} 
    
i will try this later .
*/


/*
code for finding random number between 1 to 6
let min = 1;
let max = 6;
let result = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(result);
*/

/*
for (let i = 0; i < 3; i++) {
    let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    if (result === 6) {
        console.log("6 is found");
        break;
    }
    console.log("result is: " + result);
}

*/

/*
this code will run until we get 6 as a result.

let min = 2;
let max = 6;
let result = 2 ;
while (result !== 6) { 
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("result is :", result);
}

*/


/*
this is to see , can we get 6 in 6 tries or not

for (let i = 0; i < 6; i++) {
    let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    if (result === 6) {
        console.log("6 is found");
        break;
    }
    console.log("result is: " + result);
}

*/

