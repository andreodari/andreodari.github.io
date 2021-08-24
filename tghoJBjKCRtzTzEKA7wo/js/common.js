$(document).ready(function(){

    $(".nav-bar").click(function(){
        $(".mobile-menu").addClass("mobile-menu_active");
    });
    $(".nav-bar__clouse").click(function(){
        $(".mobile-menu").removeClass("mobile-menu_active");
        
    });
  });