

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import reviews from '../../static/reviews'


const ReviewCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        interval={5000}
    >
        {reviews.map((review, index) => (
            <div key={index} className="review">
                <p className="review-content">"{review.content}"</p>
                <p className="review-name">- {review.name}</p>
                <div className="review-rating">
                    {'⭐'.repeat(review.rating)}
                </div>
            </div>
        ))}
    </Carousel>
);

export default ReviewCarousel;