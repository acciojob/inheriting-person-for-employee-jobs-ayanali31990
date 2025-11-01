// Person class
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Employee class inheriting from Person
function Employee(name, age, jobTitle) {
  // call the parent constructor
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// inherit from Person prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// method for Employee
Employee.prototype.jobGreet = function () {
  console.log(
    `Hello, my name is ${this.name} and I am ${this.age} years old, and my job title is ${this.jobTitle}.`
  );
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
