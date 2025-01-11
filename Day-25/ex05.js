const person = Object.create(Object.prototype, {
    name : {value:"Hoang", writable: true, enumerable: true, configurable: true},
    age : { value: 30 , writable: false, enumerable: true, configurable: true},
    address : {value:"BG"}
});
console.log(person);
console.log(person.name);
person.name = "Mike";
console.log(person.name);

console.log(person.age);
person.age = 29; 
console.log(person.age);// Khong thay doi dc do writable = false

person.address = "HN";
console.log(person.address);

for (const key in person) {
    console.log(key);
}

/**
 * Khi không thêm các đặc tính tùy chinh thì
 * writable : Có thể ghi đè default = false
 * enumerable : Xuất hiện trong for in loop (default : false)
 * configurable: Có thể thiết lập lại hai thuộc tính phía trên (default false)
 */