const form = document.getElementsByTagName("form")[0];
form.addEventListener("submit",(e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const userInfo = Object.fromEntries(formData);
    console.log(userInfo);

    fetch("http://localhost:3000/register",{
        headers: {
            "Content-Type":"application/json"
        },
        method:"POST",
        body: JSON.stringify(userInfo),
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
            console.log(error);
        })
});

const formLogin = document.getElementById("login");
formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(formLogin);
    const userInfo = Object.fromEntries(formData);
   
    fetch("http://localhost:3000/login",{
        headers: {
            "Content-Type":"application/json"
        },
        method:"POST",
        body:JSON.stringify(userInfo)
        
    })
    .then((response) => response.json())
    .then((data) => {
        
        console.log(data);
        if (data.accessToken) {
            alert("Dang nhap thanh cong");
        } else {
            alert("Dang nhap that bai")
        }
    }).catch((error) => {
        console.log(error);
    })

})