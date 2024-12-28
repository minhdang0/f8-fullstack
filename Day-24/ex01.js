// const arr1 = [7, 23, 4, 10, 9 , 5, 100];
// arr1.sort((a,b) => a - b);
// console.log(arr1);                                                     

// const arr2 = ["Hoang", "Trung", "duc anh", undefined, "trung", "Minh", "huy", "zzz"];

// arr2.sort();
// console.log(arr2)

// const products = [
//     { id:1, title:"San pham A", price: 450, quantity: 2, discount: 0.1 },
//     { id:2, title:"San pham B", price: 200, quantity: 2, discount: 0.2 },
//     { id:3, title:"San pham E", price: 300, quantity: 2, discount: 0.3 },
//     { id:4, title:"San pham D", price: 400, quantity: 2, discount: 0.05},
// ]

// const sortProduct = (products, valueSelected = 0) => {
//     switch(valueSelected) {
//         case 0:
//             products.sort((a, b) => {
//                return a.title < b.title ? -1 : 1;
//             });
//             break;
//         case 1:
//             products.sort((a, b) => {
//                 return a.title > b.title ? -1 : 1;
//             });
//             break;
//         case 2:
//             products.sort((a,b) => a.price - b.price);
//             break;
//         case 3:
//             products.sort((a,b) => b.price - a.price);
//             break;
//         case 4:
//             products.sort((a,b) => b.discount - a.discount);
//             break;
//         default:
//             console.log("Loi du lieu")
//     }
//     console.table(products);
// }

// sortProduct(products,1);
// sortProduct(products,4);

// const students = [
//     { id: 1, fullname: "Nguyen Minh Hoang", age: 18},
//     { id: 2, fullname: "Nguyen Manh Huy", age: 10},
//     { id: 3, fullname: "Vu Huy Do", age: 21},
//     { id: 4, fullname: "Dang Nhat Minh", age: 22},
//     { id: 5, fullname: "Vu Huy Minh", age: 24},
//     { id: 6, fullname: "Nguyen Hoang Cong Minh", age: 24}
// ]

// const a = "Nguyen";

// students.sort((a,b) => {
//     const nameA= a.fullname.split(" ");
//     const nameB= b.fullname.split(" ");
    
//     let lastNameA = nameA[nameA.length-1]; // pop()
//     let lastNameB = nameB[nameB.length-1];// pop()
    
//     if (lastNameA === lastNameB) {
//         lastNameA = nameA.slice(0,nameA.length-1).join(" ");
//         lastNameB = nameB.slice(0,nameB.length-1).join(" ");
//     }
//     return lastNameA > lastNameB ? 1 : -1;
// });

// console.log(students)

const arr2 = [1,2,3,[2,2,4,6,[undefined,1,10]]];

console.log(arr2.flat(Infinity))