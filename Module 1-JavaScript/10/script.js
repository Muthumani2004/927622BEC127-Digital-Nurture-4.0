document.addEventListener("DOMContentLoaded", () => {
    const eventForm = document.getElementById("event-form");
    const eventList = document.getElementById("event-list");

    let events = [];

    const addEvent = ({ name, date, location }) => {
        events = [...events, { name, date, location }];
        displayEvents();
    };

    const displayEvents = () => {
        eventList.innerHTML = events.map(({ name, date, location }) =>
            `<li>${name} - ${date} @ ${location}</li>`
        ).join("");
    };

    eventForm.addEventListener("submit", event => {
        event.preventDefault();
        const name = document.getElementById("event-name").value.trim();
        const date = document.getElementById("event-date").value;
        const location = document.getElementById("event-location").value.trim();

        if (!name || !date || !location) {
            alert("Please fill out all fields!");
            return;
        }

        addEvent({ name, date, location });
        eventForm.reset();
    });
});
