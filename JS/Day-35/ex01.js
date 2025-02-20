function taskA (callback) {
    setTimeout(function () {
        console.log("Task A done");
        callback();
    }, 3000);
}

function taskB (callback) {
    setTimeout(function () {
        console.log("Task B done");
        callback()
    },2000)
   
}

function taskC (callback) {
    setTimeout(function () {
        console.log("Task C done");
        callback();
    },1000)
   
}

taskA(() => taskB(() => taskC(()=> console.log("All task done!"))));

