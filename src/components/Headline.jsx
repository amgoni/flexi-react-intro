import React from "react";
import "./Headline.scss";

const Headline = () => {
  return (
    <>
      <div className="headline">
        <img src="../assets/image-web-3-desktop.jpg" alt="cover picture" />
        <div className="headline-writeup">
          <div className="headline-writeup-heading">
            <h1>The Bright Future of Web 3.0</h1>
          </div>
          <div className="headline-writeup-detail">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button type="button">READ MORE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headline;
