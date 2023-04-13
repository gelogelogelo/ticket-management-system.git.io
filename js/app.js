$(document).ready(function(){
    // expand sidebar
    $('.menu-btn').click(function(){
        $('.side-bar').removeClass('active');
        $('.menu-btn').css("visibility", "hidden");
    
        
    });

    // remove sidebar or close
    $('.close-btn').click(function(){
        $('.side-bar').addClass('active');
        $('.menu-btn').css("visibility", "visible");
        
    });

})