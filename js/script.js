//Continuous title change
(function() {
	var titleText = document.getElementsByTagName('h1')
	var typesOfJobs = ["Accountants", "Estate Agents", "Mechanics", "Small Businesses"]

	count = 0
	setInterval(function(){
	  titleText[1].innerHTML = typesOfJobs[count%4]
	  count++

	}, 3000)

})()

window.onload = function() {	
	
	//Open form on button click
	document.getElementsByClassName('submit')[0].addEventListener("click", function() {

		var openForm = {
			init: function() {
				this.cacheDom()
				this.render()
			},
			cacheDom: function() {
				this.button = document.getElementsByTagName('input')[4]
				this.submitForm = document.getElementsByClassName('submit')[0]
				this.inputField = document.getElementsByClassName('field')
				this.checkBox = document.getElementsByClassName('check')[0]
			},
			render: function() {
				this.button.classList.add('fadeToBlue')
				this.button.style.pointerEvents = "auto"
				this.submitForm.classList.add('movedown')
				this.inputField [0].classList.add('fadein')
				this.inputField [1].classList.add('fadein')
				this.inputField [2].classList.add('fadein')
				this.checkBox.classList.add('fadein')
			}
		}
		
		openForm.init()
	})

	//Display success message
	document.getElementsByClassName('form')[0].onsubmit = function() {

		var message = document.getElementsByClassName('success')[0]
		var form = document.getElementsByClassName('form')[0]

		message.style.display = "block"
		form.style.display = "none"
		return false;
	}

}