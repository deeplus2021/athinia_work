import CustomButton from "../Buttons/CustomButton";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const KeyBenefits = () => {
  const svgRefGreen = useRef(null);
  const { scrollYProgress } = useScroll({
    target: svgRefGreen,
  });

  const yPosAnimGreen = useTransform(
    scrollYProgress,
    [0, 0.5, 1 ],
    [0, 180, 360 ],

  );
  return (
    <>
      <section
        className="w-full flex-initial h-auto

            break-words bg-athinia-purple p-[2em] md:px-[0.5em] md:py-[2%] lg:py-[4em]   "
      >
        <div
          className="grid grid-cols-1 
                 md:py-[2em] lg:py-[0em]
                min-h-[76vh] md:min-h-[42vh] max-w-[1400px] md:px-8 lg:px-4
                 items-center relative mx-auto"
        >
          <h4 className="text-white text-center text-sm-medium md:text-lg-medium mt-3 lg:mt-5 text-key-benefits md:letter-spacing--1 lg:letter-spacing-0">
            Key benefits for Material Suppliers and Device Makers:
          </h4>
          <section className="text-center md:mt-5 lg:mt-0">
            <div className="grid grid-cols-5 gap-3 pt-2 lg:pt-0 lg:mt-0 px-0">
              <div className="content-between grid col-span-5 md:col-span-2 ">
                <p className="text-white md:text-[112%] lg:text-[100%] x text-center  lg:px-10 pb-0 lg:pb-5">
                  Focus on the parameters that matter most to material
                  performance and put your effort where it really counts
                </p>

              <div className="mt-auto">
              <CustomButton
                  paddingX={"px-5 lg:px-[30px]"}
                  paddingY={"py-5 md:py-3 lg:py-[18px]"}
                  extraClass={"md:text-sm-medium block btn-upper"}
                  text={"Value for Material Suppliers"}
                  link={"/data-collaboration/material-suppliers"}
                  background={"bg-white"}
                  wrapperClass={"text-center my-8"}
                  isInternal={true}
                />
              </div>
              </div>
              <div className="col-span-5 md:col-span-1 py-0 md:block">
             <motion.small ref={svgRefGreen} style={{rotate:yPosAnimGreen}} className="block md:mt-10" transition={{ duration: 80 }}>
             <Image
                  className="mr-auto ml-auto w-[90px] md:w-[90px] block"
                  src={"/images/icon2.svg"}
                  alt="icon2"
                  width={80}
                  height={80}
                />
             </motion.small>
              </div>
              <div className="content-between grid col-span-5 mt-5 md:mt-0 md:col-span-2">
                <p className="text-white md:text-[112%] lg:text-[100%] lg:px-5">
                  Share and analyze the data that matters with your suppliers to
                  help improve yield, efficiency, and performance
                </p>
                <div className="mt-auto">        <CustomButton
                  paddingX={"px-10 md:px-5 lg:px-[30px]"}
                  paddingY={"py-5 md:py-3 lg:py-[18px]"}
                  extraClass={"md:text-sm-medium block btn-upper"}
                  text={"Value for Device Makers"}
                  link={"/data-collaboration/device-makers"}
                  background={"bg-white"}
                  wrapperClass={"text-center my-8 px-0"}
                  isInternal={true}
                /></div>
         
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default KeyBenefits;
