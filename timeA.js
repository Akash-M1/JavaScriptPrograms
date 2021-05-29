const timeAdder = (value1,lable1,value2,lable2) =>{
	switch(lable1){
		case "second":
		if(value1 == 1){
			value = 1;
		}
		else if(value1 == {}){
			value = false;
		}
		else{
			value = false;
		}
		break;
		case "minute":
		if(value1 == 1){
			value = 60;
		}
		else if(value1 == {}){
			value = false;
		}
		else{
			value = false;
		}
		break;
		case "hour":
		if(value1 == 1){
			value = 60*60;
		}
		else if(value1 == {}){
			value = false;
		}
		else{
			value = false;
		}
		break;
		case "day":
		if(value1 == 1){
			value = 60*60*24;
		}
		else if(value1 == {}){
			value = false;
		}
		else{
			value = false;
		}
		break;
		case "seconds":
		if(value1 == 1){
			value = false;
		}
		else if(value1 == {}){
			value = false;
		}
		else{
			value = value1;
		}
		break;
		case "minutes":
		if(value1 == 1){
			value = false;
		}
		else if(value1 == {}){
			value = false;
		}
		else{
			value = value1*60;
		}
		break;
		case "hours":
		if(value1 == 1){
			value = false;
		}
		else if(value1 == {}){
			value = false;
		}
		else{
			value = value1*60*60;
		}
		break;
		case "days":
		if(value1 == 1){
			value = false;
		}
		else if(value1 == {}){
			value = false;
		}
		else{
			value = value1*60*60*24;
		}
		break;
		default:
			value = false;
		break;	
    }
		switch(lable2){
		case "second":
		if(value2 == 1){
			value_ = 1;
		}
		else if(value1 == {}){
			value = false;
		}
		else{
			value_ = false;
		}
		break;
		case "minute":
		if(value2 == 1){
			value_ = 60;
		}
		else if(value2 == {}){
			value = false;
		}
		else{
			value_ = false;
		}
		break;
		case "hour":
		if(value2 == 1){
			value_ = 60*60;
		}
		else if(value2 == {}){
			value = false;
		}
		else{
			value_ = false;
		}
		break;
		case "day":
		if(value2 == 1){
			value_ = 60*60*24;
		}
		else if(value2 == {}){
			value = false;
		}
		else{
			value_ = false;
		}
		break;
		case "seconds":
		if(value2 == 1){
			value_ = false;
		}
		else if(value2 == {}){
			value = false;
		}
		else{
			value_ = value2;
		}
		break;
		case "minutes":
		if(value2 == 1){
			value_ = false;
		}
		else if(value2 == {}){
			value = false;
		}
		else{
			value_ = value2*60;
		}
		break;
		case "hours":
		if(value2 == 1){
			value_ = false;
		}
		else if(value2 == {}){
			value = false;
		}
		else{
			value_ = value2*60*60;
		}
		break;
		case "days":
		if(value2 == 1){
			value_ = false;
		}
		else if(value2 == {}){
			value = false;
		}
		else{
			value_ = value2*60*60*24;
		}
		break;
		default:
			value_ = false;
		break;	
	}
  if(value===false || value_===false){
	convertedval = false;
  }
  else{
	convertedval = value+value_;
}
	return convertedval
}

const x = timeAdder({},"second",{},"minutes");
console.log("The Added Value " + " " + x);

