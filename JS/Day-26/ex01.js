let str1 = "F8 - Hoc lap trinh de di lam";
console.log(typeof str1);
let objString = new String("Hello");
console.log(typeof objString);

let str2 = String(123);
console.log( typeof str2);

console.log(str1[0]);

let f8Slogan = "F8 - Hoc lap trinh de di lam";
let lengthStr = Math.floor(f8Slogan.length / 2 );
let output = "";
for(let i = f8Slogan -1; i >= 0 ; i--) {
    output += f8Slogan[i];
}
console.log(output);

function checkDx (str) {
    for(let i = 0; i < str.length / 2 ; i++) {
        if(str[i] != str[str.length - i - 1]) {
            return false;
        }          
    }

    return true;
}
let myStr = "abcba";

if(checkDx(myStr)) {
    console.log("Chuoi dx");;
} else {
    console.log("Chuoi khong dx")
}


