// ES6 Object Class/Constructor creation of Object then instances
class Human{
    constructor(name, city, age){
    this.name = name;
    this.city = city;
    this.age = age;
    this.prompt = `Hola! My name is ${this.name}, I am ${this.age} years old and live in ${this.city}.`;
    }
    greeting(){
        console.log(`Hola! My name is ${this.name}, I am ${this.age} years old and live in ${this.city}.`);
    }
    addContent(){
        btn.addEventListener('click', ()=>{
        let content = document.createElement('p');
        content.textContent = this.prompt;
        display.appendChild(content);
    })
    }
}

let display = document.getElementById('display');
let btn = document.getElementById('button');
let human1 = new Human('Jeff', 'Opelika', '53');
let human2 = new Human('Susan', 'Opelika', '52');
let human3 = new Human('Mae', 'Foley', '27');
let human4 = new Human('Will', 'Opelika', '25');
let human5 = new Human('Ben', 'Birmingham', '22');
human1.greeting();
human1.addContent();
human2.greeting();
human2.addContent();
human3.greeting();
human3.addContent();
human4.greeting();
human4.addContent();
human5.greeting();
human5.addContent();


// Object Literal Declarations
// let person1 = {
//     name: 'Jeff',
//     sayHello(){console.log(`Hello! My name is ${this.name}!`)}
// }
// let person2 = {
//     name: 'Susan',
//     sayHello(){console.log(`Hello! My name is ${this.name}!`)}
// }
// let person3 = {
//     name: 'Mae',
//     sayHello(){console.log(`Hello! My name is ${this.name}!`)}
// }
// let person4 = {
//     name: 'Will',
//     sayHello(){console.log(`Hello! My name is ${this.name}!`)}
// }
// let person5 = {
//     name: 'Ben',
//     sayHello(){console.log(`Hello! My name is ${this.name}!`)}
// }

// person1.sayHello();
// person2.sayHello();
// person3.sayHello();
// person4.sayHello();
// person5.sayHello();

class Vehicle{
    constructor(manufacturer, wheels){
        this.manufacturer = manufacturer;
        this.wheels = wheels;
    }

    aboutVehicle(){
        console.log(`${this.type} by ${this.manufacturer} with ${this.wheels}`);
    }
}

class Truck extends Vehicle{
    constructor(manufacturer, wheels, doors, boolean){
        super(manufacturer, wheels);
        this.doors = doors;
        if(boolean){
            this.tBed = 'has a truck bed';
        }else{
            this.tBed = 'does not have a truck bed';
        }
    }
    aboutVehicle(){
        console.log(`Truck by ${this.manufacturer} with ${this.wheels} wheels and ${this.tBed}`);
    }
}

class Sedan extends Vehicle{
    constructor(manufacturer, wheels, size, mpg){
        super(manufacturer, wheels);
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle(){
        console.log(`${this.size} sedan by ${this.manufacturer} with ${this.wheels} wheels and ${this.mpg}mpg`);
    }
}

class Motorcycles extends Vehicle{
    constructor(manufacturer, wheels, booleanHandlebars, booleanDoors){
        super(manufacturer, wheels);
        this.booleanHandlebars = booleanHandlebars;
        this.booleanDoors = booleanDoors;
    }
    aboutVehicle(){
        console.log(`Motorcycle by ${this.manufacturer} with ${this.wheels} wheels`);
    }
}

let dash = new Sedan('Kia', 4, 'Small', 29);
let bigBird = new Truck('Ford', 4, 4, true);
let indian = new Motorcycles('Indian', 2, true, false);
dash.aboutVehicle();
bigBird.aboutVehicle();
indian.aboutVehicle()
