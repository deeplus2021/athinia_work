import React from "react";
import CustomButton from "../Buttons/CustomButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { FaCircle } from "react-icons/fa";
const TheBenifits = () => {
  const { width } = useWindowDimensions();

  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
  });

  const yPosAnimText = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [width >= 768 && width <= 1024 ? 100 : 150, 75, 0]
  );

  return (
    <section
      className="w-full flex-initial h-auto
              break-words  pt-10 md:pt-[1.5rem] lg:pt-[4.5rem] lg:pb-[5rem]"
    >
      <div class="flex items-center my-10">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 73.2 20"
            fill="#7959B8"
            className="w-[100px] relative block"
 
          >
            <g id="Layer_2_00000178897162455727381490000006693679397948052391_">
              {" "}
              <g id="Layer_1-2">
                {" "}
                <path d="M0,6.7h53.7c1.8-5.2,7.6-7.9,12.8-6.1s7.9,7.6,6.1,12.8c-1.8,5.2-7.6,7.9-12.8,6.1c-2.8-1-5.1-3.2-6.1-6.1H0L0,6.7z"></path>{" "}
              </g>
            </g>
          </svg>
        </span>
        <h1
          class="text-sm-medium
                              text-left text-athinia-purple px-3"
        >
          <span>The Benefit </span>
        </h1>
      </div>
      <div className="lg:min-h-[100vh] max-w-[1400px] p-8 mx-auto items-center px-8 md:pt-5 lg:pt-8 lg:px-[10px] lg:pt-0">
        <h3
          className="text-sm-medium md:text-lg-medium tracking-[-1px] 
                              text-left text-athinia-purple "
        >
          Benefits of secure, collaborative data sharing
        </h3>

        <div
          className="grid grid-cols-5 gap-3 md:gap-0 lg:gap-3
          max-w-[1400px] lg:px-2 md:py-0  mx-auto items-center "
        >
          <div
            className=" mt-10 md:mt-0 col-span-5 md:col-span-3 bg-before-after-mobile md:bg-before-after-image bg-contain bg-center bg-no-repeat 
                              h-[300px] w-[300px] mr-5 md:mr-0 md:h-[450px] md:w-[450px]  lg:h-[730px] lg:w-[810px] lg:min-h-[550px]"
          ></div>

          <div className="col-span-5 md:col-span-2 md:ml-10 lg:ml-0 px-0 xl:pl-20 lg:mb-20 relative">
            <motion.div
              ref={textRef}
              style={{ y: width < 1024 ? "" : yPosAnimText }}
            >
              <div className="flex my-2 md:my-5 md:mt-8 lg:mt-1">
                <div className="lg:pt-1">
                  <FaCircle size={20} fill="#5F82FF" />
                </div>
                <div>
                  <p className=" md:text-[18px] lg:text-[100%] px-2 ">
                    {" "}
                    Allow for integrated analysis and control of data by device
                    makers and material suppliers
                  </p>
                </div>
              </div>
              <div className="flex my-2 md:my-5">
                <div className="lg:pt-1">
                  <FaCircle size={20} fill="#5F82FF" />
                </div>
                <div>
                  <p className="px-2  md:text-[18px] lg:text-[100%">
                    {" "}
                    Provide holistic view and predictions of in-fab performance
                  </p>
                </div>
              </div>
              <div className="flex my-2 md:my-5">
                <div className="lg:pt-1">
                  <FaCircle size={20} fill="#5F82FF" />
                </div>
                <div>
                  <p className="px-2  md:text-[18px] lg:text-[100%">
                    {" "}
                    Break silos and increase efficiency to solve the most
                    pressing semiconductor manufacturing challenges
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div class="mt-5 md:mt-0 lg:mx-5 lg:px-4 xl:mx-0  grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-16 lg:gap-10 md:mb-5 lg:mb-0">
          <div>
            <h3
              className="text-sm-medium md:text-lg-medium tracking-[-1px] 
                              text-left text-athinia-purple  "
            >
              For Device Makers
            </h3>
            <p className="lg:mt-2">
              Share and analyze the data that matters with your suppliers to
              help improve yield, efficiency and performance
            </p>
            <CustomButton
              isInternal={true}
              extraClass={"text-white md:text-[1.1em] lg:text-[100%]"}
              background={"bg-athinia-purple"}
              paddingX={"px-5 lg:px-[1.2rem]"}
              paddingY={"py-3 lg:py-[0.85rem]"}
              wrapperClass={"my-5 text-center lg:text-left lg:tracking-[1px]"}
              link={"/data-collaboration/device-makers/"}
              text={"EXPLORE BENEFITS FOR DEVICE MAKERS"}
            />
          </div>

          <div className="md:mr-3 lg:mr-0">
            <h3
              className="text-sm-medium md:text-lg-medium tracking-[-1px] 
                              text-left text-athinia-purple "
            >
              For Material Suppliers
            </h3>
            <p className="lg:mt-2">
              Focus on the parameters that matter most to material performance
              and put your effort where it really counts
            </p>
            <CustomButton
              isInternal={true}
              extraClass={"text-white md:text-[1.1em] lg:text-[100%]"}
              background={"bg-athinia-purple"}
              paddingX={"px-5 lg:px-[1.2rem]"}
              paddingY={"py-3 lg:py-[0.85rem]"}
              wrapperClass={"my-5 text-center lg:text-left"}
              link={"/data-collaboration/device-makers/"}
              text={" EXPLORE BENEFITS FOR MATERIAL SUPPLIERS"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheBenifits;
