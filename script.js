const name = document.querySelector(".name");
const email = document.querySelector(".email");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const nameError = document.querySelector(".nameError");
const emailError = document.querySelector(".emailError");
const usernameError = document.querySelector(".usernameError");
const passwordError = document.querySelector(".passwordError");
const form = document.querySelector(".form");
const btn = document.querySelector(".btn");
let isName = false;
btn.disabled = true;
name.addEventListener("input", (e) => {
	if (name.value === "" && isName) {
		nameError.innerText = "Pole nie powinno być puste";
		btn.disabled = true;
	} else {
		nameError.innerText = "";
		btn.disabled = false;
	}
});
name.addEventListener("blur", (e) => {
	isName = true;
	if (name.value === "") {
		nameError.innerText = "Pole nie powinno być puste";
	} else {
		nameError.innerText = "";
	}
});
let isEmail = false;
email.addEventListener("input", (e) => {
	if (e.target.value === "" || (email.value.length > 5 && isEmail)) {
		emailError.innerText = "Nie może być puste i musi miec min5 znakow";
		btn.disabled = true;
	} else {
		emailError.innerText = "";
		btn.disabled = false;
	}
});
email.addEventListener("blur", (e) => {
	isEmail = true;
	if (email.value === "" || email.value.length > 5) {
		emailError.innerText = "Nie może być puste i musi miec min5 znakow";
		btn.disabled = true;
	} else {
		emailError.innerText = "";
		btn.disabled = false;
	}
});
let isEmailOk = false;
email.addEventListener("input", (e) => {
	if (
		!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) &&
		isEmailOk
	) {
		emailError.innerText = "To nie adres Email uzupełnij go";
	} else {
		emailError.innerText = "";
	}
});
email.addEventListener("blur", (e) => {
	isEmailOk = true;
	if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
		emailError.innerText = "To nie adres Email uzupełnij go";
	} else {
		emailError.innerText = "";
	}
});
let isPassword = false;
password.addEventListener("input", (e) => {
	if (password.value === "" && isPassword) {
		passwordError.innerText = "Pole nie powinno być puste";
		btn.disabled = true;
	} else {
		passwordError.innerText = "";
		btn.disabled = false;
	}
});
password.addEventListener("blur", (e) => {
	isPassword = true;
	if (password.value === "") {
		passwordError.innerText = "Pole nie powinno być puste";
	} else {
		passwordError.innerText = "";
	}
});
let isUserName = false;
username.addEventListener("input", (e) => {
	if (username.value === "" && isUserName) {
		usernameError.innerText = "Pole nie powinno być puste";
		btn.disabled = true;
	} else {
		usernameError.innerText = "";
		btn.disabled = false;
	}
});
username.addEventListener("blur", (e) => {
	isUserName = true;
	if (username.value === "") {
		usernameError.innerText = "Pole nie powinno być puste";
	} else {
		usernameError.innerText = "";
	}
});
form.addEventListener("submit", (e) => {
	if (btn.disabled === false) {
		console.log(email.value, name.value, username.value, password.value);
	} else {
		console.log("niedzaa");
	}
});
