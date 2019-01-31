exports = multiplicationtable = (x) =>{
	for (var i = 1; i <= 12; i++) {
		console.log(x+" x "+i+" = "+x*i)
	}
}

exports = gradecal = (x) => {
	var g = 0
	for (var i = 0; i < x.length; i++) {
		if(x[i] == "A")
			g += 4
		else if (x[i] == "B+")
			g += 3.5
		else if(x[i] == "B")
			g += 3
		else if(x[i] == "C+")
			g += 2.5
		else if(x[i] == "C")
			g += 2
		else if(x[i] == "D+")
			g += 1.5
		else if(x[i] == "D")
			g += 1
		else if(x[i] == "E")
			g += 0
	}

	console.log((g/x.length).toFixed(2))
}

exports = bmical = (x,y) =>{
	var bmi = x/((y/100)*(y/100))
	console.log("BMI is "+bmi.toFixed(2))
	if (bmi <18.5)
		console.log("Underweight")
	else if(bmi < 25)
		console.log("Normal weight")
	else if(bmi < 30)
		console.log("Overweight")
	else if(bmi > 30)
		console.log("Obesity")
}