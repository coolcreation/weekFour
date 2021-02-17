//     Jeff Bohn   1/29/2021 

//     add Regex 2/14/2021


"use strict";

const isDate = (date, datePattern, type) => {
    if (!datePattern.test(date)) { return false; }

    if (type == "fullDate") {
        const dateParts = date.split("/");
        const month = parseInt( dateParts[0] );
        const day = parseInt( dateParts[1] );

        if ( month < 1 || month > 12 ) { return false; }
        if ( day > 31 ) { return false; }
        return true;
    }
   /* if (type == "shortDate") {
        const index = date.indexOf( "/" );
        const month = parseInt( date.substring( 0, index ) );

        if ( month < 1 || month > 12 ) { return false; }
        return true;
    }  */
};

$( document ).ready( () => {

    $( "#join_list" ).click( () => {
        $("span").text("");   // clear any previous error messages
        
        // get values entered by user
        const email = $("#email").val();
        const dob = $("#dob").val();
        const name = $("#name").val();

        // regular expressions for validity testing
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        const datePattern = /^[01]?\d\/[0-3]\d\/\d{4}$/;
        const namePattern = /^[a-zA-Z]+$/;

        // check user entries for validity
        let isValid = true;
        if ( name === "" || !namePattern.test(name) ) {
            isValid = false;
            $("#name").next().text("Please enter only Letters");
        }
        if ( email === "" || !emailPattern.test(email) ) {
            isValid = false;
            $("#email").next().text("Please enter email in X@X.X");
        }
        if ( dob === "" || !isDate(dob, datePattern, "fullDate") ) {
            isValid = false;
            $("#dob").next().text("Enter date in MM/DD/YYYY format.");
        }
        if ( isValid ) { 
            $("#email_form").submit();   // code that saves profile info goes here
        }
 
    });
    
    $( "#clear_form" ).click( () => {

    $("#email").val(""); 
    $("#dob").val("");
    $("#name").val("");

    $("#email").focus();
   });

    $("#email").focus();
});




/// _______________________slider code___________________________________
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
});   */




/*    "use strict"

"use strict"

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
    $("#join_list").addEventListener("click", () => {
        // get values user entered in textboxes
        const email1 = $("#email_1");
        const email2 = $("#email_2");
        const firstName = $("#first_name");
    
        // bool check if the entries are valid
           let isValid = true;

        // check user entries - add text to error message if invalid
        if (email1.value == "") { 
            email1.nextElementSibling.textContent = "This field is required.";
            isValid = false; 
        }
    
        if (email2.value == "") { 
            email2.nextElementSibling.textContent = "This field is required.";
            isValid = false; 
        }
    
        if (email1.value != email2.value) { 
            email2.nextElementSibling.textContent = "Email addresses must match.";
            isValid = false; 
        }
    
        if (firstName.value == "") {
            firstName.nextElementSibling.textContent = "First name is required.";
            isValid = false;
        }
        if(!isNaN(parseInt(firstName.value))) {     // added: checking for letters only in name 
            firstName.nextElementSibling.textContent = "Please enter only letters.";
            isValid = false;
           }
         else{
            firstName.nextElementSibling.textContent = "";
         }
        
        if (isValid) {
            $("#email_form").submit();
        } 
    });

    $("#clear_form").addEventListener("click", () => {
        $("#email_1").value = "";
        $("#email_2").value = "";
        $("#first_name").value = "";

        $("#email_1").focus();
    });
    
    $("#email_1").focus();
});
   */