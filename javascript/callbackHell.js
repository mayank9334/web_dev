//understanding settimeout method for asynchronous run

// syntax :

/* setTimeOut ( callback() , time in milliseconds ) */

function getCandies(callback1) {
  setTimeout(() => {
    const candies = "lamchus";
    console.log("these are your candies :", candies);
    callback1(candies);
    //return candies;
  }, 3000);
}

function getKeys(candies, callback2) {
  setTimeout(() => {
    const keys = "Lo chabi";
    candies;
    console.log("here is your keys :", keys);
    callback2(keys);
  }, 2000);
}

function mostWelcome(keys, callback3) {
  setTimeout(() => {
    const welcomed = keys + " & roses.";
    console.log("your most welcome :", welcomed);
    callback3(welcomed);
  }, 2000);
}

//console.log(getCandies());
getCandies((candies) => {
  getKeys(candies, (keys) => {
    //nested function

    mostWelcome(keys, (welcomed) => {
      //nested (callback hell essi liye bolte hn esse. function call stack dekho)
      console.log(
        "Hello bhaiya! most welcome. ye le :",
        welcomed,
        "&",
        candies,
      );
    });
  });
});

// must wait for 5000 milliseconds hahaha..
// settimeout is a function in js , write it as same.(error: i wrote setTimeOut, o was uppercase, creating an error.)
