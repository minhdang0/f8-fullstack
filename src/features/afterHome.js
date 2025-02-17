function afterHome() {
    const user = JSON.parse(localStorage.getItem("user"));
    const emailElement = document.getElementById("email");
    if (user) {
        if (emailElement) {
            emailElement.textContent = `Xin chao ${user.email}`;
        }
    } else {
        console.log("Chưa đăng nhập");
        emailElement.textContent =""
    }
    
}
export default afterHome;