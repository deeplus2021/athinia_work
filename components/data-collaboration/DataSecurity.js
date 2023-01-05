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
        mx-auto md:px-8  p-[6%_0%_6%_0%] md:px-5 lg:px-2"
      >
        <div className="col-span-4 px-5 md:px-8 lg:px-0 lg:pt-5">
          <h3 className="text-athinia-green text-lg-medium md:text-lg-large mb-3 lg:mb-5 letter-spacing--1">
            Data Security
          </h3>
          <h3 className="text-white text-[1.2em] font-medium md:text-lg-small lg:text-lg-medium mb-3 lg:mb-0 letter-spacing--1">
            Athinia™ is based on the Palantir Foundry platform trusted by some
            of the largest, most security-sensitive organizations in the world.
          </h3>
          <CustomButton
            isInternal={true}
            text={"LEARN MORE"}
            link='/data-collaboration/security/'
            background={"bg-athinia-green"}
            wrapperClass={"py-10"}
            extraClass={'inline xl:block text-[1.2em]'}
            paddingX={'lg:px-[2rem]'}
            paddingY={'lg:py-4'}
          />
        </div>

        <div className={`  col-span-1 mr-auto ml-auto `}>
          <Image
            src={"/images/Athinia-Key-Graphic-security-lock.png"}
            className={
              `  z-1 mr-auto w-[110px] h-[200] lg:w-[180px] lg:h-[332px] ml-auto md:mr-0 md:ml-0 ${isInView ? 'animate-fade-in-right-low xl:animate-fade-in-right' :''}`
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
