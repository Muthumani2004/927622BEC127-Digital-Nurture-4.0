document.querySelector("#registrationForm").addEventListener("submit", async event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const payload = Object.fromEntries(formData);
    
    console.log("Form Data Submitted:", payload);

    const confirmationMessage = document.getElementById("confirmationMessage");
    const errorMessage = document.getElementById("errorMessage");

    confirmationMessage.classList.add("hidden");
    errorMessage.classList.add("hidden");

    if (!validateForm(payload)) return;

    console.log("Attempting to send data to server...");
    
    setTimeout(async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            console.log("Fetch Response Received:", response);

            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

            confirmationMessage.textContent = "Registration successful!";
            confirmationMessage.classList.remove("hidden");
            event.target.reset();
        } catch (error) {
            console.error("Registration failed:", error);
            errorMessage.textContent = "Registration failed. Please try again.";
            errorMessage.classList.remove("hidden");
        }
    }, 1500);
});

const validateForm = ({ username, email }) => {
    let isValid = true;

    document.querySelectorAll(".error").forEach(error => error.textContent = "");

    if (!username.trim()) {
        document.getElementById("usernameError").textContent = "Username is required.";
        isValid = false;
    }

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
        document.getElementById("emailError").textContent = "Valid email is required.";
        isValid = false;
    }

    console.log("Validation Status:", isValid);
    return isValid;
};
