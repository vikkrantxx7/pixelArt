// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//store color from picker
let color = $('#colorPicker').val();
let colorCheck;

function makeGrid(event) {
  const ROW = $('#inputHeight').val();
  const COLUMN = $('#inputWidth').val();
  if((ROW>0 && ROW<=50) && (COLUMN>0 && COLUMN<=50)){
      event.preventDefault();
  //empty the table each time submit is clicked
    $('#pixelCanvas').empty();  

  //loop for creating table cells
    for(let outer = 1;outer <= ROW;outer++){
      $('#pixelCanvas').append("<tr class=tr"+outer+"></tr>");
      for(var inner = 1;inner <= COLUMN;inner++){
        $(".tr"+outer).append("<td></td>");
      }
    }
    $('#pixelCanvas').css('box-shadow','-2px 0px 2px red,2px 0 2px cyan');
  }
}
$("input[type='submit']").click(makeGrid);


//remove box-shadow when there is no table
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

//change the cell color on single click
$('#pixelCanvas').on('click','td',function(){
  if($(this).css('background-color')===colorCheck){
      $(this).css('background-color','');
    }else{
      $(this).css('background-color',color);
    }
});
