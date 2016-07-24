More about this keyword :  *** Source Sitepoint***

Few common Mistakes :

1. Using this in Extracted Methods
//One of the most common mistakes that people make is when trying to assign an object’s method to a variable and expecting that this will still point to the original object.

var car = {
  brand: "Nissan",
  getBrand: function(){
    console.log(this.brand);
  }
};

var getCarBrand = car.getBrand;
getCarBrand();   // output: undefined

//reference to getBrand() itself. 
//We already know that the call-site is what matters in determining the context, and here, the call-site is getCarBrand(), which is a plain and simple function call.

alert(getCarBrand); // function(){
  					//console.log(this.brand);
					//}


correct way:-  var getCarBrand = car.getBrand.bind(car);
				getCarBrand();   // output: Nissan



2. this Used in Callbacks 

<button id="btn" type="button">Get the car's brand</button>

var car = {
  brand: "Nissan",
  getBrand: function(){
    console.log(this.brand);
  }
};

var el = document.getElementById("btn");
el.addEventListener("click", car.getBrand);


correct way :- el.addEventListener("click", car.getBrand.bind(car));



3. this Used Inside Closures

var car = {
  brand: "Nissan",
  getBrand: function(){
    var closure = function(){
      console.log(this.brand);
    };
    return closure();
  }
};

car.getBrand();   // output: undefined



Fix :

var car = {
  brand: "Nissan",
  getBrand: function(){
    var closure = function(){
      console.log(this.brand);
    }.bind(this);
    return closure();
  }
};

car.getBrand();   // output: Nissan

//or 

var car = {
  brand: "Nissan",
  getBrand: function(){
    var self = this;
    var closure = function(){
      console.log(self.brand);
    };
    return closure();
  }
};

car.getBrand();   // output: Nissan


var car = {
  brand: "Nissan",
  getBrand: function(){
    // the arrow function keeps the scope of "this" lexical
    var closure = () => {   
      console.log(this.brand);
    };
    return closure();
  }
};

car.getBrand();   // output: Nissan





this refers to the global object in the following cases:
	in the outermost context, outside of any function block
	in functions that are not methods of objects
	in functions that are not object constructors
When a function is called as a property on a parent object, this refers to the parent object.
When a function is called using call() or apply(), or bind(), this refers to the first argument passed to these methods. If the first argument is null or not an object, this refers to the global object.
When a function is called with the new operator, this refers to the newly created object.
When an arrow function (introduced in ECMAScript 6) is used, this relies on lexical scope and refers to the parent object.


