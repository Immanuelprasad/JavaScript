class Animal
{
    alive = true;
    eat()
    {
        console.log(`This ${this.name} is eating`);
    }
    sleep()
    {
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal
{
    name = "Rabbit";
    run()
    {
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal
{
    name = "Fish";
    swim()
    {
        console.log(`This ${this.name} is swimming`);
    }
}
class Hawk extends Animal
{
    name = "Hawk";
    fly()
    {
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit1 = new Rabbit();
const fish1 = new Fish();
const hawk1 = new Hawk();

rabbit1.eat();
rabbit1.run();

fish1.swim();
console.log(fish1.alive);

hawk1.fly();
hawk1.eat();