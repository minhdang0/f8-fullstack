import { login } from "../api/auth";
import { router } from "../main";
function afterLogin () {
    console.log("Login access");
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const formLogin = document.getElementById("login");
    formLogin.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(formLogin);
        const userInfo = Object.fromEntries(formData);
        
        const emailInput = formLogin.querySelector("[name='email']").value;
        const passwordInput = formLogin.querySelector("[name='password").value;

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
        const data = await login (userInfo);
        if (data.accessToken){
            localStorage.setItem("user", JSON.stringify({
                email:userInfo.email,
                accessToken: data.accessToken
            }));
            alert("Dang nhap thanh cong!");
            router.navigate("/task")
        }

    });

}


export default afterLogin;