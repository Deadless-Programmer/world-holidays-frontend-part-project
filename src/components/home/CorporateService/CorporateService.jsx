import React from "react";
import Marquee from "react-fast-marquee";

function CorporateService() {
  return (
    <div className="container max-w-7xl my-20 mx-auto px-4">
      <div className="title mb-8">
        <h1 className="text-3xl font-semibold md:text-4xl font-playfair text-center mt-1 uppercase">
          Our <span className="text-orange-500">Partners</span>
        </h1>
      </div>

      <div className="py-10">
        <Marquee className="overflow-hidden" speed={60} delay={0} gradient={true}>
          {[ 
            "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png",
            "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
            "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
            "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
          ].map((src, index) => (
            <div key={index} className="h-24 w-24 sm:h-28 sm:w-28 mx-4 flex items-center">
              <img className="w-full h-full object-contain" src={src} alt="Partner Logo" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default CorporateService;
