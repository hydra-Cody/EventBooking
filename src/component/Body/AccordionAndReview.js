

import React from 'react';
import acc from '../../static/acc'
import Accordion from "./Accordion";
import ReviewCarousel from './ReviewCarousel';

const AccordionAndReview = () => (
    <div className='acc-rev-box'>
        <div className='acc-rev-title'>
            <p className="show-text  acc-rev-text">Frequently Asked Questions</p>
            <Accordion items={acc} />
        </div>
        <div className='acc-rev-title'>
            <p className="show-text acc-rev-text">Reviews</p>
            <ReviewCarousel />
        </div>
    </div>
);

export default AccordionAndReview;