// Lexical Scoping 

function init() {
  var name = "Pranshu"; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function    
  }
  displayName();    
}
init();

// displayName() has no local variables of its own, 
// however it has access to the variables of outer functions and so can use the variable name declared in the parent function.

// This is an example of lexical scoping: in JavaScript, the scope of a variable is defined 
// by its location within the source code (it is apparent lexically) and nested functions 
// have access to variables declared in their outer scope.
