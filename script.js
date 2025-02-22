// Toggle Admin Menu
function toggleAdminMenu() {
    let menu = document.getElementById("adminMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Super Admin Login
function openSuperAdminLogin() {
    document.getElementById("superAdminModal").style.display = "block";
}

function closeSuperAdminLogin() {
    document.getElementById("superAdminModal").style.display = "none";
}

function superAdminLogin() {
    let password = document.getElementById("superAdminPassword").value;
    if (password === "superadmin123") {
        alert("Super Admin Logged In");
    } else {
        alert("Incorrect Password");
    }
}

// Admin Login
function openAdminLogin() {
    document.getElementById("adminModal").style.display = "block";
}

function closeAdminLogin() {
    document.getElementById("adminModal").style.display = "none";
}

function adminLogin() {
    let email = document.getElementById("adminEmail").value;
    let password = document.getElementById("adminPassword").value;
    let storedPassword = localStorage.getItem(email);

    if (storedPassword && storedPassword === password) {
        alert("Admin Logged In");
    } else {
        alert("Invalid Email or Password");
    }
}

// Sign Up
function openSignUp() {
    document.getElementById("signUpModal").style.display = "block";
}

function closeSignUp() {
    document.getElementById("signUpModal").style.display = "none";
}

function registerAdmin() {
    let email = document.getElementById("newAdminEmail").value;
    let password = document.getElementById("newAdminPassword").value;

    if (localStorage.getItem(email)) {
        alert("Admin already exists!");
    } else {
        localStorage.setItem(email, password);
        alert("Admin Registered!");
        closeSignUp();
    }
}

// Forgot Password
function openForgotPassword() {
    document.getElementById("forgotPasswordModal").style.display = "block";
}

function closeForgotPassword() {
    document.getElementById("forgotPasswordModal").style.display = "none";
}

function resetPassword() {
    let email = document.getElementById("resetAdminEmail").value;
    if (localStorage.getItem(email)) {
        let newPassword = prompt("Enter new password:");
        localStorage.setItem(email, newPassword);
        alert("Password Reset Successfully!");
        closeForgotPassword();
    } else {
        alert("Admin Not Found!");
    }
}