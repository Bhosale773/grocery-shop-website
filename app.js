var express = require("express");
var app = express();

var riceProducts = [
    {
        id: "first",
        image: "../images/rice-products-pics/aishwarya.jpg",
        title: "Aishwarya Wada Kolam Organic Rice",
        pSize: "10-50 Kg",
        brand: "Aishwarya",
        shelfLife: "12 Months",
        quality: "A Grade",
        organic: "Organic",
        pType: "Jute Bag",
        price: "Rs 24-90/Kilogram"
    },
    {
        id: "second",
        image: "../images/rice-products-pics/panchshil.jpg",
        title: "Panchshil Old Wada Kolam",
        pSize: "50 kg",
        brand: "Panchshil",
        shelfLife: "12 Months",
        quality: "A Grade",
        organic: "Organic",
        pType: "Jute Bag",
        price: "Rs 5800/Ton"
    },
    {
        id: "third",
        image: "../images/rice-products-pics/kolam.jpg",
        title: "Kolam Rice",
        pSize: "10-50 Kg",
        brand: "-",
        shelfLife: "12 Months",
        quality: "A Grade",
        organic: "Organic",
        pType: "Jute Bag",
        price: "Rs 24-90/Kilogram"
    },
    {
        image: "../images/rice-products-pics/steam.jpg",
        title: "Steam Rice",
        pSize: "10-50 Kg",
        brand: "-",
        shelfLife: "12 Months",
        quality: "A Grade",
        organic: "Organic",
        pType: "Jute Bag",
        price: "Rs 24-90/Kilogram"
    },
    {
        image: "../images/rice-products-pics/steam-jeera.jpg",
        title: "Steam Jira Rice",
        pSize: "10-50 Kg",
        brand: "-",
        shelfLife: "12 Months",
        quality: "A Grade",
        organic: "Organic",
        pType: "Jute Bag",
        price: "Rs 24-90/Kilogram"
    },
    {
        image: "../images/rice-products-pics/jeeraLachkari.jpg",
        title: "Jeera Rice LACHKARI",
        pSize: "10-50 Kg",
        brand: "-",
        shelfLife: "12 Months",
        quality: "A Grade",
        organic: "Organic",
        pType: "Jute Bag",
        price: "Rs 24-90/Kilogram"
    },
    {
        image: "../images/rice-products-pics/kolam-tukda.jpg",
        title: "Kolam Tukda Rice",
        pSize: "10-50 Kg",
        brand: "-",
        shelfLife: "12 Months",
        quality: "A Grade",
        organic: "Organic",
        pType: "Jute Bag",
        price: "Rs 24-90/Kilogram"
    },
    {
        image: "../images/rice-products-pics/pulav.jpg",
        title: "Fresh Organic Pulav Rice",
        pSize: "10-50 Kg",
        brand: "-",
        shelfLife: "12 Months",
        quality: "A Grade",
        organic: "Organic",
        pType: "Jute Bag",
        price: "Rs 24-90/Kilogram"
    },
    {
        image: "../images/rice-products-pics/biryani.jpg",
        title: "Biryani Rice",
        pSize: "10-50 Kg",
        brand: "-",
        shelfLife: "12 Months",
        quality: "A Grade",
        organic: "Organic",
        pType: "Jute Bag",
        price: "Rs 24-90/Kilogram"
    },
    {
        image: "../images/rice-products-pics/old-HMT.jpg",
        title: "Old HMT Rice",
        pSize: "10-50 Kg",
        brand: "-",
        shelfLife: "12 Months",
        quality: "A Grade",
        organic: "Organic",
        pType: "Jute Bag",
        price: "Rs 24-90/Kilogram"
    },
    {
        image: "../images/rice-products-pics/super-mogra.jpg",
        title: "Super Mogra Rice",
        pSize: "10-50 Kg",
        brand: "-",
        shelfLife: "12 Months",
        quality: "100% Pure",
        organic: "Organic and Soft",
        pType: "Jute Bag",
        price: "Rs 24-90/Kilogram"
    },
    {
        image: "../images/rice-products-pics/hmt-raw.jpg",
        title: "HMT Raw Rice",
        pSize: "10-50 Kg",
        brand: "-",
        shelfLife: "12 Months",
        quality: "A Grade",
        organic: "Organic",
        pType: "Jute Bag",
        price: "Rs 24-90/Kilogram"
    },
    {
        image: "../images/rice-products-pics/basmati-tibar.jpg",
        title: "Basmati Tibar Rice",
        pSize: "10-50 Kg",
        brand: "-",
        shelfLife: "12 Months",
        quality: "A Grade",
        organic: "Organic",
        pType: "Jute Bag",
        price: "Rs 24-90/Kilogram"
    },
    {
        image: "../images/rice-products-pics/basmati-tukda.jpg",
        title: "Basmati Tukda Rice",
        pSize: "10-50 Kg",
        brand: "-",
        shelfLife: "12 Months",
        quality: "A Grade",
        organic: "Organic",
        pType: "Jute Bag",
        price: "Rs 24-90/Kilogram"
    },
    {
        image: "../images/rice-products-pics/basmati-biryani.jpg",
        title: "Basmati Biryani Rice",
        pSize: "10-50 Kg",
        brand: "-",
        shelfLife: "12 Months",
        quality: "A Grade",
        organic: "Organic",
        pType: "Jute Bag",
        price: "Rs 24-90/Kilogram"
    },
    {
        image: "../images/rice-products-pics/surti-kolam-broken.jpg",
        title: "Surti Kolam Broken Rice",
        pSize: "10-50 Kg",
        brand: "-",
        shelfLife: "12 Months",
        quality: "A Grade",
        organic: "Organic",
        pType: "Jute Bag",
        price: "Rs 24-90/Kilogram"
    },
    {
        image: "../images/rice-products-pics/surti-wada.jpg",
        title: "Surti Wada Old Rice",
        pSize: "10-50 Kg",
        brand: "-",
        shelfLife: "12 Months",
        quality: "A Grade",
        organic: "Organic",
        pType: "Jute Bag",
        price: "Rs 24-90/Kilogram"
    },
    {
        image: "../images/rice-products-pics/surti-lachkari.jpg",
        title: "Surti Lachkari Rice",
        pSize: "10-50 Kg",
        brand: "-",
        shelfLife: "12 Months",
        quality: "A Grade",
        organic: "Organic",
        pType: "Jute Bag",
        price: "Rs 24-90/Kilogram"
    },
    {
        image: "../images/rice-products-pics/basmati1121.jpg",
        title: "Basmati 1121",
        pSize: "10-50 Kg",
        brand: "-",
        shelfLife: "12 Months",
        quality: "A Grade",
        organic: "Organic",
        pType: "Jute Bag",
        price: "Rs 24-90/Kilogram"
    }
];

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/",function(req, res){
    res.render("landing");
});

app.get("/products/rice", function(req, res){
    res.render("rice",{riceProducts:riceProducts});
});










app.get("*",function(req, res){
    res.send("Page not found");
})

app.listen(process.env.PORT || 1000, function(){
    console.log("Server started");
});