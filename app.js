$(document).ready(function(){

  $('#list-items').html(localStorage.getItem('listItems'));

  $('.add-items').submit(function(event){
    event.preventDefault();
    var item = $('#todo-list-item').val();

    $('#list-items').append("<li>" + item + "<a class='remove'>Clear</a></li>");
    localStorage.setItem('listItems', $('#list-items').html());
    $('#todo-list-item').val("");
  });


  $(document).on('click', '.remove', function(){
    $(this).parent().remove();
    localStorage.setItem('listItems', $('#list-items').html());
  });


});