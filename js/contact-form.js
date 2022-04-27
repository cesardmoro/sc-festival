$(window).on("load", function() {
    "use strict";


     // ============== Contact Form Working Function ============ 

    $( "#submit_2" ).on( "click", function() {
        var errors = "";

        var user_name = document.getElementById("username");
        var contact_email_address = document.getElementById("email");
        if(user_name.value === ""){
            errors+= 'Por favor indica tu nombre.';
        }
        else if(contact_email_address.value === ""){
            errors+= 'Por favor indica tu email.';
        }


        if(errors)
        {
            document.getElementById("error").style.display = "block";
            document.getElementById("error").innerHTML = errors;
            return false;
        }

        else{
            $.ajax({
                type: "POST",
                url: "process.php",
                data: $("#contact_form_2").serialize(),
                success: function(msg)
                {
                    if(msg === 'success')
                    {
                        document.getElementById("error").style.display = "none";
                        document.getElementById("username").value = "";
                        document.getElementById("email").value = "";
                        document.getElementById("description").value = "";
    //                        $("#contact_form_2").hide();
                        document.getElementById("success").style.display = "block";
                        document.getElementById("success").innerHTML = "Gracias! Te responderemos pronto.";
                    }else{
                        document.getElementById("error").style.display = "block";
                        document.getElementById("error").innerHTML = "Oops! Algo salió mal.";
                    }
                }

            });

        }
    });



    // Another Contact Form Working Functionality

    $( "#submit_3" ).on( "click", function() {
        var errors = "";

        var user_name = document.getElementById("username");
        var contact_email_address = document.getElementById("email");
        if(user_name.value === ""){
            errors+= 'Por favor indique su nombre.';
        }
        else if(contact_email_address.value === ""){
            errors+= 'Por favor indique su email.';
        }


        if(errors)
        {
            document.getElementById("error").style.display = "block";
            document.getElementById("error").innerHTML = errors;
            return false;
        }

        else{
            $.ajax({
                type: "POST",
                url: "process.php",
                data: $("#contact_form_3").serialize(),
                success: function(msg)
                {
                    if(msg === 'success')
                    {
                        document.getElementById("error").style.display = "none";
                        document.getElementById("username").value = "";
                        document.getElementById("email").value = "";
                        document.getElementById("description").value = "";
    //                      $("#contact_form_3").hide();
                        document.getElementById("success").style.display = "block";
                        document.getElementById("success").innerHTML = "Gracias! Te responderemos pronto.";
                    }else{
                        document.getElementById("error").style.display = "block";
                        document.getElementById("error").innerHTML = "Oops! Algo salió mal.";
                    }
                }

            });

        }
    });



}); 