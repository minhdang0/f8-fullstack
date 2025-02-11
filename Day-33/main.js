const form = document.getElementsByTagName("form")[0];
form.addEventListener("submit",(e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const userInfo = Object.fromEntries(formData);
    console.log(userInfo);
});