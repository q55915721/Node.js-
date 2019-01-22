
const express = require('express');
const parser = require('body-parser');

const app = express();
	app.use(parser.urlencoded({extended: true}));
	

app.get('/bmiCalculator',function(req,res){
	
	res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmiCalculator',function(req,res){
	
	// weight divide h * h 
	var weight = Number(req.body.w);
	var height = Number(req.body.h);
	var result = Math.floor(weight / (height * height));
	res.send('Your BMI is' + " " + result);
	
})


app.get('/',function(req,res){
	res.sendFile(__dirname + "/index.html");	
});

app.post('/',function(req,res){
// 	
	var num1 = Number(req.body.n1);
	var num2 = Number(req.body.n2);
	var result = num1 + num2;
	console.log(req.body.n1);
	res.send("The result of the calculation is" + " " + result);
	
});

app.listen(3000,function(){
	console.log('server started on port 3000.');
});