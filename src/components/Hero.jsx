import React, { Component } from "react";
import Headline from "./Headline";
import New from "./New";
import "./Hero.scss";

export class Hero extends Component {
  render() {
    return (
      <section id="hero">
        <Headline />
        <New />
      </section>
    );
  }
}

export default Hero;
