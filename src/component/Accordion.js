import React, { useState } from 'react';


const AccordionItem = ({ title, content, isOpen, onClick }) => (
    <div className="accordion-item">
        <div className="accordion-title" onClick={onClick}>
            {title}
        </div>
        {isOpen && <div className="accordion-content">{content}</div>}
    </div>
);

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;
