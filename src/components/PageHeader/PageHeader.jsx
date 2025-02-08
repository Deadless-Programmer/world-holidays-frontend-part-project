import React from 'react';

const PageHeader = ({ heading, paragraph, bgImage }) => {
  return (
    <div
      className="relative h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-slate-900 bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-white text-xl font-bold font-nunito">{heading}</p>
        <h1 className="text-white text-3xl md:text-5xl font-bold font-playfair mt-2 text-center">
          {paragraph}
        </h1>
      </div>
    </div>
  );
};

export default PageHeader;
