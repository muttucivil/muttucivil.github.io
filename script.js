document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("feedbackForm").addEventListener("submit", function (event) {
        event.preventDefault();
        
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (name && email && message) {
            document.getElementById("responseMessage").textContent = "Thank you for your feedback, " + name + "!";
            this.reset();
        } else {
            document.getElementById("responseMessage").textContent = "Please fill out all fields.";
        }
    });
});
