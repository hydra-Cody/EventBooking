import { useEffect, useState } from "react";
import RecommendedCard from "./RecommendedCard";
import UpcomingCard from './UpcomingCard';
import Loader from './LoaderComponent'

const Body = () => {
    const [recommendedShow, setRecommendedShow] = useState([]);
    const [recommendedLoader, setrecommendedLoader] = useState(true);
    const [upcomingEvent, setupcomingEvent] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

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
            setrecommendedLoader(false);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return (
        <div className="middle-box">
            <div className="body">
                <img src={'https://drive.google.com/thumbnail?id=1hFKPSETzU0K0U9pgcpcvoVk0XCEJxQ8k'} className="banner" ></img>
                <div className="heading">
                    <h1>Discover Exciting Events Happening Near You-Stay Tuned for Update</h1>
                    <p>Book now and get 20 % off Limited Time offer </p>
                </div>
            </div>
            {
                recommendedLoader
                    ?
                    <svg className="lodding-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><linearGradient id="a11"><stop offset="0" stop-color="#FF156D" stop-opacity="0"></stop><stop offset="1" stop-color="#FF156D"></stop></linearGradient><circle fill="none" stroke="url(#a11)" stroke-width="15" stroke-linecap="round" stroke-dasharray="0 44 0 44 0 44 0 44 0 360" cx="100" cy="100" r="70" transform-origin="center"><animateTransform type="rotate" attributeName="transform" calcMode="discrete" dur="2" values="360;324;288;252;216;180;144;108;72;36" repeatCount="indefinite"></animateTransform></circle></svg>
                    :

                    <div className="recommended-box">
                        <p className="show-text">Recommended shows</p>
                        <div className="recommended">
                            {recommendedShow.map((event, index) => (
                                <RecommendedCard event={event} index={index} />
                            ))}
                        </div>
                    </div>
            }
            <div className="upcoming-box">
                <p className="show-text">Upcoming events</p>
                <div className="upcoming">
                    {upcomingEvent.map((event, index) => (
                        <UpcomingCard event={event} index={index} />
                    ))}
                </div>
                {isLoading && <Loader />}
            </div>
        </div>
    );
};

export default Body;
