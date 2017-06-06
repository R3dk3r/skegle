
/* $(document).ready(function(){
    $(".navselect").bind('click', 'navselect', function(){
       if($(".navselect.activelink").length) $(".navselect.activelink").removeClass('activelink');
       $(this).addClass('activelink');
    });
});
*/
/*
$(document).ready(function(){

  $("#homeselect").click(function() {
       $("#homeselect").addClass('linkchange');
       $("#cohortsselect").removeClass('linkchange');
       $("#exploreselect").removeClass('linkchange');
    });
    */


$(document).ready(function(){

$("mainmenu a").on("click", function(){
   $(".navselect").find(".active").removeClass("active");
   $(this).addClass("active");
});

});
