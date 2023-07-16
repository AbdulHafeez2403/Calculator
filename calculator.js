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

//now we are proceccing the post request
app.post("/", function (req, res) {
    // console.log(req.body);
    // console.log(req.body.num1);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result =num1+num2;

   res.send("The Result is "+result); 
});
