class Event {
    constructor(name, date, availableSeats) {
        this.name = name;
        this.date = new Date(date);
        this.availableSeats = availableSeats;
    }

    checkAvailability(seatsRequested) {
        return seatsRequested > 0 && seatsRequested <= this.availableSeats;
    }

    bookSeats(seatsRequested) {
        if (this.checkAvailability(seatsRequested)) {
            this.availableSeats -= seatsRequested;
            return `Successfully booked ${seatsRequested} seats!`;
        } else {
            return "Not enough seats available!";
        }
    }
}

Event.prototype.getEventDetails = function() {
    return Object.entries(this).map(([key, value]) => `${key}: ${value}`).join("\n");
};

const event = new Event("Tech Conference", "2025-06-15", 100);

document.getElementById("event-name").textContent = event.name;
document.getElementById("event-date").textContent = event.date.toDateString();
document.getElementById("available-seats").textContent = event.availableSeats;

function bookSeats() {
    const seatsRequested = parseInt(document.getElementById("seats-requested").value);
    if (isNaN(seatsRequested) || seatsRequested <= 0) {
        document.getElementById("status-message").textContent = "Please enter a valid number of seats.";
        return;
    }

    const message = event.bookSeats(seatsRequested);
    document.getElementById("status-message").textContent = message;
    document.getElementById("available-seats").textContent = event.availableSeats;
}

function viewEventDetails() {
    alert(event.getEventDetails());
}
