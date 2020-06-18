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
        return _super.prototype.kilometersLeft * _super.prototype.numberOfSeats / _super.prototype.year * this.doors;
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
        return this.volume / _super.prototype.year;
    };
    return truck;
}(vehicle));
