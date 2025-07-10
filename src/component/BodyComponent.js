import React, { useEffect, useState, useCallback, useRef } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

import RecommendedCard from "./RecommendedCard";
import UpcomingCard from './UpcomingCard';
import Loader from './LoaderComponent';
import AccordionAndReview from "./AccordionAndReview";

const Body = () => {
    const [recommendedShow, setRecommendedShow] = useState([]);
    const [recommendedLoader, setrecommendedLoader] = useState(true);
    const [upcomingEvent, setupcomingEvent] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const currentPageRef = useRef(1);
    const imageRefs = useRef([]);

    useEffect(() => {
        getData();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        checkImagesLoaded();
    }, []);

    const handleScroll = useCallback(async () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && currentPageRef.current < 5 && !isLoading) {
            setIsLoading(true);
            const newEvent = await fetchData(currentPageRef.current + 1);
            setupcomingEvent((prevEvent) => [...prevEvent, ...newEvent]);
            currentPageRef.current += 1;
            setIsLoading(false);
        }
    }, [isLoading]);

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

    const handleImageLoad = () => {
        if (imageRefs.current.every(img => img.complete)) {
            setImagesLoaded(true);
        }
    };

    const checkImagesLoaded = () => {
        if (imageRefs.current.every(img => img.complete)) {
            setImagesLoaded(true);
        } else {
            imageRefs.current.forEach(img => {
                if (img.complete) {
                    handleImageLoad();
                } else {
                    img.onload = handleImageLoad;
                }
            });
        }
    };

    return (
        <>
            <div className="middle-box">
                {!imagesLoaded && (
                    <svg className="lodding-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                        <linearGradient id="a11">
                            <stop offset="0" stopColor="#FF156D" stopOpacity="0"></stop>
                            <stop offset="1" stopColor="#FF156D"></stop>
                        </linearGradient>
                        <circle fill="none" stroke="url(#a11)" strokeWidth="15" strokeLinecap="round" strokeDasharray="0 44 0 44 0 44 0 44 0 360" cx="100" cy="100" r="70" transformOrigin="center">
                            <animateTransform type="rotate" attributeName="transform" calcMode="discrete" dur="2s" values="360;324;288;252;216;180;144;108;72;36" repeatCount="indefinite"></animateTransform>
                        </circle>
                    </svg>
                )}
                <div className="body">
                    <Carousel
                        showArrows={true}
                        autoPlay={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        interval={3000}
                    >
                        <div>
                            <img
                                src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg"
                                className="banner"
                                alt="Event 1"
                                onLoad={handleImageLoad}
                                ref={el => imageRefs.current[0] = el}
                            />
                        </div>
                        <div>
                            <img
                                src="https://cdn.pixabay.com/photo/2018/06/17/10/38/artist-3480274_1280.jpg"
                                className="banner"
                                alt="Event 2"
                                onLoad={handleImageLoad}
                                ref={el => imageRefs.current[1] = el}
                            />
                        </div>
                        <div>
                            <img
                                src="https://cdn.pixabay.com/photo/2016/11/23/18/05/concert-1854113_1280.jpg"
                                className="banner"
                                alt="Event 3"
                                onLoad={handleImageLoad}
                                ref={el => imageRefs.current[2] = el}
                            />
                        </div>
                    </Carousel>
                    {imagesLoaded && <div className="heading">
                        <h1>Discover Exciting Events Happening Near You-Stay Tuned for Update</h1>
                        <p>Book now and get 20 % off Limited Time offer</p>
                    </div>}
                </div>


                <div className="recommended-box">
                    <p className="show-text">Recommended shows</p>

                    {
                        recommendedLoader ?
                            <svg className="lodding-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                <linearGradient id="a11">
                                    <stop offset="0" stopColor="#FF156D" stopOpacity="0"></stop>
                                    <stop offset="1" stopColor="#FF156D"></stop>
                                </linearGradient>
                                <circle fill="none" stroke="url(#a11)" strokeWidth="15" strokeLinecap="round" strokeDasharray="0 44 0 44 0 44 0 44 0 360" cx="100" cy="100" r="70" transformOrigin="center">
                                    <animateTransform type="rotate" attributeName="transform" calcMode="discrete" dur="2s" values="360;324;288;252;216;180;144;108;72;36" repeatCount="indefinite"></animateTransform>
                                </circle>
                            </svg>
                            :
                            <div className="recommended">
                                {recommendedShow.map((event, index) => (
                                    <RecommendedCard event={event} index={index} key={index} />
                                ))}
                            </div>}
                </div>
                <div className="upcoming-box">
                    <p className="show-text">Upcoming events</p>
                    <div className="upcoming">
                        {upcomingEvent.map((event, index) => (
                            <UpcomingCard event={event} index={index} key={index} />
                        ))}
                    </div>
                    {isLoading && <Loader />}
                </div>
            </div>
            <AccordionAndReview />
        </>
    );
};

export default Body;
