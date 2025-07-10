import React from "react";

const EventCard = ({ event, onClick }) => {
    return (
        <li onClick={onClick} className="event-card">
            <h3>{event.title}</h3>
            <p>{event.eventDate} — {event.location}</p>
        </li>
    );
};

export default EventCard;
