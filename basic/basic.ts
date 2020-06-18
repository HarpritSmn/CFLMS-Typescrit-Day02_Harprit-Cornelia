class Person {
    firstName = "";
    lastName = "";
    age = "";
    jobTitle = "";

    constructor(firstName, lastName, age, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.jobTitle = jobTitle;
    }

    introduction() {
        return `Hello there, My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old, and I am a ${this.jobTitle} `
    }


}

class Adult extends Person{
    salary ="";
    jobLocation = "";

    constructor(firstName, lastName, age, jobTitle, salary, jobLocation){
        super(firstName, lastName, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }

    extendedIntroduction(){
        return `${super.introduction()} and I get ${this.salary} every month, and i work in ${this.jobLocation}`
    }

}
