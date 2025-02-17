const userInfo = {
    username: "hoangnm",
}
const obj = {
    address:"Bac Gianf"
}
const userInfoCopy = {...userInfo,password:"123",...obj};
console.log(userInfo);
console.log(userInfoCopy);
console.log(userInfo === userInfoCopy);
// cop object voiws spread operator
//Spread operater dùng để trải dữ liệu từ object, array ra một vùng khai báo mới

/**
 *Destructuring 
 *Khái báo biến mới dựa trên key của object
 *Nếu ko tồn tại key value nhận được à underfine
 */

 const {username,...other} = userInfoCopy ;

 console.log(username);
 console.log(other);
 /**
  * rest operator
  * - Là phần còn lại của một khai báo có thể xuất hiện cùng destructuring hoặc  agr của hàm
  * - Nó chỉ xuất hiện ở cuối các khai báo, dùng khi gom dữ liệu vào 1 biến
  */
