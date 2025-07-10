import React from "react";
import EventCard from "./EventCard";

const EventList = ({ events, onEventClick }) => {
    return (
        <ul className="event-list">
            {events.map((event) => (
                <EventCard key={event.id} event={event} onClick={() => onEventClick(event)} />
            ))}
        </ul>
    );
};

export default EventList;
