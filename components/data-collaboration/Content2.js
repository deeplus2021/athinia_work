import React, { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

const Content2 = ({
  title,
  allList,
  iconColor,
  subTitle,
  icon = true,
  isTitleCol = false,
  spacing = "pt-20 mb-10",
  extraClass = "",
  boxClass = "",
  subTitleClass = "",
  listClass = ""
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 100px -50px 0px",
  });

  return (
    <section
      className={`w-full flex-initial h-auto
            break-words  ${spacing}`}
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-3
        max-w-[1400px] md:px-8 md:py-8  lg:py-2 lg:px-8  mx-auto md:overflow-hidden xl:overflow-visible ${extraClass}`}
      >
        <div className={`col-span-2 order-last md:order-first px-[1.8rem] md:px-10 lg:px-0 md:pl-5 md:pr-[4rem] ${boxClass ? boxClass : 'lg:pr-10'}`}>
          {isTitleCol ? (
            <div className="">
              <h3 className="text-sm-medium md:text-lg-medium my-5 lg:mt-2 text-athinia-green">
                {title}
              </h3>
              <h3 className={`text-lg-small md:text-lg-small  text-athinia-green ${subTitleClass}`}>
                {subTitle}
              </h3>
            </div>
          ) : (
            ""
          )}
          <ul className={`list-disc ${isTitleCol && "ml-10"} ml-[1.5rem] md:ml-[2rem] ${listClass ? listClass : 'lg:ml-[1.5rem]'}`}>
            {allList.map((item) => (
              <li className="text-sm-small md:text-[18px] font-[100]	 ">{item}</li>
            ))}
          </ul>
       
        </div>

        <div className="col-span-1">
          {!isTitleCol ? (
            <div className="text-athinia-green px-[2rem] pt-[2rem] pb-[4rem] md:p-0 md:pl-10">
              <>
                <h3 className="text-sm-medium md:text-lg-medium  lg:ml-[1.6rem]">{title}</h3>
                <h3 className="text-sm-medium md:text-lg-small  ">
                  {subTitle}
                </h3>
              </>
            </div>
          ) : (
            ""
          )}
          <div className="hidden md:block ">
            <div
           
              className={`h-[300px] xl:w-[350px] lg:w-[300px] rotate-180 md:w-[220px] flex items-center order-first `}
            >
              {icon ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
              
                  ref={ref}
             
                  id="Layer_1"
                  y="0px"
                  className={`${iconColor} relative md:right-[20vw] lg:right-[10vw] xl:right-[25vw]  md:scale-[1.8] lg:scale-[1.2] ${
                    isInView ? "animate-fade-in-left-500" : ""
                  } `}
                  viewBox="0 0 178.6 20"
                >
                  <g id="Layer_2_00000178897162455727381490000006693679397948052391_">
                    {" "}
                    <g id="Layer_1-2">
                      {" "}
                      <path d="M0,6.7h159.2c1.8-5.2,7.6-7.9,12.8-6.1s7.9,7.6,6.1,12.8s-7.6,7.9-12.8,6.1c-2.8-1-5.1-3.2-6.1-6.1H0V6.7z"></path>{" "}
                    </g>
                  </g>
                </svg>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content2;
