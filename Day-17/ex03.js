function sum (a, b) {
    console.log( a  + b )
    return a + b;
}

//NaN not a Number
sum(3,2);

let result = sum(27,33);
console.log(result)

const PI =3.14;

function preRetangle (w, h ) {
    return 2 * (w + h) ;
}
function acrRetangle (w, h) {
    return w * h;
}
function preCircle (r ){
    return  PI * (r**2);
}
let chuviHCN = preRetangle (4, 2);
let dientichHCN = acrRetangle(4,2);
let dientichHT =preCircle (2);

console.log("Chu vi hình chữ nhật: ",chuviHCN);
console.log("Diện tích hình chữ nhật: ",dientichHCN);
console.log("Diện tích hình tròn: ",dientichHT);

// confirm
// const confirmValue = window.confirm("Lam vk anh nhe!");
// console.log(result2)

// const promptValue = window.prompt("Bạn tên gì?");

const a = +window.prompt("Moi nhap a");
const b = +window.prompt("Moi nhap b");

 window.alert("Chu vi hinh chu nhat la: " + preRetangle(a, b))
