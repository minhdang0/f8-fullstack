const userInfo = {
    email:"dangnhatminh@gmail.com", 
    age :22, 
    username:"minhJS",
}
console.log(userInfo);
console.log(typeof userInfo);

//primitive data type
//object data type : function, array, object, null

//key có thể là string hoặc symbol
//value thì nhận bất cứ kiểu dữ liệu nào, khi value là functionthì ngta gọi đó là phương thức

const obj = new Object({
    userName: "minh",
    gender:"male",
    password:"minh123",
    fullname:"Đặng Nhật Minh",
    email:"dangnhantminh@gmail.com",
    learn: function (lesson, time) {
        console.log(`${this.fullname} học  ${lesson} luc ${time}`)
    }
});
//Khai báo với từ khóa new
console.log(typeof obj);
obj.learn("JS co ban", "9:00 am");
obj.avatar = "https://anhdaidien.jpg";
console.log(obj);
let myKey = "hobbies";
obj[myKey] = ["reading book", "coding"];
console.log(obj);
const arrayInfo = [['username','haongnm'], ['email','hoang@gmail'], ['password','hoang123']];

const newObj = new Object;
for(let i =0 ; i<arrayInfo.length ; i++) {
    let j = 0;
    newObj[arrayInfo[i][j]] = arrayInfo[i][j+1];
}
console.log(newObj);