const events = [
    { name: "Tech Conference", category: "tech" },
    { name: "Business Summit", category: "business" },
    { name: "Art Expo", category: "art" }
];

const renderEvents = eventList => {
    const eventContainer = document.getElementById("eventList");
    eventContainer.innerHTML = "";

    eventList.forEach(event => {
        const listItem = document.createElement("li");
        listItem.className = "event";
        listItem.dataset.category = event.category;
        listItem.innerHTML = `${event.name} <button class="register-btn">Register</button>`;
        eventContainer.appendChild(listItem);
    });

    document.querySelectorAll(".register-btn").forEach(button => {
        button.addEventListener("click", () => {
            alert("You have successfully registered!");
        });
    });
};

document.getElementById("categoryFilter").addEventListener("change", event => {
    const category = event.target.value;
    const filteredEvents = category === "all" ? events : events.filter(e => e.category === category);
    renderEvents(filteredEvents);
});

document.getElementById("searchBox").addEventListener("input", event => {
    const searchTerm = event.target.value.toLowerCase();
    document.querySelectorAll(".event").forEach(eventItem => {
        eventItem.style.display = eventItem.textContent.toLowerCase().includes(searchTerm) ? "flex" : "none";
    });
});

document.addEventListener("DOMContentLoaded", () => renderEvents(events));
