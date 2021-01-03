
var count1 = 1;


var defValue = 0;
var attValue = 0;
var eveValue = 0;

var rageValue = 0;
var changeValue = 0;
var calmValue = 0;

var rageAwns = 0;
var changeAwns = 0;
var calmAwns = 0;

var finalAwns = 0;


var textBox = document.getElementById('description');
var title = document.getElementById('title');

var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');


function shadow(){
		title.innerHTML = "Result";
		textBox.innerHTML = "Your element is the Shadow element"
		button1.style.display = "none"
		button2.style.display = "none"
		button3.style.display = "none"
}


function def(){
	count1++;
	defValue++;
	firstQuestions()
	
}

function att(){
	count1++;
	attValue++;
	firstQuestions()
	
}

function eve(){
	count1++;
	eveValue++;
	firstQuestions()

}

function finalCount(){
	if (secondClassType == "attack") {
		rageAwns = "fire"
		calmAwns = "water"
		changeAwns = "lightning"
	}
	else if (secondClassType == "defence") {
		rageAwns = "metal"
		calmAwns = "ice"
		changeAwns = "earth"
	}
	else if (secondClassType == "evade") {
		rageAwns = "poison"
		calmAwns = "flora"
		changeAwns = "air"
	}

	if (rageValue > calmValue & rageValue > changeValue ) {
		finalAwns = rageAwns;
	}
	else if (calmValue > rageValue & calmValue > changeValue) {
		finalAwns = calmAwns;
	}
	else if (changeValue > rageValue & changeValue > calmValue){
		finalAwns = changeAwns;
	}
	else{
		shadow()
	}
		title.innerHTML = "Result";
        textBox.innerHTML = "your element is<br>" + finalAwns
		button1.style.display = "none"
		button2.style.display = "none"
		button3.style.display = "none"
}


function rage(){
	count1++;
	rageValue++;
	secondQuestions()
	
}

function calm(){
	count1++;
	calmValue++;
	secondQuestions()
	
}

function change(){
	count1++;
	changeValue++;
	secondQuestions()

}






function calc1(){
	if (defValue > attValue & defValue > eveValue ) {
		secondClassType = "defence";
	}
	else if (attValue > defValue & attValue > eveValue) {
		secondClassType = "attack";
	}
	else if (eveValue > defValue & eveValue > attValue){
		secondClassType = "evade"
	}
	else {
		//k
	}

}

