$(document).ready(function() {


  jQuery(function(){

      jQuery('.dropdown1').click(function(){
            jQuery('.targetDiv').hide();
            jQuery('#tileinput' + 'div'+$(this).attr('target')).show();
      });


      jQuery('.dropdown2').click(function(){
            jQuery('.targetDiv2').hide();
            jQuery('#tileinput' + 'div'+$(this).attr('target')).show();
      });

      jQuery('.navselect').click(function(){
            jQuery('#skegleselect').removeClass('navlinkbackground');
            jQuery('.targetcanvas').hide();
            jQuery('#canvasinput' +$(this).attr('navselecttarget')).show();
      });



  });















});
