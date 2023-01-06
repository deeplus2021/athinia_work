import React, {useRef} from "react";
import Image from "next/image";
import CustomButton from "../Buttons/CustomButton";
import { useInView } from "framer-motion"

const DataSecurity = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)



  return (
    <section
    ref={ref}
      className="w-full flex-initial h-auto
          break-words  bg-athinia-dark   "
    >
      <div
        className="grid grid-cols-1 md:grid-cols-5 flex flex-col md:flex-row
        max-w-[1400px] 
        mx-auto md:px-8 p-[14%_3%_18%_3%] md:p-[5.3rem_0%_3%_0%] lg:p-[6%_0%_6%_0%] md:px-5 lg:px-2"
      >
        <div className="col-span-4 px-5 md:px-3 lg:px-0 lg:pt-5">
          <h3 className="text-athinia-green text-lg-medium md:text-lg-large md:text-[3em] lg:text-lg-large mb-3 lg:mb-5 md:letter-spacing--1">
            Data Security
          </h3>
          <h3 className="text-white text-[1.2em] font-medium md:text-lg-small lg:text-lg-medium mb-3 mt-5 md:mt-4 lg:mt-0 lg:mb-0 lg:letter-spacing--1 md:font-size-12em pr-5 lg:pr-0">
            Athinia™ is based on the Palantir Foundry platform trusted by some
            of the largest, most security-sensitive organizations in the world.
          </h3>
          <CustomButton
            isInternal={true}
            text={"LEARN MORE"}
            link='/data-collaboration/security/'
            background={"bg-athinia-green"}
            wrapperClass={"py-5 lg:py-10 mb-[3rem] lg:mb-0"}
            extraClass={'inline xl:block text-[1.2em] letter-spacing-1'}
            paddingX={'px-[1.8rem] lg:px-[2rem]'}
            paddingY={'py-[1.1rem] md:py-[1rem] lg:py-4'}
          />
        </div>

        <div className={`  col-span-1 mr-auto ml-auto `}>
          <Image
            src={"/images/Athinia-Key-Graphic-security-lock.png"}
            className={
              `  z-1 mr-auto w-[100px] h-[200] md:w-[133px] lg:w-[180px] lg:h-[332px] ml-auto md:mr-0 md:ml-0 ${isInView ? 'animate-fade-in-right-low xl:animate-fade-in-right' :''}`
            }
            alt='graphic-lock'
            width={180}
            height={332}
          />
        </div>
      </div>
    </section>
  );
};

export default DataSecurity;
