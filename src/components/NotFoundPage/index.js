import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { ChristmasTree } from "../Navbar/NavbarElements";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  XmasP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from "../HeroSection/HeroElements";
import Video from "../../videos/wofhHero1.mp4";

const PageNotFound = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1 style={{ fontSize: "100px", fontWeight: "600" }}>404</HeroH1>
        <HeroH1>Lost your way?</HeroH1>
        <HeroP>
          Seems we have run into a problem and can't find the page you're
          looking for. Pleae navigative back to our homepage.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="false"
            to="/enquire"
            onClick={toggleHome}
            smooth="1"
            offset={-70}
            duration={400}
          >
            Home {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default PageNotFound;
