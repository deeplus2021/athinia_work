import React from "react";
import CustomButton from "../Buttons/CustomButton";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const GetInContact = () => {
  const svgRefGreen = useRef(null);
  const svgRefPurple = useRef(null);
  const svgRefBlueOne = useRef(null);
  const svgRefBlueTwo = useRef(null);

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
    [180, 0]
  );

  const xPosAnimBlueOne = useTransform(
    scrollYProgressBlueOne,
    [1, 0.5],
    [-300, 0]
  );


  // Green 
  const yPosAnimGreen = useTransform(
    scrollYProgressGreen,
    [1, 0.5],
    [-50, 0]
  );

  const xPosAnimGreen = useTransform(
    scrollYProgressGreen,
    [1, 0.5],
    [150, 0]
  );
 

  // Blue
  const yPosAnimBlueTwo = useTransform(
    scrollYProgressBlueTwo,
    [1, 0.5],
    [300, 0]
  );

  const xPosAnimBlueTwo = useTransform(
    scrollYProgressBlueTwo,
    [1, 0.5],
    [100, 0]
  );

  // Purple
  const yPosAnimBluePurple = useTransform(
    scrollYProgressPurple,
    [1, 0.5],
    [-150, 0]
  );

  const xPosAnimBluePurple = useTransform(
    scrollYProgressPurple,
    [1, 0.5],
    [-200, 0]
  );

  return (
    <section
      className="w-full flex-initial h-auto
    break-words p-[8%_0%_14%_0%] px-10 md:px-0"
    >
      <div className=" grid grid-cols-5 gap-0 max-w-[1400px]  mx-auto ">
        <div className="col-span-5 md:col-span-4 lg:pr-10">
          <h1
            className="text-sm-large md:text-[48px] lg:text-lg-large my-4 md:my-0 tracking-[-1px] 


                                    text-left "
          >
            Come be a pioneer.​
          
          </h1>
          <h3
            className="text-sm-medium md:text-lg-medium tracking-[-1px] 
                    text-left text-athinia-purple  pr-3 md:pr-5 lg:pr-0"
          >
            Athinia™ is establishing a new standard of quality management for
            the semiconductor industry​.
          </h3>

          <CustomButton
            isInternal={true}
            text={"GET IN CONTACT"}
            wrapperClass={"my-20"}
            link="\contact"
            extraClass={
              "text-white text-center inline xl:block hover:bg-athinia-purple text-[1.2em] "
            }
            paddingY={"py-4"}
            paddingX={"px-8"}

            background={"bg-athinia-blue"}
          />
        </div>

        <div className="col-span-5 md:col-span-1 hidden md:block">
          <div className="flex relative flex-row">
            <div className=" inline mr-8">
              <motion.small ref={svgRefBlueOne} style={{y:yPosAnimBlueOne, x:xPosAnimBlueOne  }} className="block h-[50px] w-[50px]" transition={{ duration: 30 }}>
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
              <motion.small ref={svgRefGreen} style={{y: yPosAnimGreen, x:xPosAnimGreen}} className="block w-[175px]" transition={{ duration: 30 }}>
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
              <motion.small  ref={svgRefPurple} style={{y:yPosAnimBluePurple, x:xPosAnimBluePurple  }} className="block w-[50px] h-[175px]" transition={{ duration: 30 }}>
              
                <Image
                  className="inline "
                  src="/images/icon4.svg"
                  alt="icon-4"
                  layout="fill"
                />
              </motion.small>
            </div>
            <div className=" inline mr-3 relative">
              <motion.small ref={svgRefBlueTwo} style={{x:xPosAnimBlueTwo, y:yPosAnimBlueTwo}} className="block w-[175px] h-[175px]" transition={{ duration: 30 }}>
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
