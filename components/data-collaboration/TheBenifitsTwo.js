import React from "react";
import Image from "next/image";
const TheBenifitsTwo = ({ firstBenefits, secondBenefits, thirdBenefits }) => {
  return (
    <section
      className=" w-full bg-athinia-dark flex-initial h-auto
              break-words pb-[8rem] bg-[length:50vw_auto] "
     
    >
      <div className="max-w-[1400px] 
            mx-auto  text-white pb-10 px-[30px] md:px-8  ">
        <h3 className=" text-lg-medium md:text-lg-large mb-3">Benefits</h3>
        <h3 className=" text-sm-medium md:text-lg-medium mb-3">
          Our secure data ecosystem helps device makers:
        </h3>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-3 flex flex-col md:flex-row
        max-w-[1400px] 
        mx-auto md:px-8 lg:px-3"
      >
        <div className="px-[30px] md:px-2 lg:px-5 py-5 md:py-0">
          <Image
            src={`/images/${firstBenefits.image}`}
            width={102}
            height={102}
            alt='benefits'
            className="w-[75px] h-[79px]  md:w-[50px] md:h-[50px] lg:w-[102px] lg:h-[102px] mb-3"
          />
          <h3 className="text-athinia-blue text-lg-small mb-3">
            {firstBenefits.title}
          </h3>
          <p className="text-white">{firstBenefits.body1}</p>
          <p className="text-white">{firstBenefits.body2}</p>
        </div>
        <div className="px-[30px] md:px-2 lg:px-5 py-5 md:py-0">
          <Image
            src={`/images/${secondBenefits.image}`}
            width={102}
            height={102}
            alt='benefits'
            className="w-[75px] h-[79px] md:w-[50px] md:h-[50px] lg:w-[102px] lg:h-[102px] mb-3"
          />
          <h3 className="text-athinia-blue text-lg-small mb-3">
            {secondBenefits.title}
          </h3>
          <p className="text-white">{secondBenefits.body1}</p>
          <p className="text-white">{secondBenefits.body2}</p>
        </div>
        <div className="px-[30px] md:px-2 lg:px-5  py-5 md:py-0">
          <Image
            src={`/images/${thirdBenefits.image}`}
            width={102}
            height={102}
            alt='benefits'
            className="w-[75px] h-[79px] md:w-[50px] md:h-[50px] lg:w-[102px] lg:h-[102px] mb-3"
          />
          <h3 className="text-athinia-blue text-lg-small mb-3">
            {thirdBenefits.title}
          </h3>
          <p className="text-white">{thirdBenefits.body1}</p>
          <p className="text-white">{thirdBenefits.body2}</p>
        </div>
      </div>
    </section>
  );
};

export default TheBenifitsTwo;
