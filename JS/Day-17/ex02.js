let username = "Minh";
let email = "dangnhatminh84@gmail.com";
let age = 22;
let isMarried = false ; //Boolean

const userInfo = {
    username:username,
    age: 22 ,
    email: "dangnhatminh8402@gmail.com",
    isMarried: false
}
userInfo.age = 23;
userInfo.major  = "Development";
console.log(userInfo)
console.table(userInfo)

//Kieu du lieu
console.log(typeof username);
console.log(typeof age);
console.log(typeof userInfo);
console.log(typeof isMarried);

// Array
const studentsK11 = ["Đô", "Đức Anh", "Thắng", "Trung", "Phong", "Việt Anh"];
console.log(studentsK11.length);
console.log(typeof studentsK11);
console.log(Array.isArray(studentsK11));
console.log(studentsK11.at(2))
console.log(studentsK11[2])
studentsK11.pop();
console.log(studentsK11);




