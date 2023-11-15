import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection style={{ paddingTop: "20px" }}>
      <SectionTitle style={{ marginTop: "40px" }} main center>
        Hello, I'm <br></br>
        Muhammad Usman {/* <br /> My Personal Portfolio */}{" "}
      </SectionTitle>{" "}
      <SectionText>A Full Stack Developer </SectionText>{" "}
      <Button
        onClick={() =>
          (window.location.href =
            "https://drive.google.com/file/d/12kmNLqV17aG6H0iWuwfDZkp4Ry2ndp_L/view?usp=sharing")
        }
      >
        E-Book{" "}
      </Button>{" "}
    </LeftSection>{" "}
  </Section>
);

export default Hero;
