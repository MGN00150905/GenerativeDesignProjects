window.addEventListener("load", function (event) {


	var submitBtn = document.getElementById("submit");
	submitBtn.addEventListener('click', submitForm);
	
	function submitForm(evt) {
		function isValidDateFormat(dateString) {
				var regex = /^\d{2}-\d{2}-\d{4}$/;
				return dateString.match(regex);
			}

			function isValidEmailFormat(emailString) {
				var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return emailString.match(regex);
			}


		evt.preventDefault();
		
		var emailField = document.getElementById("exampleInputEmail1");
		var email = emailField.value;		


		console.log(email);
		

		if (email === ""){
			console.log("Enter an email");
			document.getElementById("emailError").innerHTML = "(Please enter your email)";
		}else if(!isValidEmailFormat(email)){
			console.log("Enter an email in correct format");
			document.getElementById("emailError").innerHTML = "(Please use correct format)";
		}else{
			console.log(email);
			document.getElementById("emailError").innerHTML = "";
		}
			
		 
	}


	
	
})