// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
//storing color from picker
var color = $('#colorPicker').val();
var colorCheck;

function makeGrid(event) {
  event.preventDefault();
//to empty the table each time submit is clicked
  $('#pixelCanvas').empty();
  var row = $('#inputHeight').val();
  var column = $('#inputWidth').val();
  //setting the range
  if(row==0||column==0||row>50||column>50){
    return alert('Please enter the values in the range 1-50');
  }
  //loop for creating table cells
  for(var outer = 1;outer <= row;outer++){
    $('#pixelCanvas').append("<tr class=tr"+outer+"></tr>");
    for(var inner = 1;inner <= column;inner++){
      $(".tr"+outer).append("<td></td>");
    }
}
$('#pixelCanvas').css('box-shadow','-2px 0px 2px red,2px 0 2px cyan');
}

$("input[type='submit']").click(makeGrid);


//removing box-shadow when there is no table
$(function(){
  if($('#pixelCanvas').is(':empty')){
    $('#pixelCanvas').css('box-shadow','none');
  }
  $('#dummy').css('background-color',color);
  colorCheck = $('#dummy').css('background-color');
});

//change the stored color value when different color is selected from picker
$('#colorPicker').change(function(event){
  color = event.target.value;
  $('#dummy').css('background-color',color);
  colorCheck = $('#dummy').css('background-color');
});

//change the cell color on clicking
$('#pixelCanvas').on('click','td',function(){
  if($(this).css('background-color')===colorCheck){
      $(this).css('background-color','');
    }else{
      $(this).css('background-color',color);
    }
});
