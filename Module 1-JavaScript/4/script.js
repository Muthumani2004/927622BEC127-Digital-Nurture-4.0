const events = [
    { name: "Tech Conference", date: "2025-05-30", location: "Coimbatore", category: "tech", seats: 10 },
    { name: "Art Workshop", date: "2025-06-10", location: "Chennai", category: "art", seats: 5 },
];

const trackRegistrations = (() => {
    const count = {};
    return (category) => {
        count[category] = (count[category] || 0) + 1;
        return count[category];
    };
})();

const addEvent = (name, date, location, category, seats) => {
    events.push({ name, date, location, category, seats });
};

const filterEventsByCategory = (category, callback) => {
    return events.filter(event => callback(event, category));
};

const displayEvents = () => {
    const eventContainer = document.getElementById("events");
    const eventSelect = document.getElementById("event");
    eventContainer.innerHTML = "";
    eventSelect.innerHTML = "";

    events.forEach((event, index) => {
        const eventDate = new Date(event.date);
        if (eventDate > new Date() && event.seats > 0) {
            const eventElement = document.createElement("article");
            eventElement.classList.add("event");
            eventElement.innerHTML = `
                <h2>${event.name}</h2>
                <p>Date: ${event.date}</p>
                <p>Location: ${event.location}</p>
                <p>Seats Available: ${event.seats}</p>
                <button onclick="registerUser(${index})">Register</button>
            `;
            eventContainer.appendChild(eventElement);

            const option = document.createElement("option");
            option.value = event.category;
            option.textContent = event.name;
            eventSelect.appendChild(option);
        }
    });
};

const registerUser = (index) => {
    try {
        if (events[index].seats > 0) {
            events[index].seats--;
            alert(`Successfully registered for ${events[index].name}. Total registrations in ${events[index].category}: ${trackRegistrations(events[index].category)}`);
            displayEvents();
        } else {
            throw new Error("No seats available.");
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
};

document.getElementById("registrationForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const selectedCategory = document.getElementById("event").value;

    if (name && email) {
        alert(`Thank you, ${name}! You have successfully registered for the ${selectedCategory} event.`);
    } else {
        alert("Please fill in all fields.");
    }
});

displayEvents();
