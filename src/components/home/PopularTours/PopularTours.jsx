import React from "react";
import ImageGallery from "./ImageGallery";
import SectionHeading from "../../SectionHeading/SectionHeading";

const PopularTours = () => {
  return (
    <div className="mt-16">
      <SectionHeading className=''
        subHeadingTag={"Choose your dream place"}
        headingFirst={"Popular"}
        heading2nd={"Tours"}
      ></SectionHeading>
      <section className="container max-w-7xl px-6 mx-auto ">
        <ImageGallery />
      </section>
    </div>
  );
};

export default PopularTours;
