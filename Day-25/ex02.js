function PersonA (name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;

    this.getInfo = () => {
        console.log(`name: ${name}, address: ${address}`);
        return 2;
    }
}

const student1 = new PersonA("Hoanng", 25, "BG");
// console.log(Object.getPrototypeOf(student1));
const myObj = {title:"abc"};

function Cart (product, userId) {
    this.product = product;
    this.userId = userId;

    this.getTotal = function () {
        let totalPrice = 0;
        this.product.forEach( product => {
            totalPrice += product.quantity * product.price;
        });
        return totalPrice;
    }

    this.getTotal2 = function () {
        let totalPrice = this.product.reduce((acc, cur) => {
            acc += cur.quantity * cur.price;
            return acc;
        }, 0)
        return totalPrice;
    }
}

const product = [
    { id: 1, title: "tomato", quantity : 4, price: 1},
    { id: 2, title: "apple", quantity : 2, price: 2},
    { id: 3, title: "watermelon", quantity : 5, price: 4}
]

const newCustomer = new Cart (product, "123");

console.log(`Tong gia tien gio hang cua ban: ${newCustomer.getTotal()}$`);

console.log(newCustomer.getTotal2())