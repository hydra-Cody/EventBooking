const UpcomingCard = ({ event, index }) => {
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
        <div key={index} className="upcoming-card">
            <div className="upcoming-img">
                <img src={'https://drive.google.com/thumbnail?id=' + event.imgUrl.split('/')[5]} alt={event.eventName}
                    className="upcoming-img" ></img>
                <div className="date">{formate(event.date)}</div>
            </div>
            <div className="upcoming-des">
                <div className="upcoming-text-left">
                    <h3>{event.eventName}</h3>
                    <h4>
                        <img className="upcoming-location-svg" src='data:image/png;base64,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' />
                        {event.cityName}</h4>
                </div>
                <div className="upcoming-text-right">
                    <h4>{event.weather} | {Math.round(event.distanceKm)} KM </h4>
                </div>
            </div>


        </div>
    )
}

export default UpcomingCard;