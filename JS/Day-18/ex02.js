function welcome (username) {
    console.log("Hello, " + username);
    console.log(`Hello, ${username}`);
    return;
}

welcome("F8");
const result = welcome("Tran Duy Hung");
console.log(result)

/** 1. Hàm là 1 khối code có chức năng riêng được đóng gói và tái sử dụng 
 * 2.Hàm không return hàm trả về unđerfined
 */

function funcA(a) {
    if (a == 1){
        return 1;
    }
    return a * funcA(a-1);
}

let a = funcA(3);
console.log(a);
function taskA() {
    console.log("Đi kiếm tiền");
}
function taskB(callback) {
    setTimeout(()=>{
        console.log("Để mua máy tính mới");
    },2000)
    callback();
}

taskB(taskA);
/** 
 * Declaration function :Hàm khai báo tường minh
 * Call Back: Hàm được truyền vào hàm khác như một đối số
 * Expression function: Hàm được sd gán cho biến
 */
setTimeout(() =>{
    alert("Xin chào F8")
},1000)

const sum = function(a,b) {
    return a+b;
}

console.log(sum(2, 3));
const car = {
    title: "MG-5",
    color: "red",
    run:function () {

    }
}
/**
 * Hamf gán cho thuôc tính trong object thường đc gọi là phương thức
 */