/*promises are for overcoming the problem of callback hell,
here we'll see how it overcomes hell problems.

promises(an object in js) has three conditions -
  1. success (resolved)
  2. failure (rejected)
  3. still processing (pending)

promise methods :
 (1) resolve ko .then() handle krta hai
 (2) reject ko ya error ko .catch() handle krta hai
 (3) .finally() success or failure ko dhyan diye bina exacute ho jata hai.

when storing promise in a variable , can simply written as 
 new Promise((resolve, reject)=> {// function code here})

but when promise has to use in function :
 return new Promise ((resolve, reject)=> {// function code here})

//why return here , it immediately return promise object.

A simple example here :
program:

Promise.resolve(10)

    .then((value) => {
        console.log(value);
        return value * 2;
    })

    .then((value) => {
        console.log(value);
        return value + 5;
    })

    .then((value) => {
        console.log(value);
    });

The key concept:
 >Every .then() returns a new Promise.
 >If you return a normal value from .then(), the next .then() receives that value.
 >This is called Promise chaining.
 >promise initially pending state me hota hai.

*/

// const ticket = new Promise ( function (resolve , reject){
//    const isresponded = true;

//    if (isresponded){
//     resolve ("you are eligible for the ticket");}
//    else{ reject ("you are not eligible for the ticket");}
// } )

// ticket.then((data) => {
//     console.log("wow !" , data);

// }).catch((data)=> {
//     console.log("oh no! " , data);
// }).finally(()=> {
//     console.log("it will always exacute.")
// })

/* but we have told that promises will solve the problem of callback hell 
here we'll see how it does...
*/

function getCandies() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
    const candies = "lamchus";
    resolve(candies);
    //return candies;
  }, 3000);

    })
}

function getKeys(candies) {
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
    const keys = "Lo chabi " +candies;
    // resolve(keys);
    reject("can't exacute it.")
  }, 2000);
    })
  
}
  
function mostWelcome(keys) {
    return new Promise( (resolve, reject) =>{
        setTimeout(() => {
    const welcomed = keys + " & roses.";
    resolve(welcomed);
  }, 2000);
    })

}

/*
// .then ki chain se bachne ke liye , async await ka use krte hn.

getCandies()
    .then( (candies)=>{
    console.log("these are your candies :", candies);
    return getKeys(candies)

   }).then( (keys)=>{
    console.log("here is your keys :", keys);
    return mostWelcome(keys)

   }).then( (welcomed)=>{
    console.log("your most welcome :", welcomed);
   
   }).catch((error)=>{ //see the catch syntax, interesting one.
    console.log("error occured :", error);
   })

*/


//async & await

// async function hotalManagement () {
//     const candy = await getCandies();
//     console.log("these are your candies :", candy);

//     const keys = await getKeys(candy);
//     console.log("here is your keys :", keys);

//     const welcomed = await mostWelcome(keys);
//     console.log("your most welcome :", welcomed);
// }

// hotalManagement ();

//if you have used any reject method then it will show an error
//so do not use if there is no error or rejection.
// windows + . used for getting emojis.

//handling errors also in async & await.

//use try and catch block.

async function hotalManagement () {

    try{
        const candy = await getCandies();
        console.log("these are your candies :", candy);

        const keys = await getKeys(candy);
        console.log("here is your keys :", keys);

        const welcomed = await mostWelcome(keys);
        console.log("your most welcome :", welcomed);
    }

    catch(error){ //takes error parameter from reject() method block.
        console.log("error occured :", error);
    }
}

hotalManagement ();

// so must try & catch block for handling error massages if used reject method in any of function or 
// it is good practice to add try and catch() block to every async and await function.