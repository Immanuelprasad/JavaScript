function Car(make, model, year, colour)
{
    this.make = make;
    this.model = model;
    this.year = year;
    this.colour = colour;
    this.drive = function(){console.log(`You drive the ${this.make} ${this.model}`)};
}

const car1 = new Car("Benz", "S-Class", 2024, "Black");
const car2 = new Car("BMW", "7 Series", 2024, "White");
const car3 = new Car("Audi", "A8", 2024, "Grey");
const car4 = new Car("Rolls Royce", "Phanthom", 2024, "Dark Purple");