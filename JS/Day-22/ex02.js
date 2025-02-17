const myCar = {
    brand:"Mitsubishi",
    name: "Xforce",
    color: "White",
    version : 2024,
}
for(let key in myCar) {
    console.log(`Gía trị của ${key}: ${myCar[key]}`);
}

//option chaining 
console.log(myCar?.price);
console.log(myCar.price ? myCar.price : "Khộng có muc này");

//Phương thức
//Tạo ra các mảng keys của object

console.log(Object.keys(myCar).length);
console.log(Object.values(myCar));
console.log(Object.entries(myCar));

const whiteList = {f8:"https://f8.fullstack.edu.vn" , gg:"google.com"};
Object.freeze(whiteList);
whiteList.f8 = "deepweb.com";
console.log(whiteList)
