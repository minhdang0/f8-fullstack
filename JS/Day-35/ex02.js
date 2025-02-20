function taskA () {
    return new Promise((resolve, reject) => {
        console.log("Task A doing");
        setTimeout(function () {
            resolve("Task A done")
        }, 3000);
    })   
}

function taskB (callback) {
    console.log("Task B doing");
    return new Promise((resolve,reject) => {
        setTimeout(function () {
            resolve("Task B done!");
        },2000)
       
    })
   
}

function taskC (callback) {
    return new Promise ((resolve, reject)=>{
        console.log("Task C doing");
        setTimeout(function () {
            resolve("Task C done");
        },1000)
    })
   
}

// taskA()
// .then((result) => {
//     console.log(result);
//     return taskB()
// })
// .then((result) => {
//     console.log(result);
//     return taskC()
// })
// .then((result)=>{
//     console.log(result);
// })
// .catch(err => console.log(err))
// .finally(() => {
//     console.log("finally");
// });
console.time("promise")
Promise.all([taskA(), taskB(), taskC()]).then((data) => {
    data.forEach(item => {
        console.log(item);
    })
}).catch()
.finally(() =>{
    console.timeEnd("promise")
})