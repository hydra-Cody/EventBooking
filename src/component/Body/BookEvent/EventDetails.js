import React, { useState } from "react";
import { useParams } from "react-router-dom";

const dummyEvent = {
    id: 1,
    eventName: "Live Music Fest",
    cityName: "New York",
    date: "2025-08-15T19:00:00Z",
    weather: "Sunny",
    distanceKm: 12.5,
    description: "Join us for a night of unforgettable performances by top artists.",
    imgUrl: "https://cdn.pixabay.com/photo/2016/11/23/18/05/concert-1854113_1280.jpg"
};

const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
};

const EventDetails = () => {
    const { id } = useParams();
    const [isAttending, setIsAttending] = useState(false);

    const handleAttendClick = () => {
        setIsAttending(true);
        // Later: send POST to backend to mark as attending
    };

    const handleCancelClick = () => {
        setIsAttending(false);
        // Later: send DELETE or POST to cancel attendance
    };

    return (
        <div style={styles.container}>
            <img src={dummyEvent.imgUrl} alt={dummyEvent.eventName} style={styles.image} />
            <h2>{dummyEvent.eventName}</h2>
            <p><strong>City:</strong> {dummyEvent.cityName}</p>
            <p><strong>Date:</strong> {formatDate(dummyEvent.date)}</p>
            <p><strong>Weather:</strong> {dummyEvent.weather}</p>
            <p><strong>Distance:</strong> {Math.round(dummyEvent.distanceKm)} KM</p>
            <p style={styles.description}>{dummyEvent.description}</p>

            <div style={styles.buttonGroup}>
                {!isAttending ? (
                    <button style={styles.attendBtn} onClick={handleAttendClick}>
                        Attend Event
                    </button>
                ) : (
                    <button style={styles.cancelBtn} onClick={handleCancelClick}>
                        Cancel Attendance
                    </button>
                )}
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        fontFamily: "sans-serif"
    },
    image: {
        width: "100%",
        borderRadius: "8px",
        marginBottom: "20px"
    },
    description: {
        margin: "20px 0"
    },
    buttonGroup: {
        display: "flex",
        justifyContent: "flex-start",
        gap: "10px"
    },
    attendBtn: {
        backgroundColor: "#28a745",
        color: "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
    },
    cancelBtn: {
        backgroundColor: "#dc3545",
        color: "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
    }
};

export default EventDetails;
