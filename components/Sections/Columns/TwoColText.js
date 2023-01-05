import React from "react";

const TwoColText = () => {
  return (
    <section
      className="w-full flex-initial h-auto
    break-words mt-10 md:mt-20 pt-10 md:py-10 lg:py-0"
    >
      <div
        className="flex flex-col lg:flex-row
        max-w-[1400px] p-8
                    mx-auto px-[2em] lg:px-5 lg:px-0"
      >
        <div className="flex-initial lg:w-[60%] md:pb-8 lg:pb-0">
          <h3 className="text-sm-large md:text-lg-large mr-0 md:mr-10 md:font-size-3em md:letter-spacing--2 lg:letter-spacing-0">Athinia offers a faster path to success.</h3>
        </div>

        <div className="flex-initial lg:w-[40%] mt-[4rem] md:mt-10 lg:mt-2 md:mr-5 md:letter-spacing--1 lg:letter-spacing-0 lg:mr-0">
          <h3 className="text-sm-medium md:text-lg-medium text-athinia-blue">
            Athinia's™ unified approach for aggregating data from dispersed
            systems can help companies avoid lengthy learning cycles and costly
            capability building
          </h3>
        </div>
      </div>
    </section>
  );
};

export default TwoColText;
