import React from "react";
import "./Story.scss";

const Story = ({ image, number, heading, summary }) => {
  return (
    <div className="story">
      <img src={image} alt="" />
      <div className="story-text">
        <h2>{number}</h2>
        <h3>{heading}</h3>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default Story;
