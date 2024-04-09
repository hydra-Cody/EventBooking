import { useEffect, useState } from "react";
import RecommendedCard from "./RecommendedCard";
import Loader from './LoaderComponent'

const Body = () => {
    const [recommendedShow, setRecommendedShow] = useState([]);
    const [upcomingEvent, setupcomingEvent] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getData();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const handleScroll = async () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            setIsLoading(true);
            const newEvent = await fetchData(currentPage + 1);
            setupcomingEvent((prevEvent) => [...prevEvent, ...newEvent]);
            setCurrentPage((prevPage) => prevPage + 1);
            setIsLoading(false);
        }
    };

    async function fetchData(pageNumber) {
        const response = await fetch(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${pageNumber}&type=upcoming`);
        if (!response) return [];
        const data = await response.json();
        return data.events;
    }
    async function getData() {
        try {
            const data = await fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco');
            const json = await data.json();
            setRecommendedShow(json.events);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return (
        <div >
            <div className="body">
                <img src={'https://drive.google.com/thumbnail?id=1hFKPSETzU0K0U9pgcpcvoVk0XCEJxQ8k'} className="banner" ></img>
                <div className="heading">
                    <h1>Discover Exciting Events Happening Near You-Stay Tuned for Update</h1>
                    <p>This package serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package</p>
                </div>
            </div>
            <div>
                <h3>Recommended shows</h3>
                <div className="recommended">
                    {recommendedShow.map((event, index) => (
                        <RecommendedCard event={event} index={index} />
                    ))}
                </div>
            </div>
            <div>
                <h3>Upcoming events</h3>
                <div className="recommended">
                    {upcomingEvent.map((event, index) => (
                        <RecommendedCard event={event} index={index} />
                    ))}
                </div>
                {isLoading && <Loader />}
            </div>
        </div>
    );
};

export default Body;
