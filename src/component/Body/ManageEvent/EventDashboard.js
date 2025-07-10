import React, { useState, useEffect } from "react";
import EventList from "./EventList";
import EventForm from "./EventForm";
import dummyEvents from "../../../static/dummyEvents";
import "../../../CSS/EventDashboard.css"; // 👈 include the CSS file

const EventDashboard = () => {
    const [events, setEvents] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        setEvents(dummyEvents);
    }, []);

    const handleAddClick = () => {
        setSelectedEvent(null);
        setIsEditMode(true);
        setShowForm(true);
    };

    const handleEventClick = (event) => {
        setSelectedEvent(event);
        setIsEditMode(false);
        setShowForm(true);
    };

    const handleEditClick = () => {
        setIsEditMode(true);
    };

    const handleCancel = () => {
        setShowForm(false);
        setSelectedEvent(null);
        setIsEditMode(false);
    };

    const handleSave = (formData) => {
        if (selectedEvent) {
            setEvents(events.map(ev => ev.id === selectedEvent.id ? { ...formData, id: selectedEvent.id } : ev));
        } else {
            setEvents([...events, { ...formData, id: Date.now() }]);
        }
        handleCancel();
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Events</h1>
                {!showForm && (
                    <button onClick={handleAddClick} className="btn add-btn">Add Event</button>
                )}
            </div>

            {!showForm && (
                <EventList events={events} onEventClick={handleEventClick} />
            )}

            {showForm && (
                <EventForm
                    event={selectedEvent}
                    onCancel={handleCancel}
                    onSave={handleSave}
                    editable={isEditMode}
                    onEdit={handleEditClick}
                />
            )}
        </div>
    );
};

export default EventDashboard;
