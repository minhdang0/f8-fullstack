function PersonA (name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;

    this.getInfo = () => {
        console.log(`name: ${name}, address: ${address}`);
        return 2;
    }
}

class PersonB {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;

        this.getInfo = () => {
            console.log(`name: ${name}, address: ${address}`);
        };
    }
}

PersonA.prototype.sayHello = function () {
    console.log(`Hello ${this.name} den tu ${this.address}`)
}


const student1 = new PersonA("Dung", 20, "Ca Mau");
student1.sayHello();

/**
 * String -> string
 * Number -> Number
 * Boolean -> boolean
 * Date -> datetime 
 * Regex -> regex
 * Array -> array
 * Object -> object
 */

//Wrapper object

let myStr = new String("F8- Hoc lap trinh de di lam");

console.log(typeof myStr);
console.log(myStr.valueOf());
console.log(typeof myStr.valueOf());

// khong nen dung ham khoi taoj cho cac gia tri primitive type neu ko can thiet