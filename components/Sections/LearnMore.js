import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const LearnMore = ({
  text,
  subText,
  gap,
  textClass,
  bgClass,
  svgGreenClass,
  svgBlueClass,
  itemsCenter = true,
  isAnimateGreen = false,
  secondColClass = "p-[2em]",
  bottomBlue = 'bottom-[0%]',
  rightBlue = 'right-[-5%]',
  colOneOrderSM,
  colTwoOrderSM,
  boxClass = '',
  leftPadding = '',
  aboutPage = false,
  sectionClass = '',
  heightClass = '',
  contentCenter = true
}) => {
  const svgRefGreen = useRef(null);
  const svgRefBlue = useRef(null);
  const picRef = useRef(null);

  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const { scrollYProgress: scrollYProgressPic } = useScroll({
    target: picRef,
  
  });

  const { scrollYProgress: scrollYProgressGreen } = useScroll({
    target: svgRefGreen,
  });
  const { scrollYProgress: scrollYProgressBlue } = useScroll({
    target: svgRefBlue,
  });

  const yPosAnimGreen = useTransform(
    scrollYProgressGreen,
    aboutPage ? [0, 1] : [0, 0.3, 1],
    aboutPage ? (width > 1024 ? [-100, 450] : [-240, 0]) : [0, 100, 500]
  );

  const yPosAnimBlue = useTransform(
    scrollYProgressBlue,
    [0, 1],
    aboutPage ? (width > 1024 ? [-100, 140] : (width > 768 ? [-300, 85] : [-17, -17])) : [-400, 50]
  );

  const yPosAnimPic = useTransform(
    scrollYProgressPic,
    [0, 1],
    [-80, 20]
  );  

  const finalGap = gap ? gap : "gap-x-12 md:gap-x-12 lg:gap-x-12";
  const finalBGClass = bgClass
    ? bgClass
    : " h-[320px] w-[320px] md:h-[350px] md:w-[350px] lg:h-[550px] lg:w-[550px] mt-30 md:ml-5 lg:ml-0";

  const svgGreen = svgGreenClass
    ? svgGreenClass
    : "h-[100px] w-[100px] md:h-[55px] md:w-[140px] lg:h-[55px] lg:w-[175px] mt-10 md:ml-5 float-right";
  const svgBlue = svgBlueClass
    ? svgBlueClass
    : "h-[100px] w-[100px] md:h-[130px] md:w-[130px] lg:w-[175px] lg:h-[175px] mr-6 md:mr-0 mt-20 float-right fill-athinia-blue";

  return (
    <section
      className={`w-full h-auto lg:h-[100vh]   flex-initial h-auto
                    break-words ${sectionClass ? sectionClass : 'md:h-[100vh]'}`}
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 ${finalGap} 
                      max-w-[1400px] h-auto ${heightClass ? heightClass : 'md:h-[100vh]'} lg:h-[100vh] ${boxClass ? boxClass : 'py-5 md:py-0 px-8 md:px-4 lg:px-8 lg:pr-0'}
                    mx-auto ${itemsCenter ? "items-center" : ""} relative  ${contentCenter ? 'content-center' : 'lg:content-center'}`}
      >
        <div className={`${colOneOrderSM} ${leftPadding ? leftPadding : 'md:pl-4'} md:order-first  relative`}>
          <div className={`${svgGreen} `}>
            {isAnimateGreen ? (
              <motion.small
                style={{ x: !isMobile ? yPosAnimGreen : "" }}
                className="block relative z-[0]"
                ref={svgRefGreen}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 73.2 20.04"
                >
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path
                        d="M10,0a10,10,0,0,1,9.45,6.68H53.73a10,10,0,1,1,0,6.68H19.47A10,10,0,1,1,10,0"
                        fill="#65c4a7"
                      ></path>
                    </g>
                  </g>
                </svg>
              </motion.small>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.2 20.04">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      d="M10,0a10,10,0,0,1,9.45,6.68H53.73a10,10,0,1,1,0,6.68H19.47A10,10,0,1,1,10,0"
                      fill="#65c4a7"
                    ></path>
                  </g>
                </g>
              </svg>
            )}
          </div>
          <motion.div  className={`  ${finalBGClass} overflow-hidden rounded-full`} ref={picRef} style={{y:!isMobile ? yPosAnimPic : "" }} transition={{ duration: 30 }}>
          <div
            className={` hover:transition-all ease-in-out duration-500	hover:scale-[1.2]  bg-cta-image bg-contain bg-center bg-no-repeat  mr-8
                                  rounded-full  w-[100%] h-[100%] relative`}
          ></div>
          </motion.div>


          <div className={`${svgBlue}  relative md:absolute ${bottomBlue} ${rightBlue} `}>
            <motion.small

              className="block "
              ref={svgRefBlue}
              style={{ x: aboutPage ? -30 : 0, y:  yPosAnimBlue  }}
              transition={{ duration: 50 }}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 73.2 73.2"
              >
                <g id="Layer_2_00000047045727616760543450000011096229188189332911_">
                  <g id="Layer_1-2">
                    <path
                      className="st0"
                      d="M73.2,10c0,5.5-4.6,10-10.1,9.9c-4.2,0-7.9-2.7-9.3-6.6H19.4c-1,2.8-3.2,5.1-6.1,6.1v34.4    c5.2,1.8,7.9,7.6,6.1,12.8c-1.8,5.2-7.6,7.9-12.8,6.1c-5.2-1.8-7.9-7.6-6.1-12.8c1-2.9,3.2-5.1,6.1-6.1V19.4    c-5.2-1.8-8-7.5-6.1-12.7s7.5-8,12.7-6.1c2.9,1,5.1,3.3,6.1,6.1h34.4c1.9-5.2,7.6-7.9,12.8-6C70.6,2.1,73.2,5.8,73.2,10"
                    ></path>
                  </g>
                </g>
              </svg>
            </motion.small>
          </div>
        </div>

        <div className={`${secondColClass} ${colTwoOrderSM} md:px-5 lg:px-0 md:order-last xl:w-[662px] px-4 letter-spacing-06 md:letter-spacing-0`}>
          <h3
            className={`text-sm-medium md:text-lg-medium 
                                    text-left text-athinia-dark mb-[20px] ${textClass ? textClass : 'tracking-[-1px]'}`}
          >
            {text}
          </h3>
          {subText && (
            <div className="mb-3 md:mb-0">
              <p className="text-athinia-dark text-left mb-[1em]">
                The secure flow of data can help unlock efficiencies, shorten
                time to market, and improve quality, supply chain and
                sustainability for all stakeholders.
              </p>
              <Link href="/data-collaboration/security" role="button">
                <span className="text-lg-small text-athinia-green">
                  Learn more about data security
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
