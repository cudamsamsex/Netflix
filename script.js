function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "admin" && password === "phanhoangna") {
        document.getElementById("login-box").classList.add("hidden");
        document.getElementById("content-box").classList.remove("hidden");
    } else {
        document.getElementById("error").style.display = "block";
    }
}

function logout() {
    document.getElementById("login-box").classList.remove("hidden");
    document.getElementById("content-box").classList.add("hidden");
}

function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied: ${text}`);
    });
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.style.opacity = "1";
    setTimeout(() => {
        toast.style.opacity = "0";
    }, 2000);
}

function switchLanguage() {
    const elements = document.querySelectorAll("h2, button, p, th, td");
    elements.forEach(el => {
        if (el.innerText === "Đăng nhập") el.innerText = "Login";
        else if (el.innerText === "Login") el.innerText = "Đăng nhập";
        else if (el.innerText === "Đăng xuất") el.innerText = "Logout";
        else if (el.innerText === "Logout") el.innerText = "Đăng xuất";
        else if (el.innerText.includes("Sai tài khoản hoặc mật khẩu!")) el.innerText = "Invalid username or password!";
        else if (el.innerText.includes("Invalid username or password!")) el.innerText = "Sai tài khoản hoặc mật khẩu!";
    });
}
