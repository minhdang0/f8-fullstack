/**
 * arr.reduce((accumulator, currentValue, index, array)) => {
 * 
 * })
 */
const arr1 = [1,6, 23, 25, 6, ,78];

let total =0
console.log(total);

const result = arr1.reduce((acc, cur) => {
    // console.log( )
    return acc +cur;
});
console.log(result);

const arr2 = ["tomato", "banana", "hotdog" , "orange" , "apple", "orange", "banana", "banana"];

const foodList = arr2.reduce((acc, cur) => {
    if(!acc[cur]) {
        acc[cur] = 1;
    } else {
        acc[cur] +=1;
    }
    return acc;
},{})
console.log(foodList);

const removeFood = arr2.reduce((acc, cur) => {
    if(acc.includes(cur)){
       return acc; 
    }
    acc.push(cur);
    return acc;
}, [])

console.log(removeFood);

const users = [
    { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
    { fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
    { fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
    { fullname: "Nguyen Van D", age: 18, address: "HaNoi" },
    { fullname: "Nguyen Van E", age: 32, address: "LangSon" },
];

const usersGroupByAddress = users.reduce((acc, cur) => {   
    if(!acc[cur.address]){
        acc[cur.address] = [];
    } 

    acc[cur.address].push(cur);
    
    return acc;
}, {})

console.log(usersGroupByAddress);
