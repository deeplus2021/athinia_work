import React from "react";
import { motion, useScroll, useTransform} from "framer-motion";
import { useRef } from "react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";


const ImageText = () => {

  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
  });

  const {width } =useWindowDimensions()

  const yPosAnimText = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [100, 50, 0]
  );
  return (
    <section
      className="w-full bg-athinia-dark flex-initial h-auto
              break-words"
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2
              min-h-[50vh] md:min-h-[90vh] lg:min-h-[100vh] max-w-[1400px] px-[2em] pt-[2.3em] pb-[6.5em] md:py-[2em] md:px-[2em] lg:px-[0em] lg:p-[0_2em_4.5em_1em]
              mx-auto items-center "
      >
        <div
          className="bg-ecosystem-image bg-contain bg-center bg-no-repeat 
                              h-[350px] w-100 md:h-[400px] xl:h-[600px] xl:w-[670px] xl:min-h-[800px] lg:min-h-[550px]"

        ></div>

        <div className=" pt-[2rem] md:pt-0 md:px-0 relative md:mb-20 lg:ml-4">
          <motion.div ref={textRef} style={{y: width < 768 ? '' : yPosAnimText}}>
          <h3
            className="text-sm-medium md:text-[38px] lg:text-lg-medium md:tracking-[-1px] 
                              text-left text-white mb-[20px]"
          >
            Building a data ecosystem to help the semiconductor industry focus
            time and resources where it matters most.
          </h3>
          <p className="text-white text-left mb-[1em]">
            Athinia™ provides a secure data analytics platform for collaborating
            on relevant information from material suppliers and device makers.
          </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImageText;
