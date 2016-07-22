 // Inheritance with JavaScript  
 //  **** Source SitePoint *****

var classA = function(){
	this.name="classA";
}

classA.prototype.print = function(){
	console.log(this.name);
}

var a = new classA();
a.print();

// Now let’s add a tool to create “inheritance” between classes. 
// This tool will just have to do one single thing: clone the prototype:

var inheritsFrom = function(child,parent){
	child.prototype = Object.create(parent.prototype);
}

// By cloning the prototype, we transfer all members and functions to the new class.


var classB = function(){
	this.name="classB";
	this.surname="I'm the child";
}

inheritsFrom(classB,classA);

// Then because ClassB inherited the print function from ClassA, the following code is working:

var b = new classB();
b.print(); // class B

// We can even override the print function for ClassB:

classB.prototype.print = function(){
  classA.prototype.print.call(this);
  console.log(this.surname); 
}


b.print();
// class B 
// I’m the child

//The trick here is to the call ClassA.prototype to get the base print function. 
// Then thanks to call function we can call the base function on the current object (this).

var classC = function(){
	this.name = "ClassC";
	this.surname = "I'm the GrandChild";
}

inheritsFrom(classB,classA);

classC.prototype.foo = function() {
    // Do some funky stuff here...
}

classC.prototype.print=function(){
	classB.prototype.print.call(this);
	console.log(this.surname);
	console.log("Sounds like this is working!");
}

var c = new classC();
c.print();

//class C 
// I’m the grandchild 
// Sounds like this is working!

