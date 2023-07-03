import React from "react";
import Headline from "./Headline";
import New from "./New";
import styled from "styled-components";
// import "./Hero.scss";

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 95%;
    flex-direction: column;

    .headline {
      padding-right: 0;
      width: 100%;

      &-writeup {
        flex-direction: column;

        &-heading {
          width: 100%;
          font-size: 1.5rem;
          margin: 0;
        }

        &-detail {
          width: 100%;

          button {
            margin-top: 1rem;
          }
        }
      }
    }
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <Headline />
      <New />
    </HeroWrapper>
  );
};

export default Hero;
