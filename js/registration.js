$(document).ready(function () {
    $("#registrationbtn").click(function () {
        registration();
        return false;
    })



    function registration() {
        console.log("registration for fundoonotes");
        var user = $("#logUser").val();
        var password = $("#logPassword").val();
        var mobile = $("#logMobile").val();
        var email = $("#logEmail").val();
        var registration = { "emailId": email, "password": password, "mobileNumber": mobile, "userName": user };


        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "http://localhost:8080/user/register",
            data: JSON.stringify(registration),
            dataType: 'json',
            // cache: true,
            success: function (response) {
                if (response.statusCode == 100) {
                    console.log(response);
                    alert(response.statusMessage);
                } else {
                    console.log(response);
                    alert(response.statusMessage);
                }
                console.log(response);
            },
            error: function (errorResponse) {
                alert(errorResponse);
                console.log("errorr : ", errorResponse);
            }
        })


        return false;
    }
})
