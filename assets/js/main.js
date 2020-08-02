// reminder -> click() adds to existing elements, on() adds to exising and future** elements
//** from parent conatiner

// $('li').on('click', function () {
//   $(this).toggleClass('completed');
// });

// same as

// $('li').click(), function() {
//   $(this).toggleClass('completed')
// }

//** */ change selecting element to parent to affect future elements
// $('parent element').on('event', 'child that will be receiving event' , function(){})

// check off todo by click
$('ul').on('click', 'li', function () {
  $(this).toggleClass('completed');
});

// click on X to delete
$('ul').on('click', '.delete', function (e) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  e.stopPropagation();
});

// add a new task event
$('.add').click(function () {
  $('input').toggle('display');
  $('input').toggleClass('animate__animated animate__slideInLeft');
});

// add a new task from input
$("input[type='text']").keypress(function (e) {
  // user hits 'enter'
  if (e.which == 13) {
    // grab task
    let task = $(this).val();
    // clear text input
    $(this).val('');
    // create new li
    $('ul').append(`<li><span class="delete"><i class="fas fa-trash-alt"></i></span>${task}</li>`);
  }
});
