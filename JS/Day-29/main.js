console.log(document);
/**
 * Element node
 * Attribute node
 * Text node
 */

const h1ElementC1 = document.getElementsByTagName("h1")[0];
const h1ElementC2 = document.getElementById("title-page");
const h1ElementC3 = document.getElementsByClassName("title")[0];
const h1ElementC4 = document.querySelector("#title-page");
const h1ElementC5 = document.querySelector(".title");

console.log(h1ElementC1);
console.log(h1ElementC2);
console.log(h1ElementC3);
console.log(h1ElementC4);
console.log(h1ElementC5);

const olElement = document.getElementsByTagName("ol")[0];

const liElementList = olElement.children;
console.log(olElement.children);

for(let i =0; i< liElementList.length ; i++) {
    console.log(liElementList[i]);
}
const liElementListC2 = document.querySelectorAll("li");
liElementListC2.forEach((element )=> {
    console.log(element);
});

/**
 * append child
 * createElement
 * remove child
 */

const listCustom = document.createElement("li");
console.log(listCustom);
listCustom.innerText = "Noi dung the li custom";
olElement.appendChild(listCustom);
// olElement.removeChild(listCustom)
const newNode = document.createElement("li");
newNode.innerText = "Day la node moi";
olElement.replaceChild(newNode, listCustom);