const main = document.getElementById("main");
const history = document.getElementById("history");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const value = button.innerText;
		if (value != "=") {
			history.innerText += value;
		}
		if (!isNaN(value)) {
			if (main.innerText == "0") {
				history.innerText = value;
				main.innerText = value;
			} else {
				main.innerText += value;
			}
		} else if (value == "CE") {
			main.innerText = "0";
			history.innerText = "0";
		} else if (value == "=") {
			main.innerText = eval(history);
		}
	});
});
