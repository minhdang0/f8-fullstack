const product = [
    { id: 1, title: "Iphone 16 pro max", price: 2000, quantity: 2},
    { id: 2, title: "Tivi xiaomi 75inch 4k", price: 4000, quantity: 1},
    { id: 3, title: "Tai nghe khong day airpod 2 pro", price: 400, quantity: 4}
]

product.forEach((item) => {
    item.sumPrice = item.quantity * item.price;
})
const newTable = document.createElement("table");
newTable.style.border = "1";
document.body.appendChild(newTable);

const titleTable = [...Object.keys(product[0])];

const firstTr = document.createElement("tr");
newTable.appendChild(firstTr);

//
titleTable.forEach((item) => {
    let newTh = document.createElement("th");
    newTh.innerText = `${item.toLocaleUpperCase()}`;
    firstTr.appendChild(newTh)
})

product.forEach((item) => {
    let addTr = document.createElement("tr");
    newTable.appendChild(addTr);

    for (value in item) {
        let newTd = document.createElement("td");
        newTd.innerText = item[value];
        addTr.appendChild(newTd);
    }
})

const sumALlProduct = product.reduce((acc,cur) =>{
    acc.sumPrice += cur.sumPrice;
    return acc;
}, {sum:"Tong", sumPrice: 0})

console.log(sumALlProduct.sum);
const lastTr = document.createElement("tr");
newTable.appendChild(lastTr);
for (let key in sumALlProduct){
    let newTd = document.createElement("td");
    newTd.innerText = sumALlProduct[key];
    lastTr.appendChild(newTd);
}

// console.log(sumALlProduct);