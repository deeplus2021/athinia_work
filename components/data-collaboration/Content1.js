import React, { useRef } from "react";
import { useInView } from "framer-motion";

const Content1 = ({
  title,
  allList,
  iconColor,
  textColor = "green",
  subTitle,
  icon = true,
  isTitleCol = false,
  spacing='pt-20'
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      className={`w-full flex-initial h-auto
            break-words pt-0     lg:${spacing} `}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-3
        max-w-[1400px] md:px-8 md:py-8  lg:py-2 lg:px-4 mx-auto "
      >
        <div className="col-span-1">
          <div className={`text-athinia-${textColor} px-[2rem] py-10 md:p-0 lg:p-0 `}>
            {!isTitleCol && (
              <h3 className="text-sm-medium md:text-lg-medium ">{title}</h3>
            )}
          </div>
          <div className="hidden md:block">
            <div className="h-[300px] md:h-[100px] lg:h-[300px] flex items-center relative  ">
              {icon ? (               
                <svg

                  ref={ref}
                  className={`${iconColor} relative  hidden md:block md:scale-[1.7] lg:scale-[0.9]  md:left-[-15vw]  xl:left-[-23vw] ${
                    isInView ? "animate-fade-in-left" : ""
                  }`}
                  viewBox="0 0 178.6 20"
                 
                >
                  <g >
                    <g >
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

        <div className="col-span-2 px-[1.8rem] pt-5 md:pt-0 md:px-10 lg:pl-10 md:pr-3 lg:pr-0">
          {isTitleCol ? (
            <div className={`text-athinia-${textColor} my-5  p-0   md:p-3 `}>
              <h3 className="text-sm-medium  my-5 md:text-lg-medium ">
                {title}
              </h3>
              <h3 className="text-lg-small md:text-lg-small  text-athinia-green">
                {subTitle}
              </h3>
            </div>
          ) : (
            ""
          )}
          <ul className={`list-disc ${isTitleCol && "ml-10"}" ml-5`}>
            {allList.map((item) => (
              <li className="text-sm-small  md:text-[18px] lg:text-sm-small">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Content1;