function secondQuestions(){
	
	button1.style.display = "inline-block";
	button2.style.display = "inline-block";
	button3.style.display = "inline-block";

	if (count1 == 6){
		title.innerHTML = "Question 1";
		if (secondClassType = "attack") {
			textBox.innerHTML = "What is the best place to relax? <br>A. Behind your PC or Phone<br>B. On the beach<br>c. In the Gym"
		button1.addEventListener("click", change);
		button2.addEventListener("click", calm);
		button3.addEventListener("click", rage);}

		else if (secondClassType = "defence") {textBox.innerHTML = "What is the best place to relax? <br>A. High up in the mountains<br>B. Somewere Quiet, doesnt matter where.<br>c. In a car, driving on the road."
		button1.addEventListener("click", change);
		button2.addEventListener("click", calm);
		button3.addEventListener("click", rage);
	}

		else if (secondClassType = "evede") {
			textBox.innerHTML = "What is the best place to relax? <br>A. On social media<br>B. Outside in nature<br>c. I can relax everywhere"
			button1.addEventListener("click", rage);
			button2.addEventListener("click", calm);
			button3.addEventListener("click", change);

		}
	}


	if (count1 == 7){
		title.innerHTML = "Question 2";
		if (secondClassType = "attack") {
			textBox.innerHTML = "What is the best way to spend time with friends?<br>A. Spending a day together on the water.<br>B. Playing games at home or in a arcade.<br>C. Hanging together at a party."
			button1.addEventListener("click", change);
			button2.addEventListener("click", calm);
			button3.addEventListener("click", rage);
		}

		else if (secondClassType = "defence") {
			textBox.innerHTML = "What is the best way to spend time with friends?<br>A. Rock climbing with eachother<br>B. Make or listen to music together.<br>C. Ice skating or other winter sports"
			button1.addEventListener("click", change);
			button2.addEventListener("click", rage);
			button3.addEventListener("click", calm);}

		else if (secondClassType = "evede") {
			textBox.innerHTML = "What is the best way to spend time with friends?<br>A. Going on a hike or camping.<br>B. As long as where having fun it doesnt matter.<br>C. Hanging around doing whatever whe want ( even if its illigal )"
		button1.addEventListener("click", calm);
		button2.addEventListener("click", change);
		button3.addEventListener("click", rage);

		}
	}

	 if (count1 == 8){
		title.innerHTML = "Question 3";
		if (secondClassType = "attack") {
			textBox.innerHTML = "What is in your opinion the worst disaster?<br>A. A TitleWave<br>B. A ForestFire<br>C. A Citywide powerblackout"
			button1.addEventListener("click", calm);
			button2.addEventListener("click", rage);
			button3.addEventListener("click", change);
		}

		else if (secondClassType = "defence") {
			textBox.innerHTML = "What is, in your opinion, the worst disaster?<br>A. A blizzard<br>B. An earthquacke<br>C. A carcrash"
			button1.addEventListener("click", calm);
			button2.addEventListener("click", change);
			button3.addEventListener("click", rage);}

		else if (secondClassType = "evede") {

			textBox.innerHTML = "What is in your opinion the worst disaster?<br>A. Nuclear explosion<br>B. A hurricane or tornado<br>C. Air pullution"
			button1.addEventListener("click", calm);
			button2.addEventListener("click", change);
			button3.addEventListener("click", rage);
		}
	}

		 if (count1 == 9){
			finalCount()
		}
	}









function firstQuestions(){
		
	switch(count1){

		case 1:
			
			title.innerHTML = "Pre Question 1";
			textBox.innerHTML = "which of these weapons would you use?<br>A. An Axe, for heavy attacks<br>B. A Sword, usefull for defencive combat<br>C. A light Dagger, so you can move more swift";
			button1.addEventListener("click", att);
			button2.addEventListener("click", def);
			button3.addEventListener("click", eve);
			console.log(count1)
			
		break;	
		
			

	case 2:
		    
			title.innerHTML = "Pre Question 2"
			textBox.innerHTML = "Which of these strange potions would you drink?<br>A. The see through blue Potion<br>B. The bubbeling red Potion<br>C. The dense green Potion "
			button1.addEventListener("click", eve)
			button2.addEventListener("click", att)
			button3.addEventListener("click", def)
			console.log(count1)
			
			
		
		break;
		
	case 3:

			title.innerHTML = "Pre Question 3"
			textBox.innerHTML = "Which of these animals would you like to be the most<br>A. The Turtle, for its tough shell<br>B. A Praying Mantis, for thier legendary fighting skills.<br>C. The Camelion, so I can avoid other animals."
			button1.addEventListener("click", def)
			button2.addEventListener("click", att)
			button3.addEventListener("click", eve)
			console.log(count1)
			
		break;

	case 4:

			title.innerHTML = "Pre Question 4"
			textBox.innerHTML = "What armour would you use?<br>A. The armour with skulls and bones, to scare people.<br>B. The most heavy an big suit of armour. Safety first.<br>C. The leather and pelt armour. I do want to breathe yèknow."
			
			button1.addEventListener("click", att);
			button2.addEventListener("click", def);
			button3.addEventListener("click", eve);
			console.log(count1)

		break;

		

	case 5:
			calc1()
		button1.style.display = "none"
		button2.style.display = "none"
		button3.style.display = "none"
		count1 = 6;
		secondQuestions()
	break;
	}

}


firstQuestions()





//second questions