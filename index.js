//counter
var c = 0

// Sprite movement
var xSprite = 0
var ySprite = 0

// Fruit movement
var posFruitsTop = 0
var posFruitsLeft = 0

// Dead Detection
var d = 0

// Caught / Win Detection
var w = 0
function Tick(){
	c++
	document.getElementById('try').innerHTML = c
	SpritesPos()
	FruitPos()
}
var CountInterval
var Clicked = 0

function start(){
	Clicked++
	document.getElementById('start').innerHTML = "Reset"
	if(Clicked > 1){
		reset()
		return

	}
	CountInterval = setInterval("Tick()", 100)
	
}

function stop(){
	Clicked = 0
	clearInterval(CountInterval)
	document.getElementById('start').innerHTML = "Resume"
}

function reset(){
	c = 0
	xSprite = -50
}

function SpritesPos(){
	var GetXSprite = document.getElementById('spritePos').offsetLeft;
	var GetYSprite = document.getElementById('spritePos').offsetTop;
	
	document.getElementById('spritePos').style.left = xSprite + 'px'
	document.getElementById('spriteMessage').innerHTML = "(" + xSprite + "," + GetYSprite + ")"

	if(xSprite >= 450){
		xSprite = -50
	}

}	

function FruitPos(){
	var GetXFruits = document.getElementById('fruitPos').offsetLeft;
	var GetYFruits = document.getElementById('fruitPos').offsetTop;
	//Declaring a sensor
	var GetSensorY = document.getElementById('fruitsYSensor').offsetTop
	var GetSensorX = document.getElementById('spritePos').offsetLeft
	
	posFruitsTop += 15
	
	var YCalcSensor = GetSensorY+460
	var XCalcSensor = GetSensorX+50
	document.getElementById('fruitPos').style.top = posFruitsTop + 'px'
	document.getElementById('fruitPos').style.left = posFruitsLeft + 'px'
	document.getElementById('fruitMessage').innerHTML = "(" + GetXFruits + "," + GetYFruits + ")"
	document.getElementById('sensorMessage').innerHTML = "(" + XCalcSensor + "," + YCalcSensor + ")"
	if(posFruitsTop > 465){
		FruitToDeadZone()
	}

	if(posFruitsTop >= 470){
		posFruitsTop = -40
		posFruitsLeft = Math.floor(Math.random() * (420 - (0)) + (0))
	}

	// XCalcSensor
	if(GetYFruits >= YCalcSensor && posFruitsLeft >= GetSensorX && posFruitsLeft <= XCalcSensor){
	w++
	document.getElementById('fruitCaught').innerHTML = w
	}
}
function FruitToDeadZone(){
	d++
	document.getElementById("fruitDrop").innerHTML = d
}

window.addEventListener("keydown", function(event){
	if(event.defaultPrevented){
		return;
	}

	switch(event.key){
		case "ArrowLeft" : 
			Move('left')
		break;
		case "ArrowRight" : 
			Move('right')
		break;
	}
})

function Move(direction){
	switch(direction){
		case 'right' : 
		xSprite += 50
		break;

		case 'left' : 
		xSprite -= 50
		break;
	}
}
//Condition if caught
// X fruits, y fruits = x sprite, y fruits

// Lebih dari sprite dan kurang dari sprite

//ES5
//ES6

function Fruits(){

}

Fruits.prototype.GetPosition = function(){

}

fruits.prototype.Reset = function(){

}

var Grape = new Fruits()
Grape.GetPosition()
Grape.Reset()

var Banana = new Fruits()
Banana.GetPosition()
Banana.Reset()