const arr1 = [
    {id:1, name:"Hoang"},
    {id:3, name:"Dung"},
    {id:2, name:"Hien"}
]
arr1.sort((a,b) => a.id - b.id)

const olElement = document.createElement("ol");
document.body.appendChild(olElement);

arr1.forEach((item) => {
    let liNew = document.createElement("li");
    liNew.innerText = item.name;
    olElement.appendChild(liNew);
})
console.log(arr1); 

