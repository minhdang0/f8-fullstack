// fetch("https://dummyjson.com/products")
// .then((response) => {
//     return response.json();
// })
// .then((data) => console.log(data));
async function fetchProduct() {
    try {
        const res = await fetch("https://dummyjson.com/productss");
        console.log(res.status);
        if (res.status === 404) {
            throw new Error("KHong tim thay trang")
        }
        const data = await res.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
   
}
fetchProduct()