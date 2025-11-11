//your JS code here. If required.
let name = document.getElementById("name")
let email = document.getElementById("email")
let phone = document.getElementById("phone")

const nameRe = /^[A-Za-z]{3,}$/;

const emailRe = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

const mobileRe = /^[0-9]{10}$/;

name.addEventListener("input",()=>{
	if(nameRe.test(name.value)){
		name.style.backgroundColor = "lightgreen";
	}else{
		name.style.backgroundColor = "pink";
	}
})

email.addEventListener("input",()=>{
	if(emailRe.test(email.value)){
		email.style.backgroundColor = "lightgreen";
	}else{
		email.style.backgroundColor = "pink";
	}
})

phone.addEventListener("input",()=>{
	if(mobileRe.test(phone.value)){
		phone.style.backgroundColor = "lightgreen";
	}else{
		phone.style.backgroundColor = "pink";
	}
})
