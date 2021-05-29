//This program is to illustrate how functions are gonna work in ES6
var men = "Socrates";
var Socratesmortal = (name) =>{
	if(name===men){
		return true;
	}
	else if(name === undefined)
	{
		return false;
	}
	else{
		return false;
	}
}
console.log(Socratesmortal("Socrates"));
console.log(Socratesmortal(""));
console.log(Socratesmortal(30));
console.log(Socratesmortal(','));



//Extra Credit HW
var cake=["Vanilla" , "Chocolate"];
var flav = (myarr) =>{
	if(myarr[0]==="Vanilla"){
		console.log("Cake is not of Chocolate");
		console.log("Therefore cake is of vanilla");
	}
	else if(myarr[1]==="Chocolate"){
		console.log("Cake is not of Chocolate");
		console.log("Therefore cake is of vanilla");
	}
}
flav(cake);