$('.carousel').carousel({
    pause: "false"
});

$("#carouselExampleFade #content a, .btn").on("click", function(event){
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