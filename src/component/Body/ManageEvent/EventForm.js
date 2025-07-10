import React, { useState, useEffect } from "react";
import "../../../CSS/EventDashboard.css"// 👈 Add this line if you're using an external CSS file

const EventForm = ({ event, onCancel, onSave, editable, onEdit }) => {
    const [formData, setFormData] = useState(event || {});
    const [isEditable, setIsEditable] = useState(editable);

    useEffect(() => {
        setFormData(event || {});
        setIsEditable(editable);
    }, [event, editable]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2>{event ? "Event Details" : "Add New Event"}</h2>

            <input
                name="title"
                value={formData.title || ""}
                onChange={handleChange}
                placeholder="Title"
                className="form-input"
                disabled={!isEditable}
            />

            <textarea
                name="description"
                value={formData.description || ""}
                onChange={handleChange}
                placeholder="Description"
                className="form-input"
                disabled={!isEditable}
            />

            <input
                name="eventDate"
                type="date"
                value={formData.eventDate || ""}
                onChange={handleChange}
                className="form-input"
                disabled={!isEditable}
            />

            <input
                name="location"
                value={formData.location || ""}
                onChange={handleChange}
                placeholder="Location"
                className="form-input"
                disabled={!isEditable}
            />

            <div className="button-group">
                {event && !isEditable && (
                    <button type="button" onClick={onEdit} className="btn edit-btn">Edit</button>
                )}
                {isEditable && (
                    <>
                        <button type="submit" className="btn save-btn">Save</button>
                        <button type="button" onClick={onCancel} className="btn cancel-btn">Cancel</button>
                    </>
                )}
            </div>
        </form>
    );
};

export default EventForm;
