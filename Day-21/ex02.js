// const memberK11 = ["Đức Anh", "Việt Anh", "Minh", "Phong", "Thắng", "Trung", "Đăng", "Phong"];

// memberK11.unshift("ABC");
// console.log(memberK11[0]);

// /** 
//  * UNSHIFT :thêm phần tử vào đầu mảng
//  * 1.Có thay đổi mảng gốc
//  * 2. Trả vêf độ dài của mảng
//  * SHIFT : bớt phần tử vào đầu mảng
//  * 1.Có thay đổi mảng gốc
//  * 2. Trả về phần tử vùa bị xóa
//  */
    
// memberK11.unshift("X", "Y", {username: "F8"});
// console.log(memberK11);

// memberK11.shift();
// console.log(memberK11);

// const list = [1,2,3,4,5];
// console.log(list.shift());
// console.log(list);

// list.push("Hoàng");
// console.log(list);

// list.pop()
// console.log(list.pop());
// /**
//  * PUSH :thêm ptu vào cuối mảng
//  * 1.Có thay đổi mảng gốc
//  * 2. Trả vêf độ dài của mảng
//  * POP : Xóa phần tử cuối mảng
//  *  1.Có thay đổi mảng gốc
//  * 2. Trả về phần tử vừa bị xóa
//  */

// const user = [
//     {fullname: "Nguyen Van A", age : 20},
//     {fullname: "Nguyen Van B", age : 22},
//     {fullname: "Nguyen Van C", age : 21},
//     {fullname: "Nguyen Van D", age : 19},
//     {fullname: "Nguyen Van E", age : 19},
// ]

// const x = Math.ceil(user.length / 2);
// let y = user.length;

// for (let i = 0; i < x; i++) {
//     // console.log(user[i], user[y - 1]);   
//     let temp = user[i];
//     user[i] = user[y - 1];
//     user[y - 1] = temp;
//     console.log(user[i], user[y - 1]);  
//     y--;
// }
// console.log(user);

// const newUsers3 = [];
// for (let i = 0; i < user.length; i++) {
// if (user[i].age >= 20) {
// newUsers3.push(user[i]);
// }
// }
// console.log(newUsers3);

// // const usersGroupByAddress = {
// //     BacGiang: [{ fullname: "Nguyen Van B", age: 22, address: "BacGiang" }],
// //     LangSon: [
// //     { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
// //     { fullname: "Nguyen Van E", age: 32, address: "LangSon" },
// //     ],
// //     HaNoi: [
// //     { fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
// //     { fullname: "Nguyen Van D", age: 18, address: "HaNoi" },
// //     ],
// // };
const users = [
    { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
    { fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
    { fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
    { fullname: "Nguyen Van D", age: 18, address: "HaNoi" },
    { fullname: "Nguyen Van E", age: 32, address: "LangSon" },
    ];
const usersGroupByAddress  = {};
for(let i = 0 ; i< users.length ; i++ ){
    let temp = users[i].address;
    if (!usersGroupByAddress[temp]) {
        usersGroupByAddress[temp] = [];
    }
    usersGroupByAddress[temp].push(users[i]); 
}
console.log(usersGroupByAddress);

const userList = ["Hoang", "Dung", "Trung", "Trung",NaN];
const result = userList.indexOf("Dung");
console.log(result);

/**
 * IndexOf tìm kiếm và trả về index của phần tử  đầu tiên tìm thấy
 * 1. TÌm kiếm và trả về index của phần tử tìm thấy
 * 2. Nếu không tìm thấy trả về -1
 * 3. Strict equality: Không áp dụng vs giá trị NaN
 * 4. THam số thứ 2 (optional): Chỉ địm vị trí bắt đầu tìm
 * LastIndexOf 
 * 1. Tìm kiếm và trả về index của phần tử cuối cunhf tìm thấy
 * 
 * includes 
 * 1. Trả về giá trị boolean dựa vào kết quả tìm kiếm
 * 2. same-value-zero comparison algoritm 
*
 */
console.log(userList.indexOf(NaN));
console.log(userList.indexOf("Hoang",1));
console.log(userList.indexOf("Trung"));
console.log(userList.lastIndexOf("Trung"));
console.log(userList.includes("Dung"));
console.log(userList.includes("Hoa"));
console.log(userList.includes(NaN));
const myString = userList.join(" ");// default  nối với dấu phẩy
console.log(myString);
const newArray = myString.split(" ");
console.log(newArray);
const paragraph = "Lorem is sumpm color sit mit amet beautiful contact us about you ";
const words = paragraph.split(" ");
console.log(words);
console.log(words.reverse());

const lists = [1,2,3,4,5];
console.log(lists.toString());
/**
 * 
 */