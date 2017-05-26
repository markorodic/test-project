window.scrollTo(0, 0);



window.onload = function() {
	// document.getElementsByTagName('form')[0].addEventListener("submit", function(){
	// 	alert()
	// })
	
	var button = document.getElementsByTagName('button')[0]
	var btn = document.getElementsByTagName('input')[4]
	var field = document.getElementsByClassName('field')
	var check = document.getElementsByClassName('check')[0]
	var change = document.getElementsByClassName('para')[0]
	var discard = document.getElementsByClassName('container-three')[0]
	var success = document.getElementsByClassName('success')[0]

	button.addEventListener("click", function() {

		btn.classList.add('movedown')
		btn.classList.add('colourme')
		field[0].classList.add('fadein')
		field[1].classList.add('fadein')
		field[2].classList.add('fadein')
		check.classList.add('fadein')
		// button.style.display = "none"
		discard.style.display = "none"
	})


	
	var form = document.getElementsByClassName('form');

	form[0].onsubmit = function() {
		success.style.display = "block"
		form[0].style.display = "none"
		success.style.display = "block"
		return false;
	}

	// var http = new XMLHttpRequest()

	// http.onreadystatechange = function() {
 //    if (this.readyState == 4 && this.status == 200) {
 //    	console.log(http.response)
 //    	}
 //  	}

	// http.open("GET", "", true)
	// http.send()
}

var headers = document.getElementsByTagName('h1')

var jobs = ["Accountants", "Estate Agents", "Mechanics", "small businesses"]
var verbs = ["Simple", "Fast", "Fair", "Flexible"]


count =0

setInterval(function(){
  headers[1].innerHTML = jobs[count%4]
  count++
}, 3000)



// document.getElementsByTagName('h1')[0].innerHTML


// document.getElementsByTagName('label')[0].style.display = "block"


    // var data = new FormData();
    // data.append('user', 'person');
    // data.append('pwd', 'password');
    // data.append('organization', 'place');
    // data.append('requiredkey', 'key');
    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', 'somewhere', true);
    // xhr.onload = function () {
    //     // do something to response 
    //     console.log(this.responseText);
    // };
    // xhr.send(data);