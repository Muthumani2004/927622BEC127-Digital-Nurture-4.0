document.getElementById("registrationForm").addEventListener("submit", event => {
    event.preventDefault();
    
    const form = event.target;
    const { name, email, event: selectedEvent } = form.elements;
    let isValid = true;

    document.querySelectorAll(".error").forEach(error => error.textContent = "");

    if (name.value.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }

    if (email.value.trim() === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        document.getElementById("emailError").textContent = "Invalid email format.";
        isValid = false;
    }

    if (selectedEvent.value === "") {
        document.getElementById("eventError").textContent = "Please select an event.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("successMessage").textContent = `Thank you, ${name.value}! You have successfully registered for the ${selectedEvent.options[selectedEvent.selectedIndex].text}.`;
        form.reset();
    }
});
