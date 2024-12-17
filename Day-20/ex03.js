const student = ["Việt Anh","Minh", "Trung"]
for(let i = 0 ; i <student.length ;i++){
    console.log(student[i])
}

const students = [
    {fullname: "Đăng Nhật Minh", age: 22, pay :200_000},
    {fullname: "NGuyễn Việt Anh", age: 22, pay:1_000_000},
    {fullname: "Nguyễn Mạnh Huy", age: 17, pay:300_000},
    {fullname: "Nguyễn Thành Trung", age: 18, pay:500_000},

]
let sum = 0;
for(let i =0 ; i<students.length ; i++){
    sum+= students[i].pay;
    if(students[i].age <20) {
        console.log(students[i].fullname)
    }
}

console.log(sum);

let countWorld  = 1;

const paragraphs = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ratione Dignissimos ad nihil in aliquam facilis quis perferendis minus dicta, consequuntur aliquid ea illum, officia ex. Reprehenderit recusandae repellendus aut? ";

for (let i = 0; i<=paragraphs.length; i++) {
    if(paragraphs[i] ===" ") {
        countWorld +=1;
    }

}
console.log(countWorld)
