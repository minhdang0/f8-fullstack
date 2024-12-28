const myStudents = ["Do", "Duc Anh", "Trung", "Phong"];
// console.log(myStudents.slice(2));
// console.log(myStudents.slice(2,3));
// console.log(myStudents.slice(1,-1));
// console.log(myStudents.slice(1,-5));

//splice

// const result1 = myStudents.splice(1,2);
// console.log(result1);
// console.log(myStudents);
// const myClass = ["Lap trinh", "Kinh te", "Chinh tri", "Tieng Anh"];
// myClass.splice(2,1,"Tieng Phap","MC");
// console.log(myClass);

/**
 * slice
 * arr.slice(start, end)
 * - Phương thức tạo ra một mảng mới cắt từ mảng cũ
 * - Không thay đổi mảng cũ
 * - Nhập chỉ số âm, index = -1 tưng tự với phần tử cuối cùng của mảng
 */

/**
 * splice
 * - arr.splice(start, delete count, item1...,itemn)
 * - Thay đổi mảnh gốc
 * - Start nhận chỉ số âm
 * - delete count nhận các giá trị nguyên dương hoặc 0
 *  item1,...,itemN là các phần tử đươc thêm vào mảng từ vị trí start
 */

const myArr = ["Hoang", 0, null, "F8", "Hoc lap trinh", 100, undefined];

let newArr =[]

// for(let i = 0 ; i<myArr.length;i++){
//     if(myArr[i]){
//        newArr.push(myArr[i])
//     }
// }

// console.log(newArr);

// // // cach2

// const newArr2 = [];
// for(let i =0; i<myArr.length;i++){
//     if(!myArr[i]){
//         myArr.splice(i,1)
//         console.log(myArr);
//         i--;
//     }
// }

// 
const numberArr = [1, 2, 3, 600, 43643, 100, 5000, 798];

const result2 = numberArr.find((item) => item >100);

console.log(result2);

console.log(numberArr);

const result3 = numberArr.findLast((item) => item>10);
console.log(result3);

const result4 = numberArr.findIndex((item) => item>10);
console.log(result4);



