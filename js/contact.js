// Contact form in Local Storage
function saveData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let contactInfo = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    localStorage.setItem("contactInfo", JSON.stringify(contactInfo))
}