var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/",function(req, res){
    res.render("landing");
});

app.get("/products/rice", function(req, res){
    res.render("rice");
});










app.get("*",function(req, res){
    res.send("Page not found");
})

app.listen(process.env.PORT || 1000, function(){
    console.log("Server started");
});