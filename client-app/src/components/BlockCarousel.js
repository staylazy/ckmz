import React, { useState } from "react";
import "./BlockCarousel.css";

const BlockCarousel = ({ blocks }) => {
    const [currentBlock, setCurrentBlock] = useState(0);

    const handlePrevClick = () => {
        setCurrentBlock((currentBlock - 1 + blocks.length) % blocks.length);
    };

    const handleNextClick = () => {
        setCurrentBlock((currentBlock + 1) % blocks.length);
    };

    const handleLeftClick = () => {
        setCurrentBlock((currentBlock - 1 + blocks.length) % blocks.length);
    };

    const handleRightClick = () => {
        setCurrentBlock((currentBlock + 1) % blocks.length);
    };

    return (
        <div className="block-carousel">
            <h1>Новости</h1>

            <div className="block-slider">
                <div className="block left-block" onClick={handleLeftClick}>
                    {blocks[(currentBlock - 1 + blocks.length) % blocks.length]}
                </div>
                <div className="block center-block">{blocks[currentBlock]}</div>
                <div className="block right-block" onClick={handleRightClick}>
                    {blocks[(currentBlock + 1) % blocks.length]}
                </div>
            </div>
            <div className="slider-controls">
                <button className="slider-control" onClick={handlePrevClick}>
                    {"<"}
                </button>
                <button className="slider-control" onClick={handleNextClick}>
                    {">"}
                </button>
            </div>
        </div>
    );
};

export default BlockCarousel;