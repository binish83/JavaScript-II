// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


// function getLength(arr, cb) {}
  // getLength passes the length of the array into the callback.
  const getLength = (arr, cb) => {
    cb(arr.length);
  };
  getLength(items,length =>{
    console.log(`The length of the array is ${length}.`);
  });

// function last(arr, cb) {}
  // last passes the last item of the array into the callback.
  const last =(arr,cb) => {
    cb(arr[3]);
  };
  last(items,lastItem =>{
    console.log(`The last item is ${lastItem}.`);
  });

//function sumNums(x, y, cb) {}
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const sumNums = (x,y,cb) => {
    cb(x+y);
  };
  sumNums(8, 20, sum =>{
    console.log(`The sum is ${sum}`)
  });

//function multiplyNums(x, y, cb) {}
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const multiplyNums = (x,y,cb) => {
    cb(x*y);
  }; 
  multiplyNums(8, 20, multiply =>{
    console.log(`The product is ${multiply}`)
  });

//function contains(item, list, cb) {}
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  const contains = (item, list, cb) {
    for (let i=0; i<arr.length; i++){
      if(arr[i] === list) {
        return true;
      } else{
        return false;
      };
    }//for loop
  }//contains function

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
