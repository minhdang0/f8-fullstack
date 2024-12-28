let myNumber = 28;
myNumber = 30;
console.log(myNumber)

const myInfo = {
    email:"hoangnm@gmail.com",
}

const userInfo = {
    email:"hoangnm@gmail.com",
    password:"12345"
}

const userInfo2 = {
    password :"hoang123",
}

const newObj = Object.assign(userInfo,userInfo2);

/**Object assign
 *Gộp object 
 *Object.assign(target,source)
 * trùng thuốc tính sẽ ghi đè lấy ở source
 * Có thể gộp được nhiều hơn 2 object
 * Nếu muốn copy object thì cso thể assign với target object rỗng
 */ 
console.log(userInfo);
console.log(newObj);
console.log(userInfo === newObj);

// Cách copy object

const userInfoA = Object.assign({},userInfo);
console.log(userInfoA);
userInfoA.email = "minhdn@gmail.com";
console.log(userInfoA,userInfo);

/**
 * So sánh tuyệt đối === với reference type thì là đang so sánh giá trị và địa chỉ ô nhớ
 */
