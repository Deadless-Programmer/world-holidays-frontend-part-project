import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import Accordion from "../../components/about/Accordion/Accordion";
import KeyStrategies from "../../components/about/KeyStrategies/KeyStrategies";
import OurTeam from "../../components/about/OurTeam/OurTeam";

const AboutUs = () => {
  return <div>
    <  PageHeader heading={'About Us'} paragraph={'Our Story In World Holidays'}/>

    <Accordion/>
    <KeyStrategies/>
    <OurTeam/>
  </div>;
};

export default AboutUs;
