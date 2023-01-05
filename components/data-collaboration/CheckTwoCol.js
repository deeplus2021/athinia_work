import React from "react";
import Image from "next/image";
import { FaCheck } from 'react-icons/fa'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const CheckTwoCol = () => {
  const svgRefGreen = useRef(null);
  const { scrollYProgress } = useScroll({
    target: svgRefGreen,
  });
  const {width} = useWindowDimensions()

  const yPosAnimGreen = useTransform(
    scrollYProgress,
    [0, 1],
    [950, 750]
  );

  const yPosAnimGreenTablet = useTransform(
    scrollYProgress,
    [0, 1],
    [600, 200]
  );
  
  return (
    <section
      className="w-full flex-initial h-auto
            break-words  bg-athinia-dark py-[5.5rem] pb-[3rem] md:pb-[4rem] my-10 mt-[7.5rem] md:mt-20 lg:mt-0"
    >
              <div className="relative grid justify-items-center w-[100px] md:w-[125px] lg:w-[175px]">
<motion.small ref={svgRefGreen} style={{x: width > 1024 ? yPosAnimGreen : (width > 768 ? yPosAnimGreenTablet : 150), y:width > 1024 ? -115 : -105}} className="block" transition={{ duration: 80 }}>
     
          <Image src={"/images/icon2.svg"} height={150} width={175} />
        </motion.small>
</div>
      <div
        className="grid grid-cols-1 md:grid-cols-2
        max-w-[1400px] md:p-8 mx-auto py-0 md:py-10 gap-x-20 lg:px-4
  text-athinia-green"
  
      >

        <div className="">
          <div className="px-8 py-5 md:pl-0 md:pr-5 lg:px-10 md:py-0 lg:p-0">
            <h3 className="text-sm-medium md:text-lg-medium ">
              State-of-the-art security features protect against internal and
              external bad actors
            </h3>
          </div>
        </div>
        <div className="mt-5 md:mt-0 lg:px-3">
          <ul className="list-none	text-sm-small md:text-sm-medium md:font-normal px-[2rem] md:p-0">
            <li className="flex md:items-center lg:items-start">
            <span><FaCheck size={25} className="color-athinia-green inline mb-3"/></span>
              <span className="ml-3 text-sm-small">Encryption at rest and in transit</span>
            </li>
            <li className="flex mt-0 md:mt-2 lg:mt-0">
            <span><FaCheck size={25} className="color-athinia-green inline mb-3"/></span>
              <span  className="ml-3">Single Sign On with customer identity provider</span>
            </li>
            <li className="flex mt-0 md:mt-2 lg:mt-0">
              <span><FaCheck size={25} className="color-athinia-green inline mb-3"/></span>
              <span className="ml-3">Multifactor authentication</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CheckTwoCol;
