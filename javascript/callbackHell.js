//understanding settimeout method for asynchronous run

// syntax :

/* setTimeOut ( callback() , time in milliseconds ) */

function getCandies(callback1) {
  setTimeout(() => {
    const candies = "le beta lamchus";
    console.log("these are your candies :", candies);
    callback1( candies ) ;
    //return candies;
  }, 5000); 
}

//console.log(getCandies());
getCandies((candies) => {
  console.log("here is our candies :", candies);
});

// must wait for 5000 milliseconds hahaha..
// settimeout is a function in js , write it as same.(error: i wrote setTimeOut, o was uppercase, creating an error.)