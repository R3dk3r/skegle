
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
       e.preventDefault();
       $("#homeselect").addClass('linkchange');
       $("#cohortsselect").removeClass('linkchange');
       $("#exploreselect").removeClass('linkchange');
    });
});
*/


/*
$(document).ready(function () {
        $('ul.nav > li').click(function (e) {
            e.preventDefault();
            $('ul.nav > li').removeClass('active');
            $(this).addClass('active');
        });
    });\
  */

    $(document).ready(function () {
            $(' .mainselection').click(function (e) {
                e.preventDefault();
                $('.mainselection').removeClass('active');
                $(this).addClass('active');
            });
        });
