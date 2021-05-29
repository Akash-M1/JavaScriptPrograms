const sigcheck = (value,lable) =>{
	switch(lable){
		case "second":
		case "minute":
		case "hour":
		case "day":
		return (value == 1)?true:false;
	    case "seconds":
	    case "minutes":
	    case "hours":
	    case "days":
	    return (value == 1)?false:true; 
	}
}