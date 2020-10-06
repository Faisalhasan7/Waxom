$(function(){
    
//Veno Nox
    $(document).ready(function(){
        $('.venobox').venobox(); 
    });

//Coounter
    jQuery(document).ready(function($) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }); 
    
//Back to TOp    
    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0},1500);
    });

// back top button fadein fadeout / menu add class  
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 200){
           $('.back-to-top').fadeIn(500);
        }
        else {
            $('.back-to-top').fadeOut(500);
        }

        if(scrolling > 150){
            $('.navbar').addClass('navbar2');
        }
        else {
            $('.navbar').removeClass('navbar2');
        }
    }); 
        
//animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 100
                }, 1500, );
                return false;
            }
        }
    });       
    
    
       

    
});