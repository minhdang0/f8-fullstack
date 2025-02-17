const size = "XL";
const description ="Mo ta"
const price = 200;
const title ="Áo thun nỉ nam"
// const product = {
//     title:"Áo khoác ni nam",
//     price: 200,
//     description:"Mô tả chi tiết...",
//     size
// }
const product = {title, price, description, size, color: null,};

let myJson = JSON.stringify(product);
console.log(myJson)
let myObj = JSON.parse(myJson);
console.log(myObj);

// copy với JSon
//Đây là copy ko tối ưu vì ko copy đc phương thức
/**
 * Deep copy,shallơ copy, các cách cipy và ưu nhược điểm
 */
const productCopy = JSON.parse(JSON.stringify(product));