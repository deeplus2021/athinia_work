import React from "react";
import CustomButton from "../Buttons/CustomButton";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useRef } from "react";


const GetInContact = ({
  subTitle = "",
  extraClass = ""
}) => {
  const svgRefGreen = useRef(null);
  const svgRefPurple = useRef(null);
  const svgRefBlueOne = useRef(null);
  const svgRefBlueTwo = useRef(null);

  const {width} = useWindowDimensions()

  const { scrollYProgress: scrollYProgressGreen  } = useScroll({
    target: svgRefGreen,
  });

  const { scrollYProgress: scrollYProgressPurple } = useScroll({
    target: svgRefPurple,
  });

  const { scrollYProgress: scrollYProgressBlueOne } = useScroll({
    target: svgRefBlueOne,
  });

  const { scrollYProgress: scrollYProgressBlueTwo } = useScroll({
    target: svgRefBlueTwo,
  });




  const yPosAnimBlueOne = useTransform(
    scrollYProgressBlueOne,
    [1, 0.5],
    width > 1024 ? [180, 0] : [180, -20]
  );

  const xPosAnimBlueOne = useTransform(
    scrollYProgressBlueOne,
    [1, 0.5],
    width > 1024 ? [-300, 0] : [-300, -40]
  );


  // Green 
  const yPosAnimGreen = useTransform(
    scrollYProgressGreen,
    [1, 0.5],
    width > 1024 ? [-50, 0] : [-100, -20]
  );

  const xPosAnimGreen = useTransform(
    scrollYProgressGreen,
    [1, 0.5],
    width > 1024 ? [150, 0] : [100, -60]
  );
 

  // Blue
  const yPosAnimBlueTwo = useTransform(
    scrollYProgressBlueTwo,
    [1, 0.5],
    width > 1024 ? [300, 0] : [0, -100]
  );

  const xPosAnimBlueTwo = useTransform(
    scrollYProgressBlueTwo,
    [1, 0.5],
    width > 1024 ? [100, 0] : [100, -90]
  );

  // Purple
  const yPosAnimBluePurple = useTransform(
    scrollYProgressPurple,
    width > 1024 ? [1, 0.5] : [1, 0],
    width > 1024 ? [-150, 0] : [-200, 80]
  );

  const xPosAnimBluePurple = useTransform(
    scrollYProgressPurple,
    [1, 0.5],
    width > 1024 ? [-200, 0] : [-200, -8]
  );

  return (
    <section
      className={`w-full flex-initial h-auto
    break-words md:overflow-hidden lg:overflow-auto ${extraClass ? extraClass : 'p-[8%_0%_14%_0%] px-10 md:px-0'}`}
    >
      <div className=" grid grid-cols-5 gap-0 max-w-[1400px]  mx-auto md:px-[2em] lg:px-[1.5em]">
        <div className="col-span-5 md:col-span-4 lg:ml-2 lg:pr-10">
          <h1
            className="text-sm-large md:text-[3em] lg:text-lg-large my-4 md:my-0 md:tracking-[-1.5px] 


                                    text-left text-blue"
          >
            Come be a pioneer.​
          
          </h1>
          <h3
            className="text-sm-medium md:text-lg-medium lg:tracking-[-1px] 
                    text-left text-athinia-purple  pr-3 md:pr-[2rem] lg:pr-0 md:mt-4 md:letter-spacing--1"
          >
            {subTitle ? subTitle : 'Athinia™ is establishing a new standard of quality management for the semiconductor industry​.'}
          </h3>

          <CustomButton
            isInternal={true}
            text={"GET IN CONTACT"}
            wrapperClass={"my-20"}
            link="\contact"
            extraClass={
              "text-white text-center inline xl:block hover:bg-athinia-purple text-[1.2em] tracking-[1px] "
            }
            paddingY={"py-[1.1rem] md:py-4"}
            paddingX={"px-[30px]"}

            background={"bg-athinia-blue"}
          />
        </div>

        <div className="col-span-5 md:col-span-1 hidden md:block md:ml-[3.5rem] lg:ml-0">
          <div className="flex relative flex-row">
            <div className=" inline mr-8">
              <motion.small ref={svgRefBlueOne} style={{y:yPosAnimBlueOne, x:xPosAnimBlueOne  }} className="block w-[35px] lg:w-[50px] h-[50px]" transition={{ duration: 30 }}>
                <Image
                  className="inline"
                  alt="icon3"
                  src="/images/icon3.svg"
                  width={50}
                  height={50}
                />
              </motion.small>
            </div>
            <div className=" inline mr-3 relative">
              <motion.small ref={svgRefGreen} style={{y: yPosAnimGreen, x:xPosAnimGreen}} className="block w-[125px] lg:w-[175px]" transition={{ duration: 30 }}>
                {" "}
                <Image
                  className="inline"
                  alt="icon2"
                  src="/images/icon2.svg"
                  width={180}
                  height={100}
                />
              </motion.small>
            </div>
          </div>
          <div className="flex flex-row my-8">
            <div className=" inline mr-8 relative">
              <motion.small  ref={svgRefPurple} style={{y:yPosAnimBluePurple, x:xPosAnimBluePurple  }} className="block w-[35px] lg:w-[50px] h-[175px]" transition={{ duration: 30 }}>
              
                <Image
                  className="inline "
                  src="/images/icon4.svg"
                  alt="icon-4"
                  layout="fill"
                />
              </motion.small>
            </div>
            <div className=" inline mr-3 relative">
              <motion.small ref={svgRefBlueTwo} style={{x:xPosAnimBlueTwo, y:yPosAnimBlueTwo}} className="block w-[125px] lg:w-[175px] h-[175px]" transition={{ duration: 30 }}>
                <Image
                  alt="icon-1"
                  className="inline"
                  src="/images/icon1.svg"
                  layout="fill"
                />
              </motion.small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInContact;
