import React from "react";

const TitleBody = ({ title, body, id, extraClass ='md:text-lg-medium', isHeader = false}) => {
  return (
    <section id={id}
      className="w-full flex-initial h-auto

            break-words  p-[1em] "
    >
      <div
        className=" max-w-[1400px] 
                 items-center relative mr-auto ml-auto"
      >
        <h1
          className={`${isHeader ? 'text-sm-large ' : 'text-sm-medium '} ${extraClass}  my-4 md:my-0 tracking-[-1px] 
                                    text-left `}
        >
          {title}
        </h1>
        {body.map(item => <p className="my-3">{item}</p>)}
      </div>
    </section>
  );
};

export default TitleBody;
