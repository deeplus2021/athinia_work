import React from "react";
import Image from "next/image";
import cssStyle from "./TheSolution.module.css";
const TheSolution = () => {
  return (
    <>
      <section
        className="w-full flex-initial h-auto
                    break-words pt-3 md:pt-10"
      >
        <div className="flex items-center my-10">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 73.2 20"
              fill="#67C3A6"
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
                                    text-left text-athinia-green px-4 md:px-3"
          >
            <span>The Solution </span>
          </h1>
        </div>
        <div
          className="md:min-h-[100vh] max-w-[1400px]
                    mx-auto items-center px-4 md:px-[2em] md:pt-4 lg:pt-0 lg:px-[10px] mt-[4.3rem] md:mt-0"
        >
          <h3
            className="text-sm-medium md:text-lg-medium md:tracking-[-1px] 
                                    text-left text-athinia-green mb-[20px] px-4 md:px-0"
          >
            Our smart data collection and collaborative analytics ecosystem
            helps drive smarter business decisions
          </h3>
          <h3
            className="text-sm-medium md:text-lg-medium md:tracking-[-1px] 
                                    text-left md:mb-[0px] px-4 md:px-0"
          >
            It starts with the three A's​:
          </h3>

          <div className="hidden md:grid grid grid-cols-2 gap-x-12 relative lg:mx-20  h-[200px] md:h-[185px] lg:h-[170px] px-4 md:px-[100px] lg:px-[150px] md:mt-[-40px] lg:mt-[-30px]">
            <div className="block mr-auto lg:pt-0   ml-auto md:px-[50px] xl:px-[140px] border-b-[6px] border-athinia-green z-0 flex items-center">
              <div

                className="md:pt-6 lg:pt-0 z-[100] bg-white"
              >
                <Image
                  src="/images/Athinia-logo-main.svg"
                  width={150}
                  alt="athinia-logo"
                  height={80}
                />
              </div>

              <div className={`${cssStyle.connector_one} mt-auto`}></div>
            </div>

            <div className="mr-auto ml-auto md:px-[0px] lg:px-[20px] border-b-[6px] border-athinia-blue flex items-center">
              {" "}
              <div
      
                className="md:pt-7 lg:pt-2 xl:pt-6 lg:h-[63px] z-[1] bg-white md:px-5 lg:px-0"
              >
                <h3
                  className="text-sm-medium md:text-lg-small tracking-[-1px] md:tracking-[0px]
                                    text-left text-athinia-blue"
                >
                  Device Makers and their Material Suppliers
                </h3>
              </div>
              <div className={`${cssStyle.connector_two} mt-auto`}></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center md:mt-[-35px] lg:mt-[-65px] px-4 md:px-0 lg:px-3 mt-[1.6rem] md:mt-0">
            <div  className="text-center z-[5] h-auto md:h-[350px] lg:h-[400px]">
              <Image
                className="ml-auto mr-auto w-[97px] h-[97px] md:w-[70px] md:h-[70px] lg:w-[130px] lg:h-[130px] z-50"
                src="/images/1-aggregate.svg"
                width={150}
                alt="aggregate"
                height={150}
              />
              <h3
                className="text-sm-medium md:text-lg-medium md:tracking-[-1px] 
                                     text-athinia-green my-5 mt-4 md:my-0 lg:mt-3"
              >
                Aggregate
              </h3>
              <p className="md:text-[18px] lg:text-[100%] md:mt-5 lg:pt-0 px-1 md:px-0">
                Gather relevant material, in-process and manufacturing data from
                within and across companies into a single platform so it can be
                easily analyzed.​
              </p>
            </div>

            <div  className="text-center z-[5]  h-auto md:h-[350px] lg:h-[400px] mt-3 md:mt-0">
              <Image
                src="/images/2-analyze.svg"
                width={150}
                height={150}
                alt="analyze"
                className="ml-auto  mr-auto w-[97px] h-[97px] md:w-[70px] md:h-[70px] md:h-[65px] lg:w-[130px] lg:h-[130px]"
              />
              <div className="z-50">
                <h3
                  className="text-sm-medium md:text-lg-medium md:tracking-[-1px] 
                                     text-athinia-green my-5 mt-4 md:my-0 lg:mt-3"
                >
                  Ana<span className="text-athinia-blue">lyze</span>
                </h3>
              </div>
              <p className="md:text-[18px] lg:text-[100%] md:mt-5 lg:pt-0 px-1 md:px-0">
              Run multivariate analysis to identify key parameters and opportunities to improve performance.


              </p>
            </div>
            <div  className="text-center z-[5] h-auto md:h-[350px] lg:h-[400px] mt-3 md:mt-0">
              <Image
                src="/images/3-act.svg"
                width={150}
                height={150}
                alt="act-3"
                className="ml-auto mr-auto w-[97px] h-[97px] md:w-[70px] md:h-[70px] md:h-[65px] lg:w-[130px] lg:h-[130px]"
              />
              <h3
                className="text-sm-medium md:text-lg-medium md:tracking-[-1px] 
                                     text-athinia-blue  my-5 mt-4 md:my-0 lg:mt-3"
              >
                Act
              </h3>
              <p className="md:text-[18px] lg:text-[100%] md:mt-5 lg:pt-0 px-1 md:px-0">
              Take action based on the insights identified and put resources where it really matters to drive performance.​
              </p>
            </div>
          </div>
          <div className="py-10 mb-0 md:mb-20 mt-[2.8rem] md:mt-10 lg:mt-5">
            <h3
              className="text-sm-medium md:text-lg-medium md:tracking-[-1px] 
                                    text-left text-athinia-green mb-[20px] px-4 md:px-0"
            >
              Athinia™’s easy and secure data exchange helps ensure participants
              can share an unprecedented amount of performance related data
            </h3>
            <Image
              src="/images/data-exchange.webp"
              width={1400}
              height={800}
              alt="data-exchange"
              className="h-[168px] w-[500px] mr-auto ml-auto md:h-[280px] md:w-[750px] lg:h-[515px] lg:w-[1380px]  "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TheSolution;
