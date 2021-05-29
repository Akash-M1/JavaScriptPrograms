const men=["Socrates","Brutus","Chris","Bob"];
const allmenmortal=true;
if(allmenmortal)
{
	console.log("All men are mortal");
	for(i=0;i<=men.length;i++)
	if(men[i]==="Socrates"){
		console.log("Socrates is a man ");
		console.log("Therefore,Socrates is Mortal");
	}
}
var cake = "vanilla";
if(cake==="vanilla"||"chocolate")
{
	console.log("This cake is either Vanilla or chocolate");
	if(cake!="chocolate")
	{
		console.log("This cake is not chocolate");
		console.log("Therefore,this cake is vanilla");
	}
}