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

var brand = 'Nissan';
var myCar = {brand: 'Honda'};

var getBrand = function() {
  console.log(this.brand);
};

myCar.getBrand = getBrand;
myCar.getBrand();
// output: Honda

getBrand();
// output: Nissan

//the value of this is different because it’s based on the context in which getBrand() is being called.



//There are three main variations: 

// 1.this Used in a Simple Function Call

function simpleCall(){
  console.log(this);
}

simpleCall();
// output: the Window object

//2. this Used in an Object’s Method

var message = {
  content: "I'm a JavaScript Ninja!",
  showContent: function() {
    console.log(this.content);
  }
};

message.showContent();   // output: I'm a JavaScript Ninja!

//Here, showContent() is a method of the message object, and thus this.content is equal to message.content.

// 3. this Used in Constructor Functions


//We can invoke a function via the new operator. In this case the function becomes a constructor—a factory for objects. 
//Unlike the simple function calls and method calls discussed above, a constructor call passes a brand new object as the value of this, and implicitly returns the new object as its result.
function Message(content){
  this.content = content;
  this.showContent = function(){
    console.log(this.content);
  };
}

var message = new Message("I'm JavaScript Ninja!");

message.showContent();
// output: I'm JavaScript Ninja!

// Two methods, which all functions have, are apply() and call(). 
// We can use these methods to change the context to whatever we need and thus, explicitly set the value of this.

//The apply() method takes two arguments: an object to set this to, and an (optional) array of arguments to pass to the function.

//The call() method works exactly the same as apply(), but we pass the arguments individually rather than in an array.

function warrior(speed, strength){
  console.log(
    "Warrior: " + this.kind +
    ", weapon: " + this.weapon +
    ", speed: " + speed +
    ", strength: " + strength
  );
}

var warrior1 = {
  kind: "ninja",
  weapon: "shuriken"
};

var warrior2 = {
  kind: "samurai",
  weapon: "katana"
};

warrior.call(warrior1, 9, 5);
// output: Warrior: ninja, weapon: shuriken, speed: 9, strength: 5
warrior.apply(warrior2, [6, 10]);
// output: Warrior: samurai, weapon: katana, speed: 6, strength: 10



// the bind() method, which also allows us to set which specific object will be bound to this when a function or method is invoked. 


function warrior(kind){
  console.log(
    "Warrior: " + kind +
    ". Favorite weapon: " + this.weapon +
    ". Main mission: " + this.mission
  );
}

var attributes = {
  weapon: "shuriken",
  mission: "espionage"
};

var ninja = warrior.bind(attributes, "ninja");

ninja();
// output: Warrior: ninja. Favorite weapon: shuriken. Main mission: espionage

//bind() method is used in similar way, but unlike the call() and apply() methods, warrior.bind() creates a new function (with the same body and scope as warrior()) rather than modifying the original warrior() function. 
//The new function behaves just like the old one, but with its receiver bound to the attributes object, while the old one remains unchanged.
































































