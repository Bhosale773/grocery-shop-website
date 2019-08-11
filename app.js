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

var sugarProducts = [
    {
        id: "first",
        image: "../images/sugar-products-pics/white.jpg",
        title: "Pure White Sugar",
        pSize: "10-50 Kg",
        shelfLife: "12 Months",
        quality: "A Grade",
        organic: "Organic",
        pType: "Packet",
        price: "Rs 34-37/Kilogram"
    },
    {
        id: "second",
        image: "../images/sugar-products-pics/raw.jpg",
        title: "Pure Raw Sugar",
        pSize: "10-50 kg",
        shelfLife: "12 Months",
        quality: "A Grade",
        organic: "Organic",
        pType: "Packet",
        price: "Rs 34-37/Kilogram"
    },
    {
        id: "third",
        image: "../images/sugar-products-pics/refined.jpg",
        title: "Pure White Refined Sugar",
        pSize: "10-50 Kg",
        shelfLife: "12 Months",
        quality: "A Grade",
        organic: "Organic",
        pType: "Packet",
        price: "Rs 34-37/Kilogram"
    }
];

var jaggeryProducts = [
    {
        id: "first",
        image: "../images/jaggery-products-pics/jaggery.jpg",
        title: "Pure Organic Sugarcane Jaggery",
        pSize: "10-25 Kg",
        shelfLife: "12 Months",
        quality: "A Grade",
        organic: "Organic",
        pType: "Bag",
        price: "Rs 20-50/Kilogram"
    }
];

var pulsesProducts = [
    {
        id: "first",
        image: "../images/pulses-products-pics/arhar.jpg",
        title: "Organic Arhar Pulses",
        pSize: "10-50 Kg",
        variety: "Arhar",
        shelfLife: "6 Months",
        organic: "Organic",
        pType: "Plastic Bag",
        price: "Rs 45-130/Kilogram"
    },
    {
        id: "second",
        image: "../images/pulses-products-pics/channa.jpg",
        title: "Organic Channa Pulses",
        pSize: "10-50 Kg",
        variety: "Channa",
        shelfLife: "6 Months",
        organic: "Organic",
        pType: "Plastic Bag",
        price: "Rs 45-130/Kilogram"
    },
    {
        id: "third",
        image: "../images/pulses-products-pics/moong.jpg",
        title: "Organic Moong Pulses",
        pSize: "10-50 Kg",
        variety: "Moong",
        shelfLife: "6 Months",
        organic: "Organic",
        pType: "Plastic Bag",
        price: "Rs 45-130/Kilogram"
    },
    {
        image: "../images/pulses-products-pics/urad.jpg",
        title: "Organic Urad Pulses",
        pSize: "10-50 Kg",
        variety: "Urad",
        shelfLife: "6 Months",
        organic: "Organic",
        pType: "Plastic Bag",
        price: "Rs 45-130/Kilogram"
    },
    {
        image: "../images/pulses-products-pics/white-eyed.jpg",
        title: "Organic White Eyed Pulses",
        pSize: "10-50 Kg",
        variety: "Lobia",
        shelfLife: "6 Months",
        organic: "Organic",
        pType: "Plastic Bag",
        price: "Rs 45-130/Kilogram"
    },
    {
        image: "../images/pulses-products-pics/white-peas.jpg",
        title: "Organic White Peas Pulses",
        pSize: "10-50 Kg",
        variety: "Peas",
        shelfLife: "6 Months",
        organic: "Organic",
        pType: "Plastic Bag",
        price: "Rs 45-130/Kilogram"
    },
    {
        image: "../images/pulses-products-pics/whole-moong.jpg",
        title: "Organic Whole Moong Pulses",
        pSize: "10-50 Kg",
        variety: "Moong",
        shelfLife: "6 Months",
        organic: "Organic",
        pType: "Plastic Bag",
        price: "Rs 45-130/Kilogram"
    }
];

var channaProducts = [
    {
        id: "first",
        image: "../images/channa-products-pics/organic-desi.jpg",
        title: "Organic Desi Channa",
        pSize: "25 Kg",
        variety: "Channa",
        shelfLife: "6 Months",
        organic: "Organic",
        pType: "Plastic Bag",
        price: "Rs 45-130/Kilogram"
    },
    {
        id: "second",
        image: "../images/channa-products-pics/desi-chickpea.jpg",
        title: "Desi Chickpea Channa",
        pSize: "10-50 Kg",
        variety: "Channa",
        shelfLife: "6 Months",
        organic: "Organic",
        pType: "Plastic Bag",
        price: "Rs 45-130/Kilogram"
    }
];

var newProducts = [
    {
        id: "first",
        image: "../images/new-products-pics/kurbania-super.jpg",
        title: "Kurbania Super Dubar",
        brand: "KURBANIA",
        pSize: "40 Kg/Bag",
        variety: "Medium Grain Rice",
        type: "Panjab Basmati",
        color: "Yellow",
        price: "Rs 1820/Bag"
    },
    {
        id: "second",
        image: "../images/new-products-pics/kurbania-tibar.jpg",
        title: "Kurbania Tibar",
        brand: "KURBANIA",
        pSize: "40 Kg/Bag",
        variety: "-",
        type: "Panjab Basmati",
        color: "Yellow",
        price: "Rs 2050/Bag"
    },
    {
        id: "third",
        image: "../images/new-products-pics/qurbania-basmati.jpg",
        title: "Qurbania Basmati Mini Dubar",
        brand: "QURBANIA",
        pSize: "40 Kg/Bag",
        variety: "-",
        type: "Basmati",
        color: "Yellow",
        price: "Rs 4000/Bag"
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