$(document).ready(function () {
    $("#btn").click(function () { 
       var value1 =$("#name").val();
       var value2 =$("#password").val();
       var value3 =$("#cpassword").val();
       var value4 =$("#email").val();


       if (value1 == '') {
        $("#error-msg1").text("User name is empty.Please Enter Your Name");
       } else if(value1.length <=8){
        $("#error-msg1").text("User Name Must be 8 Character");
       } else {
        $("#error-msg1").text("");
       }


       if (value2 == '') {
        $("#error-msg2").text("Password is Empty Please Enter Your Password");
       } else if(value2.length <=8){
        $("#error-msg2").text("User Name Must be 8 Character");
       } else {
        $("#error-msg2").text("");
       }
       
       if (value2 == value3) {
        $("#error-msg3").text('');
       }
       else{
        $("#error-msg3").text("Password Is Not Matching Please Enter Your Confirm Password");
       }
       if (value4.indexOf("@")<0 || value4.indexOf(".")<0) {
         $("#error-msg4").text("Invalid Email Id");
        }
        else{
            $("#error-msg4").text(""); 
        }
    });
    
}); 