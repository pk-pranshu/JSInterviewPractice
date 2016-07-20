// A promise represents a value that is still being fetched or computed. 
// A promise object can answer questions about its state, like "has my data arrived yet?" or “were there any errors during the fetch?” 
// Once a promise object has its value fulfilled, it can alert other objects that its data has arrived and any dependent functions can be run.

// A promise can be:

// fulfilled - The action relating to the promise succeeded 
// rejected - The action relating to the promise failed 
// pending - Hasn't fulfilled or rejected yet 
// settled - Has fulfilled or rejected


var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});


// The promise constructor takes one argument, a callback with two parameters, resolve and reject. Do something within the callback, perhaps async, then call resolve if everything worked, otherwise call reject.

  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}

// Use it!
get('story.json').then(function(response) {
  console.log("Success!", response);
}, function(error) {
  console.error("Failed!", error);
});



// Promise.all
// Think about JavaScript loaders:  there are times when you trigger multiple async interactions but only want to respond when all of them are completed -- that's where Promise.all comes in.  The Promise.all method takes an array of promises and fires one callback once they are all resolved:

Promise.all([promise1, promise2]).then(function(results) {
	// Both promises resolved
})
.catch(function(error) {
	// One or more promises was rejected
});
An perfect way of thinking about Promise.all is firing off multiple AJAX (via fetch) requests at one time:

var request1 = fetch('/users.json');
var request2 = fetch('/articles.json');

Promise.all([request1, request2]).then(function(results) {
	// Both promises done!
});








promise1.then(function(value)
{
    promise2.then(function(value2)
    {
        promise3.then(function(value3)
        {
            doSomethingWithValues(value1, value2, value3);
        }
    }
});
This works because the fulfilled/rejected callbacks will fire immediately if they are attached after a Promise has been fulfilled or rejected. Therefore, even if promise3 is fulfilled first, its fulfillment callback will not execute until it has been attached, which does not happen until promise1 and promise2 have been fulfilled. The drawback to this approach is that the nested function expressions can be a bit confusing. With a bit of refactoring, we can eliminate the need for nested functions;

var value1, value2;

function handlePromise1Fulfillment(value)
{
    value1 = value;

    promise2.then(handlePromise2Fulfillment);
}

function handlePromise2Fulfillment(value)
{
    value2 = value;

    promise3.then(handlePromise3Fulfillment);
}

function handlePromise3Fulfillment(value)
{
    doSomethingWithValues(value1, value2, value);
}

promise1.then(handlePromise1Fulfillment);


