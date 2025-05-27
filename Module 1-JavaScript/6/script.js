let events = [
    { name: "Music Concert", type: "music" },
    { name: "Art Exhibition", type: "art" },
    { name: "Food Festival", type: "food" }
];

const addEvent = () => {
    const newEvent = { name: "Jazz Night", type: "music" };
    events.push(newEvent);
    displayEvents();
};

const formatEventCards = eventList => eventList.map(event => 
    `<div class="event-card">${event.type === "music" ? "🎵 " : ""}${event.name}</div>`).join('');

const displayEvents = () => {
    document.getElementById("events-container").innerHTML = formatEventCards(events);
};

const filterMusicEvents = () => {
    const musicEvents = events.filter(event => event.type === "music");
    document.getElementById("events-container").innerHTML = formatEventCards(musicEvents);
};

document.addEventListener("DOMContentLoaded", displayEvents);
