// const h2Element = document.createElement("h2");
// h2Element.innerText = "Noi dung";

// document.body.innerHTML =`<div>
//     <p>Noi dung</p>
// </div>`;

let boxElement = document.getElementsByClassName("box")[0];

console.log(boxElement);
boxElement.appendChild = `<p>Noi dung cua box</p>`; 
// boxElement.outerHTML =  `<p>Noi dung cua box</p>`;
console.log(boxElement.textContent); 

/**
 * innerHTML ->xu ly noi dung HTML
 * outerHTML ->xu ly noi dung HTML (Duoi dang setter thay the ca ban than phan tu dang thao tac)
 * 
 * textContent co gang lay ra toan bo content cua node ma khong co gang bo cuc , sap xep laij -> hieu suat tot hon
 * - lay duoc ca noi dung display:none
 */