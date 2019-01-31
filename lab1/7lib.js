function reversestring(str){
	var splitarr = str.split("")
	var arrreverse = splitarr.reverse()
	var reversestr = arrreverse.join("")

	return reversestr
}

exports = palindrome = (str,int) => {
	if(int){
		console.log(str)
		console.log(reversestring(str))
		if(str.localeCompare(reversestring(str))){
			console.log("it isn't palindrome")
		}
		else{
			console.log("it is palindrome")
		}
	}
	else{
		var strupper = str.toUpperCase()
		console.log(strupper)
		console.log(reversestring(strupper))
		if(strupper.localeCompare(reversestring(strupper))){
			console.log("it isn't palindrome")
		}
		else{
			console.log("it is palindrome")
		}
	}
	
}