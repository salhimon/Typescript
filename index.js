var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
var mavoiture = new Car("Toyota", "Corolla", 2020);
console.log("Make: ".concat(mavoiture.make, ", Model: ").concat(mavoiture.model, ", Year: ").concat(mavoiture.year));
mavoiture.start();
