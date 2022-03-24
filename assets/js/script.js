function send(event) {
        event.preventDefault();
        Email.send({
        name:document.getElementById('name').value,
        Host : "smtp.gmail.com",
        Username : "joaquin.larsen7@gmail.com",
        Password : "tieksqvfvkckoicn",
        To : "joaquin.larsen7@gmail.com",
        From : document.getElementById('email').value,
        Subject : document.getElementById('subject').value,
        Body : document.getElementById('message').value
        }).then(function(response){
           if (response == 'OK') {
               alert("Mail enviado!");
            } else {
                throw new Error("Error: " + response.statusText);
            }
         });

}