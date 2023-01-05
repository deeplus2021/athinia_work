import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { FaCircle } from 'react-icons/fa'

const Benefits = () => {
  const svgRefGreen = useRef(null);
  const svgRefBlue = useRef(null);
  const svgRefPicture = useRef(null);

  const {width} = useWindowDimensions()


  const { scrollYProgress: scrollYProgressGreen } = useScroll({
    target: svgRefGreen,
  });
  const { scrollYProgress: scrollYProgressBlue } = useScroll({
    target: svgRefBlue,
  });
  const { scrollYProgress: scrollYProgressPicture } = useScroll({
    target: svgRefPicture,
  });

  const yPosAnimGreen = useTransform(
    scrollYProgressGreen,
    [0, 0.5, 1],
    [-500, -250, -80]
  );

  const xPosAnimBlue = useTransform(
    scrollYProgressBlue,
    [0, 0.8, 1],
    [200, -300, -300]
  );

  const yPosAnimPicture = useTransform(
    scrollYProgressPicture,
    [0, 0.5, 1],
    [-50, 0, 50]
  );
  return (
    <section
      className="w-full  min-h-[50vh] md:min-h-[85vh] lg:min-h-[60vh] flex-initial h-auto
                    break-words py-10 md:py-0 px-[2em]"
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12  md:gap-x-0 xl:gap-x-2
                     max-w-[1400px]  min-h-[50vh] md:min-h-[85vh] lg:min-h-[60vh] md:p-0 lg:px-5 lg:mt-1
                    mx-auto relative"
      >
        <div className="md:my-auto lg:mt-36">
          <h3
            className="text-sm-medium md:text-sm-large
                                    text-left text-athinia-dark mb-[20px] md:letter-spacing--2 lg:letter-spacing-0"
          >
            Benefits for pioneering companies
          </h3>
          <div className="flex mb-[1em] text-athinia-dark text-left">
            <div className="mt-1 mr-1" >
            <FaCircle size={20} fill="#5F82FF" />
          
            </div>
            <div>
              <p className="px-2 ">
                The only industry-wide many-to-many ecosystem in which multiple
                companies can share and aggregate their materials data.
              </p>
            </div>
          </div>
          <div className="flex mb-[1em] text-athinia-dark text-left">
          <div className="mt-1 mr-1" >
          <FaCircle size={20} fill="#5F82FF" />
          
            </div>
            <div>
              <p className="px-2">
                Direct business value by helping the industry minimize quality
                deviations, increase efficiencies and bring new offerings to
                market faster.
              </p>
            </div>
          </div>
          <div className="flex mb-[1em] text-athinia-dark text-left">
          <div className="mt-1 mr-1" >
          <FaCircle size={20} fill="#5F82FF" />
          
            </div>
            <div>
              <p className="px-2 ">
                Collaborative data sharing building on true semiconductor
                industry expertise.
              </p>
            </div>
          </div>
          <div className="flex mb-[1em] text-athinia-dark text-left">
          <div className="mt-1 mr-1" >
              <FaCircle size={20} fill="#5F82FF" />
          
            </div>
            <div>
              <p className="px-2 ">
                Some of the highest levels of data security and protection
                available.
              </p>
            </div>
          </div>
        </div>

        <div className="my-auto lg:ml-5">
          <div
            className="h-[100px] w-[100px] md:h-[130px] md:w-[135px] lg:h-[10px] lg:w-[150px] xl:w-[175px]
                                       md:mt-20 mr-4 float-right relative z-[-1]"
          >
            <motion.small className="block" ref={svgRefBlue} style={{  x:xPosAnimBlue  }} transition={{ duration: 80 }}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                className="fill-athinia-blue"
                y="0px"
                viewBox="0 0 73.2 73.2"
              >
                <g id="Layer_2_00000018207825121724900030000006526477937144860847_">
                  <g id="Layer_1-2">
                    <path
                      className="st0"
                      d="M0,63.2c0.1-5.5,4.6-10,10.1-9.9c4.2,0,7.9,2.7,9.3,6.6h34.4c1-2.8,3.2-5.1,6.1-6.1V19.4    c-5.2-1.8-7.9-7.6-6.1-12.8c1.8-5.2,7.6-7.9,12.8-6.1s7.9,7.6,6.1,12.8c-1,2.9-3.2,5.1-6.1,6.1v34.4c5.2,1.8,8,7.5,6.1,12.7    c-1.8,5.2-7.5,8-12.7,6.1c-2.9-1-5.1-3.3-6.1-6.1H19.4c-1.9,5.2-7.6,7.9-12.8,6C2.7,71.1,0,67.4,0,63.2"
                    ></path>
                  </g>
                </g>
              </svg>
            </motion.small>
          </div>
          <motion.div ref={svgRefPicture} style={{ y: width < 768 ? '' : yPosAnimPicture  }} transition={{ duration: 100 }}>
            <div
              className="bg-benefits-image  bg-contain bg-center bg-no-repeat mt-5 md:mt-24 lg:ml-[48px]
                                    h-[320px] w-[320px] md:h-[350px] md:w-[350px]  lg:h-[450px] lg:w-[450px] xl:h-[610px] xl:w-[610px] rounded-full"
            ></div>
          </motion.div>

          <div
            className="h-[0px] w-[100px] md:h-[135px] md:w-[135px] lg:h-[100px] lg:w-[175px] 
                                            mr-6 float-left fill-athinia-blue relative"
          >
            <motion.small className="block " ref={svgRefGreen} style={{ y: yPosAnimGreen }}>
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
            </motion.small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
