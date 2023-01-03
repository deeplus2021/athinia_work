import React from "react";

const BlueSection = ({content, contentPadding = 'px-[5%]', wrapperPadding = 'md:py-20'}) => {
  return (
    <section
      className={`w-full bg-athinia-blue flex-initial h-auto
            break-words py-3 ${wrapperPadding} bg-[70vw_0vw] bg-[length:50vw_auto]`}
  
    >
      <div
        className=" flex flex-col md:flex-row
        max-w-[1400px] py-2 md:p-2 mx-auto text-white"
      >
        <div  >
          <h3 className={`text-sm-medium  md:text-lg-medium ${contentPadding} md:px-8 lg:px-0`}>
         {content}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default BlueSection;
