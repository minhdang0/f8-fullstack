let str = "F8 - Hoc lap trinh hoc hoc ";

const subString = (str, keyWord) => {
    str = str.toLowerCase();
    let count = 0;
    keyWord = keyWord.toLowerCase();
    
    for (let i = 0 ; i < str.length ; i++){
        if(str.includes(keyWord, i)) {
            let temp =  str.indexOf(keyWord, i) + keyWord.length - 1;
            console.log(temp);
            if (temp < str.length - keyWord.length) {
                i = temp;
            }
            count += 1;     
        }
        
    }
    return count;
}

let myStr = "F8 - Hoc Lap lap trinh";
console.log(subString(myStr, "hoc"));

// console.log(myStr.includes('Hoc', 10));
