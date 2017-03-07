var dogArray = [
	{
		image: "img/dog0.jpg",
		breed: "beagle"
	},
	{
		image: "img/dog1.jpg",
		breed: "boxer"
	},
	{
		image: "img/dog2.jpg",
		breed: "german shepherd"
	},
	{
		image: "img/dog3.jpg",
		breed: "corgi"
	},
	{
		image: "img/dog4.jpg",
		breed: "golden retriever"
	},
	{
		image: "img/dog5.jpg",
		breed: "greyhound"
	},
	{
		image: "img/dog6.jpg",
		breed: "weimaraner"
	}
]

function calculate() {
	var correct = 0
	var incorrect = 0
	for( i = 0; i < dogArray.length; i++) {
		var input = document.getElementById("breed" + [i]).value
		var guess = input.toLowerCase()
		var answer = dogArray[i].breed
		var answerColor = document.getElementById("answer" + [i])
		if (answer == guess) {
			answerColor.className = "correct"
			correct++
		} else {
			answerColor.className = "incorrect"
			incorrect++
		}
	}document.getElementById("correct").textContent = "Correct:" + " " + correct
	document.getElementById("incorrect").textContent = "Incorrect:" + " " + incorrect
	document.getElementById("form").reset();
}







