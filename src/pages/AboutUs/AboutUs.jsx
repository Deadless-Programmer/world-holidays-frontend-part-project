import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import Accordion from "../../components/about/Accordion/Accordion";
import KeyStrategies from "../../components/about/KeyStrategies/KeyStrategies";
import OurTeam from "../../components/about/OurTeam/OurTeam";

const AboutUs = () => {
  return <div>
    <PageHeader/>

    <Accordion/>
    <KeyStrategies/>
    <OurTeam/>
  </div>;
};

export default AboutUs;
