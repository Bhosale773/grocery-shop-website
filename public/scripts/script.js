$('.carousel').carousel({
    pause: "false"
});

$("#carouselExampleFade #content a").on("click", function(event){
    if(this.hash !== ""){
        event.preventDefault();
        const hash = this.hash;
        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 65
            }, 800
        );
    }
});

$(document).ready(function(){
    var speed = 200;

    // check for hash and if div exist... scroll to div
    var hash = window.location.hash;
    if($(hash).length) scrollToID(hash, speed); 

    // scroll to div on nav click
    $('.know_more .product_list .direct_link').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        if($(id).length) scrollToID(id, speed);
    });
})

function scrollToID(id, speed) {
    var offSet = 100;
    var obj = $(id).offset();
    var targetOffset = obj.top - offSet;
    $('html,body').animate({ scrollTop: targetOffset }, speed);
}

if(window.location.pathname == "/"){
    $("nav .n-list").find('li.active').removeClass("active");
    $("nav .n-list .home").addClass("active");
}
else if(window.location.pathname == "/login"){
    $("nav .n-list").find('li.active').removeClass("active");
    $("nav .n-list .login").addClass("active");
}
else if(window.location.pathname == "/signup"){
    $("nav .n-list").find('li.active').removeClass("active");
    $("nav .n-list .signup").addClass("active");
}
else if(window.location.pathname == "/aboutus"){
    $("nav .n-list").find('li.active').removeClass("active");
    $("nav .n-list .aboutus").addClass("active");
}
else if(window.location.pathname == "/contactus"){
    $("nav .n-list").find('li.active').removeClass("active");
    $("nav .n-list .contactus").addClass("active");
}

// Get the modal
var modal = document.querySelectorAll('.mod');

// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
    for(var i=0; i<modal.length; i++){
        if (event.target == modal[i]) {
            modal[i].style.display = "none";
        }
    }
}


