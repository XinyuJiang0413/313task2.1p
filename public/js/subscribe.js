


function subscribe(){
    var form = new FormData();
    alert("email is sending to " + $("#useremail").val());
    form.append("useremail", $("#useremail").val());
    $.ajax({
        url: "/welcomeuser",
        type: "POST",
        data: form,
        contentType: false,
        processData: false,
        success: function (result) {
          alert("success send email to " +$("#useremail").val() )
        },
      });
}