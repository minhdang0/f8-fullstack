//Filter
const arr1 = [1, 2, 3, 5, 10, 12, 17];

const result1 = arr1.filter((item) => {
    return item % 2 === 0;
});

console.log(result1);

const result2 = arr1.filter((item) => item>=100);
console.log(result2)

const product = [
    { id:1, title:"San pham A", price: 200, quantity: 2, discount: 0.1 },
    { id:2, title:"San pham B", price: 200, quantity: 2, discount: 0.2 },
    { id:3, title:"San pham C", price: 300, quantity: 2, discount: 0.3 },
    { id:4, title:"San pham D", price: 400, quantity: 2, discount: 0.05},
]

const hotSaleProduct = product.filter((item) => item.discount >= 0.2);
console.log(hotSaleProduct);

let priceFinal = 0;
product.forEach((item) => {
    priceFinal += item.price * item.quantity * (1-item.discount);
});
console.log(priceFinal);


// const newProduct = product.map((item) => {
//     console.log(item);
//     let amount;
//     amount = item.price * item.quantity * (1-item.discount);
//     const {id, title, price,quantity, discount} = item;
//     return {id, title, price, quantity,discount, amount};
// });
// console.log(newProduct);

const newProduct = product.map((item) => {
    const newItem = {...item, amount:item.price * item.quantity * (1-item.discount)};
    return newItem;
})
console.log(newProduct);