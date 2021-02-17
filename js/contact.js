//   Jeff Bohn    1/27/2021  

"use strict";



$( document ).ready( () => {

    $( "#register" ).click( () => {
        $("span").text("");   // clear any previous error messages
        
        // get values entered by user
        const email = $("#email").val();
        const phone = $("#phone").val();
        const country = $("#country").val();
        const terms = $("#terms").val();
        const comments = $("#comments").val();

        // regular expressions for validity testing
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        //const datePattern = /^[01]?\d\/[0-3]\d\/\d{4}$/;
        const commentsPattern = /^[a-zA-Z]+$/;
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        //const countryPattern = /^[a-zA-Z]+$/;

        // check user entries for validity
   
        let isValid = true;
        if ( email === "" || !emailPattern.test(email) ) {
            isValid = false;
            $("#email").next().text("Please enter email in X@X.X");
        }
         if ( phone === "" || !phonePattern.test(phone) ) {
            isValid = false;
            $("#phone").next().text("Enter in NNN-NNN-NNNN format.");
        }
        if (country === "") {
            isValid = false;
            $("#country").next().text("Enter a country");
        }
       /* if (terms.value == null) { 
            isValid = false;
           $("#terms").next().text("Please accept terms");
        }*/
        if ( comments === "" || !commentsPattern.test(comments) ) {
            isValid = false;
            $("#comments").next().text("Enter a comment.");
        }
        if ( isValid ) { 
            $("#contact_form").submit();   // code that saves profile info goes here
        }
        
    });
    
    $( "#reset_form" ).click( () => {

     $("#email").val(""); 
     $("#phone").val("");
     $("#country").val("");
     $("#terms").val("");
     $("#comments").val("");
    

    $("#email").focus();
   });

    $("#email").focus();
});







/* <label for="comments">Comments:</label>
<textarea name="comments" id="comments" row="5" cols="40"></textarea>
<span>*</span> */


















/*  "use strict";

const $ = selector => document.querySelector(selector); 

const displayErrorMsgs = msgs => {
    // create a new ul element
    const ul = document.createElement("ul");
    ul.classList.add("messages");

    // create a new li element for each error message, add to ul
    for (let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }

    // if ul node isn't in document yet, add it
    const node = $("ul");
    if (node == null) {
        // get the form element 
        const form = $("form");

        // add ul to parent of form, before the form
        form.parentNode.insertBefore(ul, form);
    } else {
        // replace existing ul node
        node.parentNode.replaceChild(ul, node);
    }  
}

const processEntries = () => {
    // get form controls to check for validity
    const email = $("#email_address");
    const phone = $("#phone");
    const country = $("#country");
    const terms = $("#terms");
    const comments = $("#comments");   // add const

    // create array for error messages
    const msgs = [];

    // check user entries for validity
    if (email.value == "") {
        msgs[msgs.length] = "Please enter an email address.";
    } 
    if (phone.value == "") {
        msgs[msgs.length] = "Please enter a mobile phone number."; 
    } 
    if (country.value == "") {
        msgs[msgs.length] = "Please select a country.";
    } 
    if (terms.checked == false) {
        msgs[msgs.length] = "You must agree to the terms of service."; 
    }
    if (comments.value == "") {   // add comment validation
        msgs[msgs.length] = "Please enter a comment.";
    } 
    // submit the form or notify user of errors
    if (msgs.length == 0) {  // no error messages
        $("form").submit(); 
    } else {
        displayErrorMsgs(msgs);
    }
};

const resetForm = () => {
    $("form").reset();
    
    // remove error messages
    $("ul").remove();
    
    $("#email_address").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    $("#register").addEventListener("click", processEntries);
    $("#reset_form").addEventListener("click", resetForm);  
    $("#email_address").focus();   
});     */