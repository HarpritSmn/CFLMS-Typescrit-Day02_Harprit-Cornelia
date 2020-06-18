var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var vehicle = /** @class */ (function () {
    function vehicle(brand, name, year, performanceModel, kilometersLeft, fuelType, numberOfSeats) {
        this.brand = brand;
        this.name = name;
        this.year = year;
        this.performanceModel = performanceModel;
        this.kilometersLeft = kilometersLeft;
        this.fuelType = fuelType;
        this.numberOfSeats = numberOfSeats;
    }
    return vehicle;
}());
var motor = /** @class */ (function (_super) {
    __extends(motor, _super);
    function motor(brand, name, year, performanceModel, kilometersLeft, fuelType, numberOfSeats, doors, type) {
        var _this = _super.call(this, brand, name, year, performanceModel, kilometersLeft, fuelType, numberOfSeats) || this;
        _this.doors = doors;
        _this.type = type;
        return _this;
    }
    motor.prototype.calcMotor = function () {
        return this.kilometersLeft * this.numberOfSeats / this.year * this.doors;
    };
    return motor;
}(vehicle));
var truck = /** @class */ (function (_super) {
    __extends(truck, _super);
    function truck(brand, name, year, performanceModel, kilometersLeft, fuelType, numberOfSeats, volume) {
        var _this = _super.call(this, brand, name, year, performanceModel, kilometersLeft, fuelType, numberOfSeats) || this;
        _this.volume = volume;
        return _this;
    }
    truck.prototype.calcTruck = function () {
        return this.volume / this.year;
    };
    return truck;
}(vehicle));
function getData() {
    var button = this.getAttribute('id');
    if (button == 'carSubmit') {
        var millage = parseInt(document.getElementById("CarKm").value);
        var seats = parseInt(document.getElementById("CarSeats").value);
        var year = parseInt(document.getElementById("CarYear").value);
        var doors = parseInt(document.getElementById("CarDoor").value);
        var car = new motor('ford', 'name', year, '150', millage, 'diesel', seats, doors, 'Limousine');
        var calcResult = car.calcMotor().toFixed(1);
        var jumbotron = document.getElementsByClassName('jumbotron')[0];
        var result = document.createElement('h1');
        result.innerHTML = "your car is worth " + calcResult + " $";
        var form = document.getElementById('formCar');
        form.style.display = 'none';
        jumbotron.append(result);
        console.log(result);
    }
    else {
        var millage = parseInt(document.getElementById("truckKm").value);
        var seats = parseInt(document.getElementById("truckSeats").value);
        var year = parseInt(document.getElementById("truckYear").value);
        var volumen = parseInt(document.getElementById("truckVolume").value);
        var truck = new truck('man', 'name', year, 200, millage, 'diesel', seats, volumen);
        var calcResult = truck.calcTruck().toFixed(1);
        var jumbotron = document.getElementsByClassName('jumbotron')[0];
        var result = document.createElement('h1');
        result.innerHTML = "your car is worth " + calcResult + " $";
        var form = document.getElementById('formTruck');
        form.style.display = 'none';
        jumbotron.append(result);
        console.log(result);
    }
}
var submitButtons = document.getElementsByClassName('submit');
for (var _i = 0, submitButtons_1 = submitButtons; _i < submitButtons_1.length; _i++) {
    var button = submitButtons_1[_i];
    button.addEventListener('click', getData);
}
