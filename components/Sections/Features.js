import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useRef } from "react";

const Features = () => {
  const svgRef = useRef(null);
  const svgRefGreen = useRef(null);
  const { width } = useWindowDimensions();

  const { scrollYProgress } = useScroll({ target: svgRef });
  const { scrollYProgress: scrollYProgressGreen  } = useScroll({
    target: svgRefGreen,
  });

  const yPosAnimPurple = useTransform(
    scrollYProgress,
    [0, 1],
    [100, -420]
  );

  const xPosAnimGreen = useTransform(
    scrollYProgressGreen,
    [1, 0],
    [170, -170]
  );

  return (
    <section
      className="w-full min-h-[100vh] flex-initial h-auto
                    break-words bg-athinia-dark p-[2em] md:py-[0em] md:px-[2em]"
    >
      <div
        className="grid grid-cols-1 md:grid-cols-5 
                    min-h-[64vh] md:min-h-[100vh] max-w-[1400px]
                    mx-auto items-center relative"
      >
        <div className="col-span-2 text-white ">
          <h3 className="mb-3 md:mb-20 text-sm-medium md:text-lg-medium md:letter-spacing--2 lg:letter-spacing-0">
            By making data exchange easy and safe, and enabling the use of
            advanced analytics, Athinia™ can help materials suppliers and device
            makers uncover novel insights that improve semiconductor
            manufacturing.
          </h3>
        </div>
        <div className="col-span-.5 py-8 md:py-0">
          <div className="hidden md:block">
            <motion.div
              ref={svgRef}
              style={{ y: yPosAnimPurple }}
              transition={{ duration: 80 }}
            >
              <Image
                src={"/images/icon4.svg"}
                alt="icon-4"
                className="ml-auto mr-auto"
                width={ width > 1024 ? 41 : 28}
                height={41}
              />
            </motion.div>
          </div>
          <div className="block md:hidden">
            <motion.div
                ref={svgRefGreen}
                style={{ x: xPosAnimGreen, y: 0 }}
                transition={{ duration: 80 }}
              >
              <Image
                src={"/images/icon2.svg"}
                alt="icon-4"
                className="ml-auto mr-auto"
                width={100}
                height={100}
              />
            </motion.div>
          </div>
        </div>
        <div className="col-span-2">
          <h4
            className="text-sm-medium md:text-lg-medium tracking-[-1px] 
                                    text-left text-athinia-blue "
          >
            Smart Data.{" "}
          </h4>
          <p className="text-white text-left ">
            Structuring, contextualizing and​ visualizing data in and beyond the
            Certificate of Analysis into one consolidated view
          </p>

          <div className="py-5">
            <svg
              width={25}
              height={25}
              className="fill-athinia-blue"
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              y="0px"
              viewBox="0 0 73.3 73.3"
            >
              <path d="M72.7,33.3c-1.8-5.2-7.6-7.9-12.8-6.1c-2.8,1-5.1,3.2-6.1,6.1H40V19.5c4-1.5,6.6-5.3,6.6-9.5c0-5.5-4.5-10-10-10  s-10,4.6-10,10.1c0,4.2,2.7,8,6.7,9.4v13.8H19.5c-1.5-4-5.3-6.6-9.5-6.6c-5.5,0-10,4.5-10,10s4.6,10,10.1,10c4.2,0,8-2.7,9.4-6.7  h13.8v13.8c-5.2,1.8-7.9,7.6-6.1,12.8c1.8,5.2,7.6,7.9,12.8,6.1s7.9-7.6,6.1-12.8c-1-2.8-3.2-5.1-6.1-6.1V40h13.8  c1.8,5.2,7.6,7.9,12.8,6.1S74.5,38.5,72.7,33.3z"></path>
            </svg>
          </div>
          <h4
            className="text-sm-medium md:text-lg-medium tracking-[-1px] 
                                    text-left text-athinia-blue "
          >
            Secure Collaboration.
          </h4>
          <p className="text-white text-left ">
            Enabling collaborative analytics through secure sharing of
            obfuscated and normalized data within and between organizations​.
          </p>
          <div className="py-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              className="fill-athinia-green"
              id="Layer_1"
              y="0px"
              viewBox="0 0 73.1 50.3"
            >
              <g>
                <path d="M6.6,19.5c5.2,1.8,10.9-0.9,12.8-6.1h34.3c1,2.9,3.3,5.1,6.1,6.1c5.2,1.8,11-0.9,12.8-6.1c1.8-5.2-0.9-11-6.1-12.8   s-11,0.9-12.8,6.1H19.4C18,2.7,14.2,0,10,0C5.7,0,2,2.7,0.5,6.7C-1.3,11.9,1.4,17.6,6.6,19.5z"></path>
                <path d="M66.5,30.8c-5.2-1.8-11,0.9-12.8,6.1H19.4c-1.4-4-5.2-6.7-9.4-6.7c-4.3,0.1-8,2.7-9.5,6.7c-1.8,5.2,0.9,11,6.1,12.8   c5.2,1.8,10.9-0.9,12.8-6.1h34.3c1,2.9,3.3,5.1,6.1,6.1c5.2,1.8,11-0.9,12.8-6.1C74.4,38.4,71.7,32.6,66.5,30.8z"></path>
              </g>
            </svg>
          </div>
          <h4
            className="text-sm-medium md:text-lg-medium tracking-[-1px] 
                                    text-left text-athinia-green "
          >
            Smarter Manufacturing.
          </h4>
          <p className="text-white text-left ">
            Combining data and material science across the value chain to
            provide insights that allow for faster innovation in manufacturing
            processes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
