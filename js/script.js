$(document).ready(function () {
    $("#login").click(function(){
        $("#loginModal").modal('toggle')
    })
    $('#Reservation').click(function(){
        $('#reservation').modal('toggle')
    })
    
    $('#mycarousel').carousel({
        interval: 2000
    })
    $('[data-toggle="tooltip"]').tooltip();
    $('#carouselButton').click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');                    
    }

    })



});