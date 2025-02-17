const afterRegister = () => {
    console.log("register access");
    const formRegister = document.getElementById("register-form");
    formRegister.addEventListener("submit",(e) => {
        e.preventDefault();
        const formData = new FormData(formRegister);
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
        .then((data) =>{
            console.log(data);
            alert("Dang ky thanh cong!");
            window.location.href = "/login"
        } )
        .catch((error) => {
            console.log(error);
        })
    });
    
}

export default afterRegister;
