var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, jobTitle) {
        this.firstName = "";
        this.lastName = "";
        this.age = "";
        this.jobTitle = "";
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.introduction = function () {
        return "Hello there, My name is " + this.firstName + " " + this.lastName + " and I am " + this.age + " years old, and I am a " + this.jobTitle + " ";
    };
    return Person;
}());
