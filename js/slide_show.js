//     Jeff Bohn   2/5/2020   
"use strict";
   

$(function () {
    let nextSlide = $("#slides img:first-child");  // nextSlide variable
      
    

    // start slide show
    setInterval( () => {   
        $("#caption").hide(2000);
        $("#slide").fadeIn(2000,() => {  // #slide is the first slide in HTML, then uses slideUp() function and timer
            if (nextSlide.next().length == 0) {  // tests if "slides" div has a length of zero
                nextSlide = $("#slides img:first-child");  // #slides holds all the rest of the images, first-child is next in line
            }
            else {
                 nextSlide = nextSlide.next(); //sets nextSlide variable to the first img element in #slides div
            }
                const nextSlideSource = nextSlide.attr("src");
                const nextCaption = nextSlide.attr("alt");
                $("#slide").attr("src", nextSlideSource).fadeOut(2000);                    
                $("#caption").text(nextCaption).show(2000);
        });    // end fadeOut()
    },2000);   // end timer
   
    //Added to hide on mouse over
   $("#mainAll").mouseover(function(){
        $("#mainAll").hide();
    });
    
    $("#mainAll").mouseout(function(){
         $("#mainAll").show();
     });
});






/*
$(function () {
    let nextSlide = $("#slides img:first-child");  // nextSlide variable
      
    

    // start slide show
    setInterval( () => {   
        $("#caption").hide(1000);
        $("#slide").slideUp(2000,() => {  // #slide is the first slide in HTML, then uses slideUp() function and timer
            if (nextSlide.next().length == 0) {  // tests if "slides" div has a length of zero
                nextSlide = $("#slides img:first-child");  // #slides holds all the rest of the images, first-child is next in line
            }
            else {
                 nextSlide = nextSlide.next(); //sets nextSlide variable to the first img element in #slides div
            }
                const nextSlideSource = nextSlide.attr("src");
                const nextCaption = nextSlide.attr("alt");
                $("#slide").attr("src", nextSlideSource).slideDown(2000);                    
                $("#caption").text(nextCaption).show(1000);
        });    // end fadeOut()
    },2000);   // end timer
   
    //Added to hide on mouse over, not required for assignment
   $("#mainAll").mouseover(function(){
        $("#mainAll").hide();
    });
    
    $("#mainAll").mouseout(function(){
         $("#mainAll").show();
     });
});


*/
  

