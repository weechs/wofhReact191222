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

const HeroSection = () => {
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
        <HeroH1>Specialists in 24 Hour Posture Management</HeroH1>
        <HeroP>
          Enabling Solutions That Meet Complex 24-hour Posture Management Needs.
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
            Contact Us {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
        <div
          style={{ marginTop: "20px", fontSize: "32px", textAlign: "center" }}
        >
          <XmasP
            style={{
              marginTop: "20px",
              fontSize: "32px",
              textAlign: "center",
              fontWeight: "600"
            }}
          >
            <ChristmasTree />
            <h4
              style={{
                marginTop: "20px",
                fontSize: "20px",
                textAlign: "center"
              }}
            >
              <ImQuotesLeft
                style={{ marginRight: "2px", paddingBottom: "10px" }}
              />
              Wishing all our clients, partners and colleagues all the very best
              for the festive season. We look forward to seeing you in 2023
              <ImQuotesRight
                style={{ marginLeft: "2px", paddingBottom: "10px" }}
              />
            </h4>
          </XmasP>
        </div>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
