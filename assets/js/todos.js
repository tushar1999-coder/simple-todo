// setTimeout(function ()
// {
//     location.reload(); });

// $("body").on("mouseleave",function()
// {
//     location.reload();
// });

///////////
//check off specific todos by clicking`
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//click X to delete a todo
$("ul").on("click", ".delete", function (event) {
  $(this).parent().children().fadeToggle(300);

  //if element already there fadein doesn't work
  $(this).parent().children().first().attr("style", "display:inline-block");
  //if on the above line i write "display:inline" then animation don't work

  $(this).parent().children().last().attr("style", "display:none");

  $(this).parent().fadeOut(500);

  event.stopPropagation();
});

//check whether undo clicked or not

//adding a new todo
$("input[type='text']").on("keypress", function (event) {
  // console.log(typeof(event.which));
  if (event.which === 13) {
    //enter pressed
    //grabbing new todo text from input
    let todo = $(this).val();
    // for(let i=0;i<todo.length;i+=25)
    // {
    //     todo=todo.slice(0,i)+"\n"+todo.slice(i);

    // }
    $(this).val("");
    //create a new li and add it to ul
    $("ul").prepend(
      "<li>  <span class='delete'> <i class='fa fa-trash-o' aria-hidden='true'></i> </span>  <span class='todoText'>" +
        todo +
        "</span> <span class='.useless'></span> </li>"
    );
    // $("ul").children().first().css("height","100px");
  }
});

//+ icon
$(".fa-plus").on("click", function () {
  console.log("+clicked");
  $("input[type='text']").fadeToggle(500);
});

//todo list apears after delay

setTimeout(function () {
  $("#container").fadeIn(500);
}, 500);
