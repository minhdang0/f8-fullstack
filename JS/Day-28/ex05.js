// setTimeout(function () {
//     console.log("delay1");
// },1000 )

// setTimeout(function () {
//     console.log("delay2");
// },1000)

// console.log("Show data");

const arr1 = [1,2,3,4,5];

const printElement = (arr,i = 0 )=>{
    if (i === arr.length) return;
    setTimeout(() => {
        console.log(arr[i]);
        printElement(arr, ++i);
        // clearTimeout()
    },1000)
    
}
printElement(arr1);