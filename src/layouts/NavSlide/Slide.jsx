import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import { Next, Prev } from '../../components/Icons';
import { motion, AnimatePresence, animate } from 'framer-motion';

function Slides({ slides }) {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        const isFirstIndex = index === 0;
        const newIndex = isFirstIndex ? slides.length - 1 : index - 1;
        setIndex(newIndex);
    };

    const handleNext = () => {
        const isLastIndex = index === slides.length - 1;
        const newIndex = isLastIndex ? 0 : index + 1;
        setIndex(newIndex);
    };

    const handleOwl = (btnIndex) => {
        setIndex(btnIndex);
    };

    return (
        <>
            <div className="slides">
                <div className="slides__nav">
                    <div className="slides__nav--item">
                        <AnimatePresence>
                            <motion.img
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                src={slides[index].image_url}
                                key={slides[index].id}
                                alt=""
                            />
                        </AnimatePresence>
                        <div className="slide__nav--item-block">
                            <h2>{slides[index].name}</h2>
                            <p>After 30 days of travel across the world...</p>
                            <button className="watch-btn">
                                <svg width="180px" height="60px" viewBox="0 0 180 60" className="custom-svg">
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                                </svg>
                                <span>WATCH NOW</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="owl-items">
                    {slides.map((btn, btnIndex) => {
                        return (
                            <div
                                className={index === btnIndex ? 'owl-item active' : 'owl-item'}
                                key={btnIndex}
                                onClick={() => handleOwl(btnIndex)}
                            ></div>
                        );
                    })}
                </div>
            </div>
            <div className="slide__btns" style={{ left: '-20px' }} onClick={handlePrev}>
                <button>
                    <Next />
                </button>
            </div>
            <div className="slide__btns" style={{ right: '-20px' }} onClick={handleNext}>
                <button>
                    <Prev />
                </button>
            </div>
        </>
    );
}

export default Slides;
