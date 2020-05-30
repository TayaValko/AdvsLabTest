//Buttons for size of items disabled
$(document).ready(function(){
  $( "button:nth-child(2)" ).prop('disabled', true);
  $( "button:nth-child(3)" ).prop('disabled', true);
});

//Change buttons for size of items style
$(".main__header__btn button").click(function(e) {
  $(".main__header__btn button").removeClass('active-list');
  $(this).addClass('active-list');
  $( "button:nth-child(2)" ).prop('disabled', true);
  $( "button:nth-child(3)" ).prop('disabled', true);
  if($( "button:nth-child(1)" ).hasClass('active-list')){
    $("button:nth-child(1) img" ).css('background', '#FFFFFF');
    $("button:nth-child(4) img" ).css('background', '#52458A');
  }
})

//Add class for size of items
$("#four-block-list").click(function(e) {
  clearBlockLists();
  $(".product").addClass('four-block-list');
})

$("#three-block-list").click(function(e) {
  clearBlockLists();
  $(".product").addClass('three-block-list');
})

function clearBlockLists() {
  $(".product").removeClass('four-block-list');
  $(".product").removeClass('one-block-list');
  $(".product").removeClass('two-block-list');
  $(".product").removeClass('three-block-list');
}

//Mobile menu icons
document.querySelector('.menu-icon-wrapper').onclick = function(){
  document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
  document.querySelector('.header').classList.toggle('mobile-openned');
}