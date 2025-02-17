const arr1 = [1,2,3,4,5,[100,200]];

const [first, second,...other] = arr1;

console.log(first);
console.log(second);
console.log(other);

const arr2 = [10,9,8,7];

const arr3 = [...arr1, ...arr2];
console.log(arr3.sort());

const arr1Copy = [...arr1];
console.log(arr1Copy);
console.log(arr1Copy === arr1);
console.log(arr1Copy[5][0]);
arr1Copy[5][0] = 10001020;
arr1Copy[0] = 7
console.log(arr1Copy);
console.log(arr1)

// const arr1DeepCopy = structuredClone(arr1);
// arr1DeepCopy[5][0] = 300;
// console.log(arr1);
// console.log(arr1DeepCopy);

//concat
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);

const array4 = array1.concat();
console.log(array1 === array4)
