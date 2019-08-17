var express               = require("express");
var app                   = express();
var riceProducts          = require("./productsData/riceProducts");
var sugarProducts         = require("./productsData/sugarProducts");
var jaggeryProducts       = require("./productsData/jaggeryProducts");
var pulsesProducts        = require("./productsData/pulsesProducts");
var channaProducts        = require("./productsData/channaProducts");
var newProducts           = require("./productsData/newProducts");
var mongoose              = require("mongoose");
var bodyParser            = require("body-parser");
var passport              = require("passport");
var LocalStrategy         = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var flash                 = require("connect-flash");
var methodOverride        = require("method-override");
    
mongoose.connect("mongodb://localhost:27017/grocerry_shop_db",{useNewUrlParser:true});
mongoose.set('useFindAndModify', false);


var historySchema = new mongoose.Schema({
    product: String,
    quantity: String,
    typeOfDelivery: String
 });

var History = mongoose.model("History", historySchema);

var commentSchema = mongoose.Schema({
    text: String,
    starValue: Number,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});

var Comment = mongoose.model("Comment", commentSchema);

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    fname: String,
    lname: String,
    contact: String,
    email: String,
    history: [
        historySchema
    ],
    comments: [
        commentSchema
    ]
});

UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model("User", UserSchema);

app.set("view engine", "ejs");

app.use(flash());

app.use(methodOverride("_method"));

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
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});




app.get("/",function(req, res){
    Comment.find({},function(err,comments){
        if(err){
            console.log(err);
        }else{
            res.render("landing", {comments:comments});
        }
    });
});

app.get("/products/rice",isLoggedIn, function(req, res){
    res.render("products/rice",{riceProducts:riceProducts});
});

app.get("/products/sugar",isLoggedIn, function(req, res){
    res.render("products/sugar",{sugarProducts:sugarProducts});
});

app.get("/products/jaggery",isLoggedIn, function(req, res){
    res.render("products/jaggery",{jaggeryProducts:jaggeryProducts});
});

app.get("/products/pulses",isLoggedIn, function(req, res){
    res.render("products/pulses",{pulsesProducts:pulsesProducts});
});

app.get("/products/channa",isLoggedIn, function(req, res){
    res.render("products/channa",{channaProducts:channaProducts});
});

app.get("/products/new",isLoggedIn, function(req, res){
    res.render("products/new",{newProducts:newProducts});
});

app.post("/products/:product", function(req, res){
    History.create({
        product: req.body.title,
        quantity: req.body.quantity + " " + req.body.unit,
        typeOfDelivery: req.body.typeOfDelivery
    },function(err, history){
        if(err){
            console.log(err);
        }
        User.findOne({username: req.user.username},function(err, user){
            if(err){
                console.log(err);
            }else{
                user.history.push(history);
                user.save(function(err, data){
                    if(err){
                        console.log(err);
                    }else{
                        console.log(data);
                    }
                });
            }
        });
    })
    req.flash("success", "Thank You for choosing Us. We will contact you shortly.");
    res.redirect("/products/"+req.params.product);
})







app.get("/login", function(req, res){
    res.render("login");
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    successFlash: "You have Sign In successfully.",
    failureFlash: "Invalid username or password."
}) ,function(req, res){
});

app.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "You have Log Out Successfully.");
    res.redirect("/");
});

app.get("/signup", function(req, res){
    res.render("signup");
});

app.post("/signup", function(req, res){
    User.register(new User({username: req.body.username, fname: req.body.fname, lname: req.body.lname, email: req.body.email, contact: req.body.contact}), req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            res.redirect("/signup");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "You have registered successfully.");
            res.redirect("/");
        });
    });
});


app.get("/comments/new", isLoggedIn, function(req, res){
    res.render("comments/new");
});

app.post("/comments", isLoggedIn, function(req, res){
    Comment.create(req.body, function(err, comment){
        if(err){
            console.log(err);
        }else{
            comment.author.id = req.user._id;
            comment.author.username = req.user.username;
            comment.save(function(err, comment){
                if(err){
                    console.log(err);
                }else{
                    User.findOne({username: req.user.username},function(err, user){
                        if(err){
                            console.log(err);
                        }else{
                            user.comments.push(comment);
                            user.save();
                            req.flash("success", "Review added successfully.")
                            res.redirect("/");
                        }
                    });
                }
            });
        }
    });
});

app.get("/edit-comments/:id", isCommentOwner, function(req, res){
    Comment.findById(req.params.id, function(err, comment){
        if(err){
            console.log(err);
        }else{
            res.render("comments/edit", {comment: comment});
        }
    });
});

app.put("/comments/:id", isCommentOwner, function(req, res){
    Comment.findByIdAndUpdate(req.params.id, req.body, function(err, comment){
        if(err){
            console.log(err);
        }else{
            req.flash("success", "Review updated successfully.");
            res.redirect("/");
        }
    });
});

app.delete("/comments/:id", isCommentOwner, function(req, res){
    Comment.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log(err);
        }
        else{
            req.flash("success", "Review deleted successfully");
            res.redirect("/");
        }
    });
});


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You must be Sign In first.");
    res.redirect("/login");
}

function isCommentOwner(req, res, next) {
    if(req.isAuthenticated()){
        Comment.findById(req.params.id, function(err, foundComment){
            if(err){
                res.redirect("back");
            }else{
                if(foundComment.author.id.equals(req.user._id)) {
                    next();
                } else {
                    req.flash("error", "You don't have permission to do that");
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "You must be Sign In first.");
        res.redirect("/login");
    }
}



app.get("*",function(req, res){
    res.send("Page not found");
});

app.listen(process.env.PORT || 1000, function(){
    console.log("Server started");
});