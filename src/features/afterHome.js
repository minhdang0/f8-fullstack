function afterHome() {
    const user = JSON.parse(localStorage.getItem("user"));
    
    if (user) {
        const emailElement = document.getElementById("email");
        if (emailElement) {
            emailElement.textContent = `Xin chao ${user.email}`;
        }
    } else {
        console.log("Chưa đăng nhập");
    }
    
}
export default afterHome;