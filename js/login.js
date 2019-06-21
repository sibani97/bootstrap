$(document).ready(function () {
    $("#loginbtn").click(function () {
        login();
        return false;
    })



    function login() {
        console.log("login for fundoonotes");

        var password = $("#logPassword").val();

        var email = $("#logEmail").val();
        var login = { "emailId": email, "password": password };
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "http://localhost:8080/user/login",
            data: JSON.stringify(login),
            dataType: 'json',
            success: function (response) {
                if (response.statusCode == 200) {
                    console.log(response);
                    alert(response.statusMessage);
                    return false;
                } else {
                    console.log(response);
                    alert(response.statusMessage);
                    return false;
                }
                console.log(response);
            },
            error: function (errorResponse) {
                alert(errorResponse);
                console.log(errorResponse);
            }
        })
        return false;
    }
})
