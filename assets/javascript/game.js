var crystalBlue;
var crystalGreen;
var crystalPurple;
var crystalRed;
var targetNumber;
var totalScore;
var win=0;
var loss=0;
var audio = new Audio("assets/images/pylons.mp3");

function reset(){
	targetNumber = randyTarget();
	totalScore = 0;
	crystalBlue = randyCrystal();
	crystalGreen = randyCrystal();
	crystalPurple = randyCrystal();
	crystalRed = randyCrystal();
	assignCrystalValue();
	$("#targetNumber").text("This is your target: " + targetNumber)
	totalScore=0;
	$("#totalScore").text("This is your total rn: " + totalScore)
	$("#win").text("Nexuses Saved: " + win)
	$("#loss").text("Nexuses Lost: " + loss)
	$(".nexus").attr("src","assets/images/main.jpg");

}

function randyCrystal(){
	var randy = Math.floor(Math.random() * 9) + 2;
	return randy;
}

function randyTarget(){
 	var randy = Math.floor(Math.random() * 20) + 40;
 	return randy;
}



function assignCrystalValue(){
	$("#crystal-blue").attr("value",crystalBlue);
	$("#crystal-green").attr("value",crystalGreen);
	$("#crystal-purple").attr("value",crystalPurple);
	$("#crystal-red").attr("value",crystalRed);
}

reset();


console.log("Target Number: " + targetNumber);
console.log("Blue: " + crystalBlue);
console.log("Green: " + crystalGreen);
console.log("Purple: " + crystalPurple);
console.log("Red: " + crystalRed);

$(".crystals").on("click", function() {

	var crystalValue = ($(this).attr("value"));
	crystalValue = parseInt(crystalValue);
	totalScore += crystalValue
	$("#totalScore").text("This is your total rn: " + totalScore)

		if (totalScore === targetNumber){
			alert("You saved the Nexus! Now save another...")
			win++;
			reset();
		}
			else if (totalScore > targetNumber){
				loss++;
				alert("You lost a nexus! Try again...")
				reset();
			}

			else {
				 audio.play();

			}
});
