const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");

const passwordEyeShow = document.getElementById("eyeicon-show");
const passwordEyeHide = document.getElementById("eyeicon-hide");

const confirmEyeShow = document.getElementById("eyeicon-show2");
const confirmEyeHide = document.getElementById("eyeicon-hide2");

passwordEyeHide.onclick = function() {
    password.type = "text";
    passwordEyeShow.style.display = "inline";
    passwordEyeHide.style.display = "none";
};

passwordEyeShow.onclick = function() {
    password.type = "password";
    passwordEyeHide.style.display = "inline";
    passwordEyeShow.style.display = "none";
};

//confirm_password part
confirmEyeHide.onclick = function() {
    confirmPassword.type = "text";
    confirmEyeShow.style.display = "inline";
    confirmEyeHide.style.display = "none";
};

confirmEyeShow.onclick = function() {
    confirmPassword.type = "password";
    confirmEyeHide.style.display = "inline";
    confirmEyeShow.style.display = "none";
};