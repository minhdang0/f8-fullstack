
const sum = (a, b ) => {
    return a+b;
};

console.log(sum(10, 20));

const sum2 = (a,b) => a+b ;
console.log(sum2(10,20))
/**
 * Arrow function có thể bỏ qua từ khóa return
 */

const getInfo = () =>({
    username: "Minh",
    age:33
})

let count = 0;
const clickCount = () =>{
    count = count + 1;
    console.log(count)
}

const temp = document.querySelector("#info");
temp.addEventListener("click", () => {
    console.log("Hello world");
});

