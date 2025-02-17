for(let i = 0; i<=5; i++ ) {
    if (i==1) {
        continue;
    }
    console.log(i);
}

// 1. KHai báo i = 0;

function creTriangle(n, char){
    let text = "";
    for (let i = 1 ; i<=n; i++){
        text +=char;
        console.log(text)
    } 
}
creTriangle(5, "#")
// CHia hết cho 4
function divisible4(number) {
    for(let i =0 ; i<=number; i++){
        if(number <i ){
            break;
        }
        if (i < 4 ){
            continue;
        }
        if (i%4===0) {
            console.log(i);
        } 
    
    }
}
const number = parseInt(prompt("Nhập số"));
if(isNaN(number) || number < 0 || typeof number === "infynity") {
    console.log("Nhập sai dữ liệu");
} else {
    divisible4(number)
}

//Số nguyên tố 

function isPrime(n) {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
function printPrime(n) {
    if (n < 0) {
      console.log("Nhập sai dữ liệu");
      return;
    }
    for (let i = 0; i <= n; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
}
  printPrime(10);
//Bảng cua chuong

function printMt(number){
    for(let i= 1 ;i<=number;i++){
        for(let j =1 ; j<=number; j++){
            let result = i * j;
            console.log(i + "*" + j + "=" ,result)
        }
    }
}
printMt(10)
