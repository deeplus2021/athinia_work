import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const FourCol = () => {
  const svgRefPurple = useRef(null);
  const { width } = useWindowDimensions();

  const { scrollYProgress: scrollYProgressPurple } = useScroll({
    target: svgRefPurple,
  });

  const yPosAnimPurple = useTransform(
    scrollYProgressPurple,
    [0, 0.5, 1],
    width > 1024 ? [700, 150, -245] : [700, -100, -200]
  );


  return (
    <section

      className="bg-athinia-dark w-full flex-initial bg-[length:145px_165px] md:bg-[length:160px_180px] lg:bg-[length:300px_300px] xl:bg-[length:380px_420px]
    min-h-[64vh] md:min-h-[65vh] lg:min-h-[75vh] bg-hero2-image bg-no-repeat bg-left-top break-words md:pb-0 lg:pb-[2.5rem] md:pt-0 lg:pt-20"
    >
      <div
        className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-9 gap-3
        max-w-[1400px] py-8  mx-auto mt-10 md:mt-[4.5rem] lg:mt-[4rem]"
      >
        <div className="col-span-5 md:col-span-7 lg:col-span-2 px-0 lg:px-2">
          <h3
            className="text-sm-large md:text-lg-large md:text-[3em] lg:text-[4em] md:tracking-[-2px] 
                              text-center md:text-center  text-white lg:text-left"
          >
            Values
          </h3>
        </div>
        <div className="hidden md:block col-span-0 md:col-span-1 px-0 md:px-5 lg:px-0 relative lg:mr-8">
         <motion.small ref={svgRefPurple} style={{y:yPosAnimPurple}} className="absolute" transition={{ duration: 100 }}>
         <Image src={"/images/icon4.svg"} alt="value-image" width={40} height={40} className={'w-[40px] h-[146px] md:w-[30px] md:h-[130px] lg:w-[40px] lg:h-[146px]'} />
         </motion.small>
        </div>
        <div className="col-span-5  md:col-span-6 lg:col-span-6  px-[2rem] md:pl-[4.5rem] md:pr-5 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 md:gap-x-2 py-10 md:px-0 pt-[3.3rem] lg:pt-3">
            <div className="lg:pl-[2.8rem] lg:pr-0">
              <h3
                className="text-sm-medium md:text-lg-medium md:tracking-[-1px] 
                              text-left text-athinia-blue "
              >
                Encourage the safe, free flow of information.
              </h3>
            </div>
            <div className="lg:pl-[1rem] lg:pr-[1rem]">
              <h3
                className="font-semibold md:text-lg-small 
                              text-left text-athinia-blue lg:line-height-15"
              >
                We believe transparency is the first step in making better
                decisions.
              </h3>
              <p className="text-white text-left mt-4 lg:mt-3 lg:mt-4">
                Our goal is to safely collect disparate quality, manufacturing,
                and in-process data from within and across organizations into a
                uniform structure that can be easily analyzed.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 md:gap-x-2 py-10 pt-[0.5rem] md:px-0 md:pt-[1rem] lg:pt-[1.5rem]">
            <div className="lg:pl-[2.8rem] lg:pr-0">
              <h3
                className="text-sm-medium md:text-lg-medium md:tracking-[-1px] 
                              text-left text-athinia-green "
              >
                Solve through science.
              </h3>
            </div>
            <div className="lg:pl-[1rem] lg:pr-[1rem]">
              <h3
                className="font-semibold md:text-lg-small
                              text-left text-athinia-green lg:line-height-15"
              >
                We take a scientific lens to help you move with precision.
              </h3>
              <p className="text-white text-left mt-4 lg:mt-3 lg:mt-4">
                We are both data scientists and material scientists. After
                aggregating relevant data, we combine our knowledge of materials
                and the manufacturing process to provide actionable
                recommendations on how to improve material quality.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 md:gap-x-2 py-10 pt-[0.5rem] md:px-0 md:pt-[1rem] lg:pt-[1.5rem]">
            <div className="lg:pl-[2.8rem] lg:pr-0">
              <h3
                className="text-sm-medium md:text-lg-medium md:tracking-[-1px] 
                              text-left text-athinia-blue "
              >
                Champion data ownership and security.
              </h3>
            </div>
            <div className="lg:pl-[1rem] lg:pr-[1rem]">
              <h3
                className="font-semibold md:text-lg-small
                              text-left text-athinia-blue lg:line-height-15"
              >
                We believe transparency should never be at odds with security.
              </h3>
              <p className="text-white text-left mt-4 lg:mt-3 lg:mt-4">
                Built with the highest levels of security and data privacy, our
                platform is designed to encourage collaboration, but only when
                and with whom you choose to collaborate. We also anonymize our
                customers’ data to allow for greater sharing within and across
                organizations without compromising ownership.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 md:gap-x-2 py-10 pt-[0.5rem] md:px-0 md:pt-[1rem] lg:pt-[1.5rem]">
            <div className="lg:pl-[2.8rem] lg:pr-0">
              <h3
                className="text-sm-medium md:text-lg-medium md:tracking-[-1px] 
                              text-left text-athinia-green "
              >
                Drive collaboration.
              </h3>
            </div>
            <div className="lg:pl-[1rem] lg:pr-[1.5rem]">
              <h3
                className="font-semibold md:text-lg-small
                              text-left text-athinia-green lg:line-height-15"
              >
                We want to deliver impact for individual companies and the
                entire industry.
              </h3>
              <p className="text-white text-left mt-4 lg:mt-3 lg:mt-4">
                We are creating a unified data and analytics platform that
                allows for the free flow of relevant information across our
                customers’ ecosystems, helping to raise our collective
                intelligence and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourCol;
