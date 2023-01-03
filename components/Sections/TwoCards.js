import React from "react";
import Link from "next/link";
const TwoCards = ({ titlePosition, title, cardData }) => {
  console.log(cardData)
  const finalCards = cardData.map((item) => {
    return (
      <div className="card-1 bg-white p-[30px] md:p-10">
        <p className="text-athinia-green text-sm-small">{item.category}</p>
        <h3
          className="text-[1.8em] font-medium lg:text-sm-medium my-4 md:my-0 
                            text-left  "
        >
          {item.cardTitle}
        </h3>
        <p className="my-5 md:text-[18px] lg:text-[100%]">{item.cardDescription}</p>
        <div className="my-5">
          <Link className="text-athinia-blue " href={item.cardlink}>
            READ MORE
          </Link>
        </div>
      </div>
    );
  });

  return (
    <section
      className="w-full flex-initial h-auto
    break-words py-20 mt-5  lg:mt-20 bg-athinia-gray"
    >
      <div className="max-w-[1400px] p-8 mx-auto px-8 xl:px-0">
        <h1
          className={`text-sm-large md:text-lg-large my-4 md:my-0 tracking-[-1px] 
                                    ${
                                      titlePosition
                                        ? titlePosition
                                        : "text-left"
                                    } `}
        >
          {title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-4 mt-5">
          {finalCards}
        </div>
      </div>
    </section>
  );
};

export default TwoCards;
