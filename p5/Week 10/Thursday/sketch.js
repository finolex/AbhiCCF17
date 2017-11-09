var myData;
var url;

function setup(){
	url = "http://api.open-notify.org/iss-now.json";
	myData = loadJSON(url);
	console.log(myData);

	setInterval(queryData, 4000);
}

function draw(){
	if(myData){
		var xPos = myData.iss_position;
		// console.log(xPos);
	} else {
		console.log("Bad data!");
	}
}

function mouseClicked(){
	//loadJSON function takes the packets from the first argument and passes it through the second argument function
	loadJSON(url, dataResponse);
}

//callback function. can't be called except through the loadJSON
function dataResponse(tempData) {
	myData = tempData;
	console.log(tempData);
}

function queryData(){
	loadJSON(url, dataResponse);
}