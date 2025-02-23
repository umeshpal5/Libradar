function login() {
    let mobile = document.getElementById('mobile').value;
    let password = document.getElementById('password').value;

    if (mobile === "9876543210" && password === "admin123") {
        alert("Login Successful!");
        window.location.href = "admin-dashboard.html";
    } else {
        alert("Invalid Credentials!");
    }
}
