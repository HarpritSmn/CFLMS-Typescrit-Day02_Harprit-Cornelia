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
		return this.kilometersLeft*this.numberOfSeats / this.year  * this.doors
	}
}

class truck extends vehicle {
	volume;

	constructor(brand,name,year,performanceModel,kilometersLeft,fuelType,numberOfSeats,volume){
		super(brand,name,year,performanceModel,kilometersLeft,fuelType,numberOfSeats);
		this.volume = volume;
	}

	calcTruck():number{
		return this.volume/ this.year
	}

}

function getData() {
	var button = this.getAttribute('id');
	if(button == 'carSubmit' ){
		let millage :number = parseInt((<HTMLInputElement>document.getElementById("CarKm")).value);
		let seats:number = parseInt((<HTMLInputElement>document.getElementById("CarSeats")).value);
		let year :number = parseInt((<HTMLInputElement>document.getElementById("CarYear")).value);
		let doors :number = parseInt((<HTMLInputElement>document.getElementById("CarDoor")).value);

		var car = new motor('ford','name',year,'150',millage,'diesel',seats,doors,'Limousine');

		 let calcResult = car.calcMotor().toFixed(1);

		var jumbotron = document.getElementsByClassName('jumbotron')[0];
		var result = document.createElement('h1');
		result.innerHTML=`Your car is worth ${calcResult} $`;
		var form = document.getElementById('formCar');
		form.style.display='none';
		jumbotron.append(result);
		console.log(result)

	}else{
		let millage :number = parseInt((<HTMLInputElement>document.getElementById("truckKm")).value);
		let seats:number = parseInt((<HTMLInputElement>document.getElementById("truckSeats")).value);
		let year :number = parseInt((<HTMLInputElement>document.getElementById("truckYear")).value);
		let volumen :number = parseInt((<HTMLInputElement>document.getElementById("truckVolume")).value);

		var truck = new truck('man','name',year,200,millage,'diesel',seats,volumen);

		 let calcResult = truck.calcTruck().toFixed(1);

		var jumbotron = document.getElementsByClassName('jumbotron')[0];
		var result = document.createElement('h1');
		result.innerHTML=`Your car is worth ${calcResult} $`;

		var form = document.getElementById('formTruck');
		form.style.display='none';

		jumbotron.append(result);
		console.log(result)
	}


}

var submitButtons :any = document.getElementsByClassName('submit');

for (var button of submitButtons){
	button.addEventListener('click', getData)
}




