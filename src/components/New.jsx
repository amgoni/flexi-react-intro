import React from "react";
import "./New.scss";
import { NewStories } from "../Data";

const New = () => {
  return (
    <div className="new">
      <h2>New</h2>
      {NewStories.map((story) => (
        <div className="new-section">
          <h3>{story.heading}</h3>
          <p>{story.detail}</p>
        </div>
      ))}
    </div>
  );
};

export default New;
