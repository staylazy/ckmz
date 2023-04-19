import React, { useState } from "react";
import "./BlockCarousel.css";

const BlockCarousel = ({ blocks }) => {
  const [currentBlock, setCurrentBlock] = useState(0);

  const handlePrevClick = () => {
    setCurrentBlock(currentBlock === 0 ? blocks.length - 1 : currentBlock - 1);
  };

  const handleNextClick = () => {
    setCurrentBlock(currentBlock === blocks.length - 1 ? 0 : currentBlock + 1);
  };

  return (
    <div className="block-carousel">
      <h1>Новости</h1>

      <div className="block-slider">
        <div className="blocks-container" style={{ transform: `translateX(${-100 / 3 * currentBlock}%)` }}>
          {blocks.map((block, index) => (
            <div
              className={`block ${index === currentBlock ? "center-block" : index === currentBlock - 1 ? "left-block" : "right-block"}`}
              key={index}
            >
              {block}
            </div>
          ))}
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
