var express = require("express");
var app = express();
var riceProducts = require("./productsData/riceProducts");
var sugarProducts = require("./productsData/sugarProducts");
var jaggeryProducts = require("./productsData/jaggeryProducts");
var pulsesProducts = require("./productsData/pulsesProducts");
var channaProducts = require("./productsData/channaProducts");
var newProducts = require("./productsData/newProducts");
var mongoose              = require("mongoose");
var bodyParser            = require("body-parser");
var User                  = require("./models/user");
var passport              = require("passport");
var LocalStrategy         = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
    
mongoose.connect("mongodb://localhost:27017/grocerry_shop_db",{useNewUrlParser:true});

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: true}));

app.use(require("express-session")({
    secret: "This is secret code",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

app.get("/",function(req, res){
    res.render("landing");
});

app.get("/products/rice",isLoggedIn, function(req, res){
    res.render("rice",{riceProducts:riceProducts});
});

app.get("/products/sugar",isLoggedIn, function(req, res){
    res.render("sugar",{sugarProducts:sugarProducts});
});

app.get("/products/jaggery",isLoggedIn, function(req, res){
    res.render("jaggery",{jaggeryProducts:jaggeryProducts});
});

app.get("/products/pulses",isLoggedIn, function(req, res){
    res.render("pulses",{pulsesProducts:pulsesProducts});
});

app.get("/products/channa",isLoggedIn, function(req, res){
    res.render("channa",{channaProducts:channaProducts});
});

app.get("/products/new",isLoggedIn, function(req, res){
    res.render("new",{newProducts:newProducts});
});

app.get("/login", function(req, res){
    res.render("login");
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
}) ,function(req, res){
});

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.get("/signup", function(req, res){
    res.render("signup");
});

app.post("/signup", function(req, res){
    User.register(new User({username: req.body.username, fname: req.body.fname, lname: req.body.lname, email: req.body.email, contact: req.body.contact}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('signup');
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("/");
        });
    });
});










app.get("*",function(req, res){
    res.send("Page not found");
})

app.listen(process.env.PORT || 1000, function(){
    console.log("Server started");
});