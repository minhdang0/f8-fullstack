// const calculatorPrice = (number) => {
    
//     if (number  <= 1 && number >0 ) return  number * 15000;
//     if (number >1 && number <=5  ) return (number - 1) * 13500 + 15000;
//     if (number > 5 && number <=120 ) return (number - 5) * 11000 + 13500 + 15000;
//     if (number > 120 ) return ((number - 5) * 11000 + 13500 + 15000 ) * 0.1;
// }

// console.log("abc" + "12"+".");

// const addPoint = (num) => {
//     const copyNum = num.toString().split('').reverse(); 
//     return copyNum.reduce((acc, cur, index) => {
//         if (index > 0 && index % 3 === 0) {
//             acc += '.'; 
//         }
//         acc += cur; 
//         return acc;
//     }, '').split('').reverse().join('');
// }
// let result = calculatorPrice(125);

// console.log(addPoint(result));

// const calculatorSum = (num) =>{
//     if (num === 0) return 0;
//     return num*(num+1) + calculatorSum(num-1)
// }
// console.log(calculatorSum(3));

// const isPrime = (n)  => {
//     if (n <= 1) return false;
   
//     for(let i = 2 ; i < Math.sqrt(n); i++) {
//         if (n % i === 0) return false
//     }

//     return true;
// }

let jsContent = `Năm 1995: JavaScript được tạo ra bởi Brendan Eich chỉ trong khoảng 10 ngày khi ông làm việc tại Netscape. Tên ban đầu của Javascript là Mocha, sau đó được đổi tên thành LiveScript.
Năm 1996:Javascript được gửi đến ECMA(European Computer Manufacturers Association - Hội liên hiệp các nhà sản xuất máy tính Châu Âu)để chuẩn hóa và đổi tên thành JavaScript.
Năm 2009: ECMAScript 5 ra đời với nhiều cải tiến quan trọng như có thêm nhiều phương thức mới cho mảng và đối tượng và tính năng "strict mode". Cũng trong năm 2009 Ryan Dahl đã tạo ra Node.js, một nền tảng cho phép chạy javaScript ngoài trình duyệt. Điều này đã mở ra một cánh cửa mới cho JavaScript.
Năm 2015:ECMAScript 6 (ES6) ra đời,là phiên bản lớn nhất của ECMAScript với nhiều cải tiến và tính năng được coi là vượt bậc.
Năm 2016 - nay:Các phiên bản ECMAScript mới được ra mắt liên tục,với nhiều cải tiến và tính năng mới.Cho đến nay javaScript đã trở thành một trong số những ngôn ngữ được ưa chuộng và sử dụng nhiều nhất thế giới.`;

const myStr = "Hoc";
console.log(myStr.slice(0,3));
const printHighlight = (content, keyword) => {
    
    const contentLower = content.toLocaleLowerCase();
    const keyWordLower = keyword.toLocaleLowerCase();
    const lengthKey = keyword.length;

    const result =  [...content].reduce((acc, _, index) => {
        if (index < acc.lastIndex ) return acc;

        if (contentLower.substring(index,index+ lengthKey) === keyWordLower) {
            acc.output += `<b>${content.substring(index, index + lengthKey)}<b/>`
            acc.lastIndex = index + lengthKey;
        } else {
            acc.output += content[index];
        }
        return acc;

    },{output:"", lastIndex : 0})

    return result.output;
}
console.log(printHighlight(jsContent, "javascript"));


