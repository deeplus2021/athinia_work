import React from "react";
import Link from "next/link";
const TwoCards = ({ titlePosition, title, cardData }) => {
  console.log(cardData)
  const finalCards = cardData.map((item) => {
    return (
      <div className="card-1 bg-white p-[45px_30px_15px_30px] md:mb-0 sm:mb-5 mb-5">
        <p className="text-athinia-green text-sm-small lg:text-[18px] text-[0.8em]">{item.category}</p>
        <h3
          className="lg:text-[1.8em] text-[1.6em] font-medium lg:text-sm-medium my-4 md:my-0 my-0
                            text-left"
        >
          {item.cardTitle}
        </h3>
        <p className="my-6 md:text-[18px] lg:text-[100%]">{item.cardDescription}</p>
        <div className="my-5">
          <Link className="text-athinia-blue lg:text-[18px] text-[0.8em]" href={item.cardlink}>
            READ MORE
          </Link>
        </div>
      </div>
    );
  });

  return (
    <section className="w-full flex-initial h-auto break-words sm:py-[8%] py-[8%] bg-athinia-gray">
      <div className="max-w-[1400px] mx-auto" style={{padding: "10px"}}>
        <h1 className={`text-sm-medium md:text-lg-large my-4 md:my-0 tracking-[-1px] lg:mt-[20px] sm:text-[1.5em]
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
