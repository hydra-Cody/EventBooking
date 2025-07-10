import React from "react";
import { Link } from "react-router-dom";

const RecommendedCard = ({ event, index }) => {
    function formate(convertdate) {
        const date = new Date(convertdate);
        const formattedDate = date.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
        return formattedDate;
    }

    return (
        <Link to={`/event/${event.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div key={index} className="recommended-card">
                <img src={'https://drive.google.com/thumbnail?id=' + event.imgUrl.split('/')[5]} alt={event.eventName}
                    className="recommended-img" ></img>
                <div className="recommended-text">
                    <div className="recommended-text-left">
                        <p>{event.eventName}</p>
                        <p>{event.cityName}</p>
                    </div>
                    <div className="recommended-text-right">
                        <p>{formate(event.date)}</p>
                        <p>{event.weather} | {Math.round(event.distanceKm)} KM </p>
                    </div>
                </div>

            </div>
        </Link >
    )
}

export default RecommendedCard;