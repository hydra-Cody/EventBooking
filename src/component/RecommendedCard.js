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
        <div key={index} className="recommended-card">
            <img src={'https://drive.google.com/thumbnail?id=' + event.imgUrl.split('/')[5]} alt={event.eventName}
                className="recommended-img" ></img>
            <div className="recommended-text">
                <div className="recommended-text-left">
                    <h3>{event.eventName}</h3>
                    <h4>{event.cityName}</h4>
                </div>
                <div className="recommended-text-right">
                    <h4>{formate(event.date)}</h4>
                    <h4>{event.weather} | {Math.round(event.distanceKm)} KM </h4>
                </div>
            </div>

        </div>
    )
}

export default RecommendedCard;