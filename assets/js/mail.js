/*==================== EMAIL FORM ====================*/
 
    // Auto generated Email code here
    // Email code here
    function sendMail(){
        const  parms = {
            name : document.getElementById("name").value,
            email : document.getElementById("email").value,
            subject : document.getElementById("subject").value,
            message : document.getElementById("message").value,
        };

        emailjs.send("service_0mpb7er", "template_kqbbt66", parms)
        .then(() => {
            alert("Email Sent Successfully");
        })
        .catch((error) => {
            console.log("Error Sending Email: ", error);
            alert("Failed to send email. Please try again.");
        });
    }

/*==================== Search Functionality ====================*/