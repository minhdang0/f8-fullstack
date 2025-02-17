function afterLogin () {
    console.log("Login access");
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const formLogin = document.getElementById("login");
    formLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(formLogin);
        const userInfo = Object.fromEntries(formData);
        
        const emailInput = formLogin.querySelector("[name='email']");
        const passwordInput = formLogin.querySelector("[name='password");

        if(!validateEmail(userInfo.email)) {
            alert("Email khong hop le");
            emailInput.focus();
            return;
        }

        if (userInfo.password.length < 6) {
            alert("Mat khau it nhat co 6 ky tu");
            passwordInput.focus();
            return;
        }
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
                localStorage.setItem("user", JSON.stringify(userInfo));
                window.location.href = "/";
            } else {
                alert("Dang nhap that bai")
            }
        }).catch((error) => {
            console.log(error);
        })

    });

}


export default afterLogin;