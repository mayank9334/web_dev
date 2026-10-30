//understanding settimeout method for asynchronous run

// syntax :

/* setTimeOut ( callback() , time in milliseconds ) */

function getCandies(callback1) {
  setTimeout(() => {
    const candies = "lamchus";
    console.log("these are your candies :", candies);
    callback1(candies);
    //return candies;
  }, 5000);
}

function getKeys(candies, callback2) {
  setTimeout(() => {
    const keys = "Lo chabi" ; candies ;
    console.log("here is your keys :", keys);
    callback2(keys);
  }, 5000);
}


//console.log(getCandies());
getCandies((candies) => { 
  getKeys(candies, (keys) => { //nested function
    console.log("Hello bhaiya, ye le :", keys, "&", candies);
  });
});

// must wait for 5000 milliseconds hahaha..
// settimeout is a function in js , write it as same.(error: i wrote setTimeOut, o was uppercase, creating an error.)
