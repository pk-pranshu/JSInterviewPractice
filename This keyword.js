// This keyword   ** Source - Sitepoint **
// this is a special identifier keyword—automatically defined in the scope of every function—pointing to the “owner” of the function being executed

// How is this Created?
// Each time a JavaScript function is invoked, a new object is created containing information about which parameters were passed, how the function was invoked, where the function was called from, and so on. 
//One of the main properties of that object is the this reference, which is automatically bound to the object of which the function is a method.

var car = {
	brand : "Nissan";
	getBrand : function(){
		console.log(this.brand);
	} 
}
car.getBrand(); // output: Nissan
//In this example this, used in this.brand, is a reference to the car object. So, this.brand is the same as car.brand

// Every line of JavaScript code is run in an execution context. 
// The object that this refers to is redefined every time a new execution context is entered and remains fixed until it’s shifted to a different context. 
// To find the execution context (and this binding) we need to find the call-site—the location in the code where a function is called from (not where it’s declared).

