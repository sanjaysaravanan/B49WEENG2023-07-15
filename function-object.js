// OOP - Object Oriented Programming

// everything is considered as object in programming

// Movie Ticket Booking Application

// what is the object we are operating on ----> Movies/Cinema
// what does movie can contain, 
// title, description, cast, crew, Category

// Movie Ticket - Custom Created Object
// Slot-Time, Seat No, Screen No, Date, Movie name, Price


// Bus/Train Ticket Booking Application
// what is the object we are operating on ----> Bus/Train

// Bus/Train can contain
// name, seat-type, type ( ac / non-ac ), driver, conductor, no of seats

// Train/Bus Ticket - Custom Created Object
// PNR, Departure-Time, Seat No, Price, Source, Destination, Arrival Time


// Creating Objects using function keyword

// this --> keyword gives reference to access/initialize properties

function Car() {
  this.name = "BMW";
  this.color = "white";
  this.year = 2019;
  this.startEngine = function () {
    console.log(this.name, 'started !!!');
  }
}

const BMW = new Car; // Constructor or Instantiator
// new keyword is used to contruct or instantiate the object called car

// creating object reference of Car
// We are creating/Constructing a new Car

BMW.startEngine();

console.log(BMW);


// Only a function declaration with function key can be instantiated/constructed



// Arrow functions cannot be used for instantiation/constructing an object
const Bike = () => {

}

const yamaha = new Bike();

console.log(yamaha);

// Template creating a new Movie
function Movie(name, year, rating, genre, director, plot) {
  this.name = name;
  this.year = year;
  this.rating = rating;
  this.genre = genre;
  this.director = director;
  this.plot = plot;
}

const theMatrix = new Movie('The Matrix', '1999', '9', 'Action', 'John Cena', 'Sci-Fi');

console.log(theMatrix);

// Template for Vehicle
function Vehicle(type, name, wheels, maxSpeed) {
  this.type = type;
  this.name = name;
  this.wheels = wheels;
  this.maxSpeed = maxSpeed;
}

// applyBreak, accelerate, horn, headlight

Vehicle.prototype.applyBreak = function () {
  console.log(this.name, 'is breaking');
}

Vehicle.prototype.accelerate = function () {
  console.log(this.name, 'is accelerating');
}

const Lorry = new Vehicle('heavy', 'Swaraja Mastah', 6, '150kmph');

console.log(Lorry);