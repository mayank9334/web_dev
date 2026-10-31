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
    resolve(keys);
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

getCandies()
    .then( (candies)=>{
    console.log("these are your candies :", candies);
    return getKeys(candies)

}).then( (keys)=>{
    console.log("here is your keys :", keys);
    return mostWelcome(keys)

}).then( (welcomed)=>{
    console.log("your most welcome :", welcomed);
})