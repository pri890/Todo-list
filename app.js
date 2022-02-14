//mark todo as completed
$('ul').on('click' , 'li', function() {
    // alert("Clicked on li"); //when we'll click on X which is our span, an allert will occur which will say "Clicked on span", when we'll press OK, another alert will be shown saying "Clicked on li"; This is happening because span is inside li, we can say that li is the parent of span. And this is known as EVENT BUBBLING. That when we'll click on any child's evevt listener, it's above parent event listener will also get clicked. and to stop that we use EVENT PROPOGATION. 
    $(this).toggleClass('completed');
})

//to add todo
$('input[type="text"]').keypress(function (event) {
    if(event.which === 13) {
        const todoText = $(this).val();

        const todo= `<li> <span> <i class="fas fa-trash-alt "></i></span>${ todoText}</li>`;

        // const todo= `<li> <span> <img src= "https://www.google.com/search?q=dustbin+icon&rlz=1C1CHBF_enIN979IN979&tbm=isch&source=iu&ictx=1&vet=1&fir=tT6kbmHNlWrk9M%252C8eTHzOFurVB7FM%252C_%253ByaJWo6fRc-lKOM%252CVWhtakDb4JmZQM%252C_%253BcouUHgqguq1XmM%252CESwcYluGIZR2XM%252C_%253B5aAov8R_qYih6M%252CfAoV7myot4qzxM%252C_%253BH_Y3m9QPl3hqGM%252CtEthvH-v__hUoM%252C_%253Bn8MM3g-_QsLfYM%252C2qlguT2_hmEAzM%252C_%253BEfUzmBz7XDdjoM%252CnRIVQzwdY57W0M%252C_%253BkVIyHFCJrxdd0M%252Ch3JqnMHnggCvCM%252C_%253Bk7aBauS8RoSx5M%252C2FLKZcGgRd-XSM%252C_%253BJ2hg7pPlkt5HvM%252CHm51e5evryNSmM%252C_%253BovJiDUHTbfrt1M%252CJIwP_TDvoPC6bM%252C_%253B0k6lhNh_ie4nWM%252CwRUpyq6swmOFEM%252C_%253B2CPYhpT4ZxPyTM%252CvI7Jj8CqXkvq4M%252C_%253BGeiJ2CesM4CFHM%252CPBVaFyYcEGZReM%252C_%253BP8KI9mE8DtTZ3M%252CE-bNS_kZ33L5xM%252C_%253BsqzB6bYtEFPUOM%252C-LvFHaLKhiQYSM%252C_&usg=AI4_-kQnm3XFJKrxx8pJIRNEYCIe0RgPeg&sa=X&ved=2ahUKEwjzmuSLhLH1AhUkjOYKHSWSDTUQ9QF6BAgEEAE#imgrc=sqzB6bYtEFPUOM"></img></span>${todoText}</li>`;

        $('ul').append(todo);
        $(this).val(""); //for emptying the todo box after adding item
    }
});

//remove the todo item
$('ul').on('click' , 'span' , function (event) {
    // alert("Clicked on span");
    $(this).parent().fadeOut(800, function () {
        $(this).remove();
    }) // now after adding on click event listener, this.parent() will give us li.
    event.stopPropagation(); //to stop event bubbling
})

$('#plus').click(function () {
    $('input[type = "text"]').fadeToggle();
})