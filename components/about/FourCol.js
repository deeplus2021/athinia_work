import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const FourCol = () => {
  const svgRefPurple = useRef(null);
  const { scrollYProgress: scrollYProgressPurple } = useScroll({
    target: svgRefPurple,
  });

  const yPosAnimPurple = useTransform(
    scrollYProgressPurple,
    [0, 0.5, 1],
    [600, 250, -250]
  );


  return (
    <section

      className="bg-athinia-dark w-full flex-initial bg-[length:100px_100px] md:bg-[length:200px_200px] lg:bg-[length:300px_300px]
    min-h-[64vh] md:min-h-[65vh] lg:min-h-[75vh] bg-hero2-image bg-no-repeat bg-left-top break-words md:py-20"
    >
      <div
        className="grid grid-cols-1 md:grid-cols-7 gap-3
        max-w-screen-xl py-8  mx-auto mt-20"
      >
        <div className="col-span-5 md:col-span-7 lg:col-span-2 px-0 ">
          <h3
            className="text-sm-large md:text-lg-large tracking-[-1px] 
                              text-center md:text-center  text-white "
          >
            Values
          </h3>
        </div>
        <div className="hidden md:block col-span-0 md:col-span-1 px-0 md:px-5 lg:px-0 relative">
         <motion.small ref={svgRefPurple} style={{y:yPosAnimPurple}} className="absolute">
         <Image src={"/images/icon4.svg"} alt="value-image" width={40} height={40} className={'w-[40px] h-[146px] md:w-[30px] md:h-[130px] lg:w-[40px] lg:h-[146px]'} />
         </motion.small>
        </div>
        <div className="col-span-5  md:col-span-6 lg:col-span-4  px-5 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 py-10  md:px-0">
            <div>
              <h3
                className="text-sm-medium md:text-lg-medium tracking-[-1px] 
                              text-left text-athinia-blue "
              >
                Encourage the safe, free flow of information.
              </h3>
            </div>
            <div>
              <h3
                className="font-semibold md:text-lg-small tracking-[-1px] 
                              text-left text-athinia-blue "
              >
                We believe transparency is the first step in making better
                decisions.
              </h3>
              <p className="text-white text-left mt-3">
                Our goal is to safely collect disparate quality, manufacturing,
                and in-process data from within and across organizations into a
                uniform structure that can be easily analyzed.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 py-10  md:px-0">
            <div>
              <h3
                className="text-sm-medium md:text-lg-medium tracking-[-1px] 
                              text-left text-athinia-green "
              >
                Solve through science.
              </h3>
            </div>
            <div>
              <h3
                className="font-semibold md:text-lg-small 
                              text-left text-athinia-green "
              >
                We take a scientific lens to help you move with precision.
              </h3>
              <p className="text-white text-left mt-3">
                We are both data scientists and material scientists. After
                aggregating relevant data, we combine our knowledge of materials
                and the manufacturing process to provide actionable
                recommendations on how to improve material quality.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 py-10  md:px-0">
            <div>
              <h3
                className="text-sm-medium md:text-lg-medium tracking-[-1px] 
                              text-left text-athinia-blue "
              >
                Champion data ownership and security.
              </h3>
            </div>
            <div>
              <h3
                className="font-semibold md:text-lg-small tracking-[-1px] 
                              text-left text-athinia-blue "
              >
                We believe transparency should never be at odds with security.
              </h3>
              <p className="text-white text-left mt-3">
                Built with the highest levels of security and data privacy, our
                platform is designed to encourage collaboration, but only when
                and with whom you choose to collaborate. We also anonymize our
                customers’ data to allow for greater sharing within and across
                organizations without compromising ownership.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 py-10  md:px-0">
            <div>
              <h3
                className="text-sm-medium md:text-lg-medium tracking-[-1px] 
                              text-left text-athinia-green "
              >
                Drive collaboration.
              </h3>
            </div>
            <div>
              <h3
                className="font-semibold md:text-lg-small tracking-[-1px] 
                              text-left text-athinia-green "
              >
                We want to deliver impact for individual companies and the
                entire industry.
              </h3>
              <p className="text-white text-left mt-3">
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
