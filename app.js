var express = require("express");
var app = express();
var riceProducts = require("./productsData/riceProducts");
var sugarProducts = require("./productsData/sugarProducts");
var jaggeryProducts = require("./productsData/jaggeryProducts");
var pulsesProducts = require("./productsData/pulsesProducts");
var channaProducts = require("./productsData/channaProducts");
var newProducts = require("./productsData/newProducts");


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/",function(req, res){
    res.render("landing");
});

app.get("/products/rice", function(req, res){
    res.render("rice",{riceProducts:riceProducts});
});

app.get("/products/sugar", function(req, res){
    res.render("sugar",{sugarProducts:sugarProducts});
});

app.get("/products/jaggery", function(req, res){
    res.render("jaggery",{jaggeryProducts:jaggeryProducts});
});

app.get("/products/pulses", function(req, res){
    res.render("pulses",{pulsesProducts:pulsesProducts});
});

app.get("/products/channa", function(req, res){
    res.render("channa",{channaProducts:channaProducts});
});

app.get("/products/new", function(req, res){
    res.render("new",{newProducts:newProducts});
});










app.get("*",function(req, res){
    res.send("Page not found");
})

app.listen(process.env.PORT || 1000, function(){
    console.log("Server started");
});