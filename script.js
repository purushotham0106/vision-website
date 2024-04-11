
    var btn= document.getElementById('btn');
    btn.addEventListener('click',function(e) {
    var Username = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var email = document.getElementById('subject').value;
    var email = document.getElementById('message').value;

    var messageBody = "Name:" + username + 
    "<br/> email " + email +
    "<br/> subject" + subject +
    "<br/> message" +message ;
        Email.send({
        Host : "smtp.elasticemail.com",
        Username : "purushganguly55@gmail.com",
        Password : "hdiz vqoj ntzy ugkw",
        To : 'purushothamganguly0106@gmail.com',
        From : email,
        Subject : subject,
        Body : messageBody
    }).then(
      message => alert(message)
    );
}
