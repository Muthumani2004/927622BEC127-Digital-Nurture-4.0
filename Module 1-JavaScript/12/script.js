document.getElementById("registrationForm").addEventListener("submit", async event => {
    event.preventDefault();
    
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const messageDiv = document.getElementById("message");

    document.querySelectorAll(".error").forEach(error => error.textContent = "");

    if (!username) document.getElementById("usernameError").textContent = "Username is required.";
    if (!email || !/\S+@\S+\.\S+/.test(email)) document.getElementById("emailError").textContent = "Valid email is required.";

    if (!username || !email || !/\S+@\S+\.\S+/.test(email)) return;

    messageDiv.textContent = "Processing...";
    messageDiv.className = "message";
    messageDiv.style.display = "block";

    setTimeout(async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email })
            });

            if (!response.ok) throw new Error("Server error");

            messageDiv.textContent = "Registration successful!";
            messageDiv.className = "message success";
            document.getElementById("registrationForm").reset();
        } catch (error) {
            messageDiv.textContent = "Registration failed. Please try again.";
            messageDiv.className = "message error";
        }
    }, 1500);
});
