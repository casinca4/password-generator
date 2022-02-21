// Drei Möglichkeiten für Anzeigen der passwordLengthNumber:
// https://dyn-web.com/tutorials/forms/select/selected.php

const passwordLengthNumber = document.querySelector("#password-length-number");


// 1)

passwordLengthNumber.addEventListener("click", () => console.log(passwordLengthNumber.value))



// 2)

passwordLengthNumber.addEventListener("click", () => {
	
		const opt = passwordLengthNumber.options[passwordLengthNumber.selectedIndex]
		console.log(passwordLengthNumber.length)
		console.log("Value:", opt.value)
		console.log("Text:", opt.text)
	
})



//3)

passwordLengthNumber.addEventListener("click", () => {
		let opt 
		for (let i = 0, len = passwordLengthNumber.options.length; i < len; i++) {
			console.log(len)
			opt = passwordLengthNumber.options[i];
			if (opt.selected === true) {
				break;
			}
		}
		console.log("Value:", opt.value)
		console.log("Text:", opt.text)
		// return opt;
})


	
const copyIcon = document.createElement("button");
copyIcon.innerHTML = '<img src="./copy-icon.png"></img>'
copyIcon.classList.add("copy-icon");
passwordContainer[i].append(copyIcon);