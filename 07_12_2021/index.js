function bike() {
    console.log(this.name);
}
var obj1 = {
    name: "Pulsar",
    bike: bike
};
var obj2 = {
    name: "Gixxer",
    bike: bike
};

obj1.bike(); // "Pulsar"
obj2.bike(); // "Gixxer"

/**
 * issues / errores / bugs
 * requeriment
 */

function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

// Usage:
var bmw = new Car('M4', '2019', '1000');
console.log(bmw.year);

var testModule = (function () {
    var counter = 0;
    return {
        incrementCounter: function () {
            return++ counter;
        },
        resetCounter: function () {
            counter = 0;
        }
    };
})();

// Usage:
console.log(testModule.incrementCounter());
console.log(testModule.incrementCounter());
console.log(testModule.incrementCounter());
console.log(testModule.incrementCounter());
testModule.resetCounter();
console.log(testModule.incrementCounter());
console.log(testModule.incrementCounter());

function Person(nombre, edad) {
    this.name = nombre;
    this.age = edad;
    this.hello = () => {
        console.log("hello!! " + this.name);
    };
    this.edad = () => {
        console.log("tengo: " + this.age);
    };
    this.getName = () => {
        return this.name
    };
    this.putName = (newName) => {
        this.name = newName;
    };
}

let diego = new Person("diego", 26);
diego.hello();
diego.edad();
console.log(diego.name);
console.log(diego.getName());
diego.putName("Martin");
console.log(diego.getName());

import fetch from "node-fetch";
//const fetch = require("node-fetch")

fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json));


/** usar chartjs en un proyecto simple con npm. */
