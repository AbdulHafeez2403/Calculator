const express = require('express');
const app = express();

app.listen(3000, function() {
    console.log(`Server started at port 3000.`);
});

app.get("/", function (req, res) {
    // res.send("Hello, World!!!!");
    // console.log(__dirname);
    res.sendFile(__dirname+"/index.html");
    //__dirname will return the path of dir from root
});
