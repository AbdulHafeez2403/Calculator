const express = require('express');
const bodyParser = require("body-parser");      //for fetching the info from post

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//body-parser is used with express
//bodyParser.text will give all info in txt formate
//bodyparser.json will give us in js object fromate
//bodyParser.urlencoded 

app.listen(3000, function() {
    console.log(`Server started at port 3000.`);
});

app.get("/", function (req, res) {
    // res.send("Hello, World!!!!");
    // console.log(__dirname);
    res.sendFile(__dirname+"/index.html");
    //__dirname will return the path of dir from root
});

app.get("/bmiCalculator", function (req, res) {         //for BMI calc
   res.sendFile(__dirname+"/bmiCalculator.html"); 
});

//now we are proceccing the post request
app.post("/", function (req, res) {
    // console.log(req.body);
    // console.log(req.body.num1);
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result =num1+num2;

   res.send("<h1>The Result is "+result+"</h1>"); 
});

app.post("/bmiCalculator" , function (req, res) {
    var w = parseFloat(req.body.weight);
    var h = parseFloat(req.body.height);
    var bmi = w/(h*h);

    res.send(`<h1>Your BMI is ${bmi}</h1>`);
});
