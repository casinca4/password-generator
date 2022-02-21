const characters = Array.from('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-+=');
let randomPassword = [];
const generateBtn = document.querySelector('.generate-btn');
const passwordContainer = document.querySelectorAll('.password');
const passwordLengthNumber = document.querySelector('#password-length-number');

const generatePassword = () => {
	passwordContainer.textContent = '';
	for (let i = 0; i < passwordContainer.length; i++) {
		randomPassword = [];
		if (passwordLengthNumber.value == 'length') {
			alert('Choose password length.');
			break;
		} else {
			for (let j = 0; j < passwordLengthNumber.value; j++) {
				let randomIndex = Math.ceil(Math.random() * characters.length - 1);
				randomPassword.push(characters[randomIndex]);
			}
			const password = randomPassword.join("");
			passwordContainer[i].textContent = password;
		
		
			const copyIcon = document.createElement("img");
			copyIcon.src = "./copy-icon.png";
			copyIcon.title = "Copy password";
			copyIcon.classList.add("copy-icon");
			passwordContainer[i].append(copyIcon);
			

			copyIcon.addEventListener("click", function() {
				navigator.clipboard.writeText(password);
				alert("Copied the password: " + password)
			})
		}
	}
};

generateBtn.addEventListener('click', generatePassword);








