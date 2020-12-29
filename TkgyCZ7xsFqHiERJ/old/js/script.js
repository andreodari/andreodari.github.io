$(document).ready(function(){
    $(".trigger").click(function(){
        numIndex = $(this).index();
        $(".active-card").removeClass("active-card");
        $(".card:eq(" + numIndex + ")").addClass("active-card");
        $(".trigger").removeClass("active-trigger");
        $(".trigger:eq(" + numIndex + ")").addClass("active-trigger");
    });
});