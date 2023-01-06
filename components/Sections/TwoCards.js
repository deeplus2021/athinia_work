import React from "react";
import Link from "next/link";
const TwoCards = ({ titlePosition, title, cardData, sectionClass = "", boxClass = "", titleClass = "", contentClass = "" }) => {
  const finalCards = cardData.map((item) => {
    return (
      <div className="card-1 bg-white p-[45px_30px_15px_30px] md:mb-0 sm:mb-5 mb-5">
        <p className="text-athinia-green text-sm-small lg:text-[0.8em] xl:text-[0.8em] sm:text-[15px] text-[0.8em] font-weight-500" style={{letterSpacing: "1px"}}>{item.category}</p>
        <h3
          className="xl:text-[1.65em] lg:text-[1.7em] md:text-[1.65em] sm:text-[1.4em] text-[1.4em] md:font-medium sm:font-normal font-medium my-4 md:my-0 my-0 text-left md:tracking-[-1px] sm:tracking-[1px] text-blue">
          {item.cardTitle}
        </h3>
        <p className={`md:text-[18px] lg:text-[100%] sm:tracking-[0] tracking-[0.1px] ${contentClass ? contentClass : 'my-6'}`}>{item.cardDescription}</p>
        <div className="my-5">
          <Link className="text-athinia-blue sm:text-[16px] text-[14px] sm:font-medium font-normal" href={item.cardlink}>
            READ MORE
          </Link>
        </div>
      </div>
    );
  });

  return (
    <section className={`w-full flex-initial h-auto break-words bg-athinia-gray ${sectionClass ? sectionClass :'sm:py-[8%] py-[8%]'}`}>
      <div className={`max-w-[1400px] mx-auto p-[1em] ${titleClass ? titleClass : 'md:p-[10px]'}`}>
        <h1 style={{color: "#172337"}} className={`md:tracking-[-2px] sm:tracking-[0] text-sm-medium md:text-lg-large md:text-[3em] lg:text-lg-large md:my-0 xl:mt-0 lg:mt-[20px] sm:text-[1.5em]
                                    ${
                                      titlePosition
                                        ? titlePosition
                                        : "text-left"
                                    } `}
        >
          {title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-[30px] mt-5">
          {finalCards}
        </div>
      </div>
    </section>
  );
};

export default TwoCards;
