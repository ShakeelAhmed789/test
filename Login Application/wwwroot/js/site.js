// Write your JavaScript code.
$("#target").submit(function (event) {

    event.preventDefault();
    var endpoint = "https://localhost:44331/api/Employee/";

    var creds = {
        username: $("#username").val(),
        password: $("#password").val()
    }

    $('#validating').html('Sent Credentials to Server..');

    $.ajax({
        type: 'POST',
        url: endpoint,
        crossDomain: true,
        dataType: 'jsonp',
        contentType: 'application/json',
        data: creds,
        success: function (data) {
        },
        data: JSON.stringify(creds)
    });
});