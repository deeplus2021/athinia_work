import React from "react";
import Image from "next/image";
const TheChallenge = () => {
  return (
    <>
      <section
        className="w-full bg-athinia-dark flex-initial h-auto
              break-words  "
      >
        <div className="flex items-center my-10">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 73.2 20"
              fill="#5F82FF"
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
            className="text-sm-medium
                              text-left text-athinia-blue px-4 md:px-3"
          >
            <span>The Challenge </span>
          </h1>
        </div>

        <div className="grid grid-cols-1  max-w-[1400px] p-[28px_30px_28px_30px] md:p-[20px_32px_20px_32px] lg:p-[10px_30px_10px_30px] mx-auto  ">

          <h3
            className="text-sm-medium md:text-lg-medium md:tracking-[-1px] 
                              text-left text-white mb-[20px]"
          >
            We’re experiencing a time of rapid growth and increased demands
          </h3>
          <p className="text-white text-left mb-[1em] pr-2 md:pr-0">
            Leading-edge semiconductor manufacturing processes are so sensitive
            that traditional quality control and supply management practices are
            no longer sufficient to maintain high-yielding integration flows.
            The rapidly increasing number of process variables requires smart
            and scalable data and analytical capabilities. To remain
            competitive, companies need to focus time and resources on the
            parameters that matter most.
          </p>

          <div className="py-5">
            <Image
              src="/images/rapid-growth.png"
              width={1400}
              height={800}
              alt='rapid-growth'
              className=" mr-auto ml-auto"
            />
          </div>
          <div className=" mr-auto ml-auto md:ml-[9rem] lg:ml-auto">
            <p className="text-white text-athinia-green font-bold letter-spacing--01 md:letter-spacing-0 lg:letter-spacing-03 line-height-1">
              Parameters not captured in CofA account for &#62;60% of
              variability in manufacturing *
            </p>

            <p className="text-white text-left mb-[1em] text-[14px] md:text-[15px] mt-4 md:mt-3">
              * Based on exemplary use case
            </p>
          </div>
        </div>
      </section>
      <section
        className="w-full bg-athinia-dark flex-initial h-auto
                    break-words   md:min-h-[90vh] lg:min-h-auto"
      >

        <div className="grid grid-cols-1 max-w-[1400px] px-[1.8rem] py-[0.8rem] md:py-8 md:px-[1.7rem] mx-auto ">

          <h3
            className="text-sm-medium md:text-lg-medium md:tracking-[-1px] 
                                    text-left text-white mb-[65px] md:mb-[60px]"
          >
            Smart data reduces quality deviations and helps focus resources on
            parameters that matter most.
          </h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="md:pr-5 lg:pr-0">
              <h4 className="text-athinia-blue text-sm-medium md:sm-medium">
                Current state:
              </h4>
              <p className="text-white mb-4 md:mb-3">
                Traditional statistical analysis
              </p>
              <Image
                src="/images/Athinia-Website-GFX-New-01.svg"
                width={360}
                height={360}
                alt="athinia-website"
                className="pr-[2rem] md:pr-0"
              />
              <p className="text-white my-4 md:my-2">
                Every parameter is analyzed separately; some correlations and
                interactions between parameters are potentially unaccounted for.
              </p>
            </div>
            <div className="pt-2 md:pt-0 md:mx-[0.6rem] lg:mx-0">
              <h4 className="text-white my-10 md:my-0 text-[1.2em] font-bold md:text-[1.2em]">
                Today, solving simple manufacturing problems requires assessing
                interactions between parameters, requiring more advanced
                analytical tools.
              </h4>
            </div>
            <div className="pt-5 md:pt-0 md:pr-5 lg:pr-0">
              <h4 className="text-athinia-green text-sm-medium md:sm-medium">
                Future state:
              </h4>
              <p className="text-white mb-4 md:mb-3">
                Multivariate analysis with Athinia
              </p>
              <Image
                src="/images/Athinia-Website-GFX-New-02.svg"
                width={360}
                height={360}
                alt="athinia-website"
                className="pr-[2rem] md:pr-0 mb-4 md:mb-0"
              />
              <p className="text-white pb-[1.5rem] md:pb-0 my-2 lg:pr-[1.5rem]">
                Data sharing allows all parameters to be correlated in one
                multivariate analysis; relevant parameters are identified that
                would have been ignored in traditional analysis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TheChallenge;
