function Person (name) {
    this.name = name;

    this.greet1 = function () {
        console.log(`Hello, my name is ${this.name}`);
    }
}

Person.prototype.greet2 = function () {
    console.log(`Hello, my name is ${this.name}`);
}

const john = new Person ("john");
const hoang = new Person ("Hoang");

console.log(john.greet1 === hoang.greet1);
console.log(john.greet2 === hoang.greet2);

console.log(john.hasOwnProperty("greet1"));
console.log(john.hasOwnProperty("greet2"));//greet2 là phương thức  đặt trong prototype dùng hcung không phải của riêng john

/**
 * Các thuôc tính, phương thức khai báo trong hàm tao -> khi tạo ra 1 dối tươngm ới cụ thể sẽ có phương thức và thuộc tính riêng
 *  ghi dè viết lại được phương thức, thuộc tính
 * tốn bộ nhớ
 * Phương thức đc ghi trong prototype là dùng chung
 * ->Tiếc kiệm bộ nhớ
 * -> kế thừa đc dê quản lý tập trung
 * -> Nếu thay đổi phương thức gắn ở prototype hì sẽ ảnh hưởng đến tất cả các đôi tượng đc tạo mà không ghi đè đc
 */