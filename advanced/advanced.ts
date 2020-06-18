class vehicle{
	brand;
	name;
	year;
	performanceModel;
	kilometersLeft;
	fuelType;
	numberOfSeats;

constructor(brand,name,year,performanceModel,kilometersLeft,fuelType,numberOfSeats) {
	this.brand = brand;
	this.name = name;
	this.year = year;
	this.performanceModel = performanceModel;
	this.kilometersLeft = kilometersLeft;
	this.fuelType = fuelType;
	this.numberOfSeats = numberOfSeats;
	}
}

class motor extends vehicle {
	doors;
	type;

	constructor(brand,name,year,performanceModel,kilometersLeft,fuelType,numberOfSeats,doors,type){
		super(brand,name,year,performanceModel,kilometersLeft,fuelType,numberOfSeats);
		this.doors =doors;
		this.type = type;
	}

	calcMotor():number{
		return super.kilometersLeft*super.numberOfSeats / super.year  * this.doors
	}
}

class truck extends vehicle {
	volume;

	constructor(brand,name,year,performanceModel,kilometersLeft,fuelType,numberOfSeats,volume){
		super(brand,name,year,performanceModel,kilometersLeft,fuelType,numberOfSeats);
		this.volume = volume;
	}

	calcTruck():number{
		return this.volume/ super.year
	}

}



