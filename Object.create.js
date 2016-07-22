// Object.create Vs New 

// One important difference is that new actually runs constructor code, whereas Object.create will not execute code. 
// Object.create() is an excellent choice for creating an object without going through its constructor.


// new 

function SuperHuman (name, superPower) {
    this.name = name;
    this.superPower = superPower;
}

SuperHuman.prototype.usePower = function () {
    console.log(this.superPower + "!");
};

var banshee = new SuperHuman("Silver Banshee", "sonic wail");

// Outputs: "sonic wail!"
banshee.usePower();



// Object.create()

var superHuman = {
    usePower: function () {
        console.log(this.superPower + "!");
    }
};

var banshee = Object.create(superHuman, {
    name: { value: "Silver Banshee" },
    superPower: { value: "sonic wail" }
});

// Outputs: "sonic wail!"
banshee.usePower();





var superHero = Object.create(superHuman, {
    allegiance: { value: "Good" },
    saveTheDay: {
        value: function () {
            console.log(this.name + " saved the day!");
        }
    }
});

var marvel = Object.create(superHero, {
    name: { value: "Captain Marvel" },
    superPower: { value: "magic" }
});

// Outputs: "Captain Marvel saved the day!"
marvel.saveTheDay();

// Outputs: "magic!"
marvel.usePower();


// Outputs: true
console.log(superHero.isPrototypeOf(marvel));

// Outputs: true
console.log(superHuman.isPrototypeOf(marvel));