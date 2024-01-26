emailjs.init("nKyezAY8dl7ulg8t1");
var gmail = document.getElementById("gmail_input");
var comments = document.getElementById("comments_input");
var subButton = document.getElementById("submit_button");

subButton.addEventListener("click", function (value) {
	var templateParams = {
		from_name: gmail.value,
		message: comments.value,
	};

	emailjs
		.send(
			"service_5udvc6o", // ServiceID
			"template_zwqib4e", // TemplateID
			templateParams,
			"nKyezAY8dl7ulg8t1" // PublicKey
		)
		.then(
			function (response) {
				console.log("SUCCESS!", response.status, response.text);
			},
			function (error) {
				console.log("FAILED...", error);
			}
		);
});
