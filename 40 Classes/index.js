class Products
{
    constructor(name, price)
    {
        this.name = name;
        this.price = price;
    }
    displayProduct()
    {
        console.log(`Product: ${this.name}`);
        console.log(`price: ${this.price}`);
    }
    calculateTotal(salesTax)
    {
        return this.price + (this.price * salesTax);
    }
}

const product1 = new Products("Shirt", 2999);
product1.displayProduct();
console.log("-----------------------------------------------");

const product2 = new Products("Pants", 4999);
product2.displayProduct();
console.log("-----------------------------------------------");

const salesTax = 0.05;
const total = product1.calculateTotal(salesTax);
console.log(`Total Price ${total}`);
console.log("-----------------------------------------------");