const obj01 = {
    email : "hoang@gmail.com",
    password : "123456",
    address : "HN",
    age : undefined,
    greet () {
        console.log("Xin Chao");
    },
}

let myJson = JSON.stringify(obj01);
console.log(myJson); 
console.log(JSON.parse(myJson));

const arr1 = [1,2,3,4,5];
console.log(JSON.stringify(arr1));
console.log(JSON.parse(JSON.stringify(arr1)));
console.log(JSON.stringify(null));
console.log(JSON.stringify(NaN));
console.log(JSON.stringify(true));
console.log(JSON.stringify(function(a,b) {
    return a + b;
}));

export const a = 10;
export const info = {
    name: "Nhat Minh"
}
export const products = [
    {"id":1, "title": "Product A", "price": 200},
    {"id":2, "title": "Product B", "price": 300},
    {"id":3, "title": "Product C", "price": 400}
];

function sum (a, b) {
    return a + b;
}

export {sum};
export default sum;