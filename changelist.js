
// This is the first drop down list
$(document).ready(function(){
$('#dropselect1').click(function() {
 $('#dropdownselector1').text('Tile One');
$(this).hide();
})
});


$(document).ready(function(){

$('#dropselect2').click(function() {
$('#dropdownselector1').text('Tile Two');
$(this).hide();
})
});

$(document).ready(function(){

$('#dropselect3').click(function() {
$('#dropdownselector1').text('Tile Three');
$(this).hide();

})
});

$(document).ready(function(){

$('#dropselect4').click(function() {
$('#dropdownselector1').text('Tile Four');
$(this).hide();
})
});

$(document).ready(function(){
$('#dropselect5').click(function() {
 $('#dropdownselector1').text('Tile Five');
$(this).hide();
})
});

$(document).ready(function(){
$('#dropselect6').click(function() {
 $('#dropdownselector1').text('Tile Six');
$(this).hide();
})
});

$(document).ready(function(){
$('#dropselect7').click(function() {
 $('#dropdownselector1').text('Tile Seven');
$(this).hide();
})
});

$(document).ready(function(){
$('#dropselect8').click(function() {
 $('#dropdownselector1').text('Tile Eight');
$(this).hide();
})
});



// This is the Second drop down list


$(document).ready(function(){
$('#2dropselect1').click(function() {
 $('#dropdownselector2').text('Tile One');
$(this).hide();
})
});


$(document).ready(function(){

$('#2dropselect2').click(function() {
$('#dropdownselector2').text('Tile Two');
$(this).hide();
})
});

$(document).ready(function(){

$('#2dropselect3').click(function() {
$('#dropdownselector2').text('Tile Three');
$(this).hide();

})
});

$(document).ready(function(){

$('#2dropselect4').click(function() {
$('#dropdownselector2').text('Tile Four');
$(this).hide();
})
});

$(document).ready(function(){
$('#2dropselect5').click(function() {
 $('#dropdownselector2').text('Tile Five');
$(this).hide();
})
});

$(document).ready(function(){
$('#2dropselect6').click(function() {
 $('#dropdownselector2').text('Tile Six');
$(this).hide();
})
});

$(document).ready(function(){
$('#2dropselect7').click(function() {
 $('#dropdownselector2').text('Tile Seven');
$(this).hide();
})
});

$(document).ready(function(){
$('#2dropselect8').click(function() {
 $('#dropdownselector2').text('Tile Eight');
$(this).hide();
})
});




// THis is the code needed to hide and show buttons based on what's active
$(document).ready(function(){
$('#dropdownselector1').click(function() {


  if (( $(this).text() != 'Tile One')){


    if(($("#dropdownselector2").text() == 'Tile One')){

      $("#dropselect1").hide();

    }else{

        $("#dropselect1").show();
    }




  }

  if (($(this).text() != 'Tile Two')){


    if(($("#dropdownselector2").text() == 'Tile Two')){

      $("#dropselect2").hide();

    }else{

        $("#dropselect2").show();
    }


  }



if ($(this).text() != 'Tile Three'){

  if(($("#dropdownselector2").text() == 'Tile Three')){

    $("#dropselect3").hide();

  }else{

      $("#dropselect3").show();
  }

}

if ($(this).text() != 'Tile Four'){

  if(($("#dropdownselector2").text() == 'Tile Four')){

    $("#dropselect4").hide();

  }else{

      $("#dropselect4").show();
  }


}

if ($(this).text() != 'Tile Five'){

  if(($("#dropdownselector2").text() == 'Tile Five')){

    $("#dropselect5").hide();

  }else{

      $("#dropselect5").show();
  }


}

if ($(this).text() != 'Tile Six'){



  if(($("#dropdownselector2").text() == 'Tile Six')){

    $("#dropselect6").hide();

  }else{

      $("#dropselect6").show();
  }

}

if ($(this).text() != 'Tile Seven'){

  if(($("#dropdownselector2").text() == 'Tile Seven')){

    $("#dropselect7").hide();

  }else{

      $("#dropselect7").show();
  }

}

if ($(this).text() != 'Tile Eight'){

  if(($("#dropdownselector2").text() == 'Tile Eight')){

    $("#dropselect8").hide();

  }else{

      $("#dropselect8").show();
  }


}





})
});




// THis is the code needed to hide and show buttons based on what's active for
// the second dropdownselector2



$(document).ready(function(){
$('#dropdownselector2').click(function() {


  if ($(this).text() != 'Tile One'){

    if(($("#dropdownselector1").text() == 'Tile One')){

      $("#2dropselect1").hide();

    }else{

        $("#2dropselect1").show();

    }


  }


  if ($(this).text() != 'Tile Two'){


    if(($("#dropdownselector1").text() == 'Tile Two')){

      $("#2dropselect2").hide();

    }else{

        $("#2dropselect2").show();

    }


  }

if ($(this).text() != 'Tile Three'){




  if(($("#dropdownselector1").text() == 'Tile Three')){

    $("#2dropselect3").hide();

  }else{

      $("#2dropselect3").show();

  }

}

if ($(this).text() != 'Tile Four'){



  if(($("#dropdownselector1").text() == 'Tile Four')){

    $("#2dropselect4").hide();

  }else{

      $("#2dropselect4").show();

  }

}

if ($(this).text() != 'Tile Five'){


  if(($("#dropdownselector1").text() == 'Tile Five')){

    $("#2dropselect5").hide();

  }else{

      $("#2dropselect5").show();

  }


}

if ($(this).text() != 'Tile Six'){



  if(($("#dropdownselector1").text() == 'Tile Six')){

    $("#2dropselect6").hide();

  }else{

      $("#2dropselect6").show();

  }

}

if ($(this).text() != 'Tile Seven'){


  if(($("#dropdownselector1").text() == 'Tile Seven')){

    $("#2dropselect7").hide();

  }else{

      $("#2dropselect7").show();

  }

}

if ($(this).text() != 'Tile Eight'){


  if(($("#dropdownselector1").text() == 'Tile Eight')){

    $("#2dropselect8").hide();

  }else{

      $("#2dropselect8").show();

  }

}



})
});
