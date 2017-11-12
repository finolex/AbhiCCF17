var myData;
var url;
var newsfeed;
var tempTextH;
var tempTextS;

function setup(){
	baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
    appId = "api-key=864d90e87eda4e419d3b5bc32205ad32"; // use a key that won't get access-blocked
    query = "q=";
    queryInput = "manhattan";
    url = baseUrl + query + queryInput + "&" + appId;
    console.log(url);

	myData = loadJSON(url);
	console.log(myData);

	setInterval(queryData, 3000);

	newsfeed = new Box();
}

function draw(){
	createCanvas(1200, 600);
	background(255, 228, 225);

	if(myData){
		newsfeed.draw();
		newsfeed.headline(str(tempTextH));
		newsfeed.snippet(str(tempTextS));
	} else {
		console.log("Bad data!");
	}
}

//callback function. can't be called except through the loadJSON
function dataResponse(tempData) {
	myData = tempData;
	for (var i = 0; i < tempData.response.docs.length; i++) {
		tempTextH = tempData.response.docs[i].headline.print_headline;
		tempTextS = tempData.response.docs[i].snippet;
	}
}

function queryData(){
	loadJSON(url, dataResponse);
}

function Box(){
	this.x = 200;
	this.y = 150;

	this.draw = function(){
		noStroke();
		fill(30, 144, 255);
		rect(this.x, this.y, 700, 400);
	}

	this.headline = function(_x){
		this.text = _x;
		fill(255);
		textSize(20);
		text(this.text, this.x + 100, this.y + 100);
	}

	this.snippet = function(_x){
		this.text = _x;
		fill(255);
		textSize(10);
		text(this.text, this.x + 100, this.y + 200, 500, 300);
	}
};