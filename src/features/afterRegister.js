import { register } from "../api/auth";
import { router } from "../main";

const afterRegister = () => {

    const formRegister = document.getElementById("register-form");

    formRegister.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(formRegister);
        const userInfo = Object.fromEntries(formData);
        console.log(userInfo);

        let email = userInfo.email;
        let password = formRegister.querySelector("[name='password']").value;
        
        if (password.length < 6) {
            alert("Mật khẩu ít nhất có 6 ký tự");
            formRegister.querySelector("[name='password']").focus();
            return; 
        }

        const emailExists = await checkEmailExists(email);
        if (emailExists) {
            alert("Email đã tồn tại, vui lòng chọn email khác!");
            return; 
        }

        const data = await register(userInfo);
        if (data) {
            alert("Đăng ký thành công!");
            const confirmRouter = confirm("Bạn có muốn chuyển đến trang đăng nhập không?");
            if (confirmRouter) {
                router.navigate("/login");
            }
        }
    });
};

async function checkEmailExists(email) {
    try {
        const response = await fetch(`http://localhost:3000/users?email=${email}`);
        const data = await response.json();
        return data.length > 0; 
    } catch (error) {
        console.error("Lỗi kiểm tra email:", error);
        return false; 
    }
}

export default afterRegister;
