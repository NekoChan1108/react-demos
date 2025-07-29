import React, {useState} from 'react';
import "../assets/TestImonialsStyle.css"

const TestImonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const testimonials = [
        {
            quote: "This is the best product I've ever used!",
            author: "Jane Doe",
        },
        {
            quote: "I highly recommend this product to everyone!",
            author: "John Smith",
        },
        {
            quote: "This product has completely changed my life!",
            author: "Bob Johnson",
        },
    ];
    const handleOnPrevClick = () => {
        setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
    }
    const handleOnNextClick = () => {
        setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
    }
    return (
        <div className={"testimonials"}>
            <div className={"testimonials-quote"}>
                {testimonials[currentIndex].quote}
            </div>
            <div className={"testimonials-author"}>
                - {testimonials[currentIndex].author}
            </div>
            <div className={"testimonials-nav"}>
                <button onClick={handleOnPrevClick}>prev</button>
                <button onClick={handleOnNextClick}>next</button>
            </div>
        </div>
    );
};

export default TestImonials;