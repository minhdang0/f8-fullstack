console.log(typeof String(123));
console.log(String(null));
console.log(String({id:1, name:"Hoanng"}))
//Number
console.log( typeof Number(Infinity));
console.log(Number("123"));
console.log(Number(false));
console.log(Number(true));
console.log(Number(undefined));
console.log(typeof Number(undefined));

let a = 123;
let b = a.toString;
console.log(typeof b);
console.log([1,2,3] + [4,5,6])//1,2,34,5,6