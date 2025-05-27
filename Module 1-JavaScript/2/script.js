const eventName = "Music Concert";
const eventDate = "2023-12-01";
let availableSeats = 100;

document.getElementById("event-title").textContent = eventName;
document.getElementById("event-date").textContent = `Date: ${eventDate}`;
document.getElementById("available-seats").textContent = `Available Seats: ${availableSeats}`;

const registerSeat = () => {
    if (availableSeats > 0) {
        availableSeats--;
        updateSeatCount();
        alert(`Seat registered successfully! Remaining seats: ${availableSeats}`);
    } else {
        alert("No seats available.");
    }
};

const cancelRegistration = () => {
    if (availableSeats < 100) {
        availableSeats++;
        updateSeatCount();
        alert(`Registration canceled. Seats available: ${availableSeats}`);
    } else {
        alert("All seats are available.");
    }
};

const updateSeatCount = () => {
    document.getElementById("available-seats").textContent = `Available Seats: ${availableSeats}`;
};
