// let str = "F8 - Hoc lap trinh hoc hoc ";

// const subString = (str, keyWord) => {
//     str = str.toLowerCase();
//     let count = 0;
//     keyWord = keyWord.toLowerCase();
    
//     for (let i = 0 ; i < str.length ; i++){
//         if(str.indexOf(keyWord,i) !== -1) {
//             count += 1;
//             i = str.indexOf(keyWord, i) + keyWord.length - 1;
            
//         }
        
         
//     }
     
//     return count;
// }

// let myStr = "F8 - Hoc Lap lap trinh";
// console.log(subString(myStr, "lap"));

// // console.log(myStr.includes('Hoc', 10));

let url = "https://fullstack.edu.vn/courses";

console.log(url.startsWith("https://fullstack.edu.vn"));
console.log(url.endsWith("?",10000));

/**
 * str.startWith("searchString", positionStart)
 * positionStart: default value = 0
 * 
 * str.endWith ("searchString", positionEnd);
 * pos
 */