import React from "react";
import "./Stories.scss";
import Story from "./Story";
import { Pieces } from "../Data";

const Stories = () => {
  return (
    <section id="stories">
      {Pieces.map((piece) => (
        <Story
          key={piece.id}
          image={piece.image}
          number={piece.id}
          heading={piece.heading}
          summary={piece.summary}
        />
      ))}
    </section>
  );
};

export default Stories;
