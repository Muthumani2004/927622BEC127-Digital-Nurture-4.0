const events = [
    { id: 1, name: 'Event 1', date: '2025-06-01', seats: 5 },
    { id: 2, name: 'Event 2', date: '2025-06-05', seats: 10 },
    { id: 3, name: 'Event 3', date: '2025-06-10', seats: 3 }
];

const renderEvents = () => {
    const eventContainer = document.querySelector("#event-container");
    eventContainer.innerHTML = "";

    events.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.className = "event-card";
        
        const title = document.createElement("h3");
        title.textContent = event.name;
        
        const date = document.createElement("p");
        date.className = "event-details";
        date.textContent = `Date: ${event.date}`;
        
        const seats = document.createElement("p");
        seats.className = "event-details";
        seats.innerHTML = `Available Seats: <span id="seats-${event.id}">${event.seats}</span>`;
        
        const registerBtn = document.createElement("button");
        registerBtn.textContent = "Register";
        registerBtn.onclick = () => registerEvent(event.id);
        
        const cancelBtn = document.createElement("button");
        cancelBtn.textContent = "Cancel";
        cancelBtn.onclick = () => cancelEvent(event.id);
        
        eventCard.append(title, date, seats, registerBtn, cancelBtn);
        eventContainer.appendChild(eventCard);
    });
};

const registerEvent = eventId => {
    const event = events.find(e => e.id === eventId);
    if (event.seats > 0) {
        event.seats--;
        document.querySelector(`#seats-${event.id}`).innerText = event.seats;
        alert(`Successfully registered for ${event.name}`);
    } else {
        alert(`Sorry, no seats available for ${event.name}`);
    }
};

const cancelEvent = eventId => {
    const event = events.find(e => e.id === eventId);
    event.seats++;
    document.querySelector(`#seats-${event.id}`).innerText = event.seats;
    alert(`Cancelled registration for ${event.name}`);
};

const sortEvents = () => {
    events.sort((a, b) => new Date(a.date) - new Date(b.date));
    renderEvents();
};

document.addEventListener("DOMContentLoaded", renderEvents);
