$("#middle-tabs ul li a").click(function(event){
    event.preventDefault();
    $("#middle-tabs ul li a").removeClass("active");
    $(this).addClass("active");
    // $(".tab-section").hide();
    // alert($(this).attr("data-target"));
    // $("#" + $(this).attr("data-target")).show();
    $(".middletabs-body").hide();
    $("#" + $(this).attr("data-target")).show();
})
