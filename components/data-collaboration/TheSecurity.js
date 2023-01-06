import React from "react";
import Link from "next/link";
const TheSecurity = () => {
  return (
    <section
      className="w-full bg-athinia-dark flex-initial h-auto
              break-words"
    >
      <div className="flex items-center mt-20 py-7 ">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 73.2 20"
            fill="#67C3A6"
            className="w-[5em] lg:w-[100px] relative block"
       
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
          className="text-sm-medium md:text-lg-medium lg:text-sm-medium tracking-[-1px] lg:tracking-[0px]
                              text-left text-athinia-green px-3"
        >
          <span>Security</span>
        </h1>
      </div>

      <div

        className="md:min-h-auto max-w-[1400px] p-8  mx-auto
             items-center py-20 lg:p-[0.5rem_0.5rem_9.5rem_0.5rem]"
      >
        <h1
          className="text-lg-medium  md:text-[3.5em] lg:text-lg-large tracking-[-1px] 

                              text-left text-athinia-green mb-[20px] md:pr-20 md:mr-20 lg:mr-0 lg:tracking-[-2px]"
        >
          Built with the highest levels of data security and privacy.​
        </h1>
        <h3

          className="text-[1.2em] font-medium  md:text-sm-small lg:text-lg-medium 

                              text-left text-white mb-[20px] md:pr-20 md:mr-20 lg:mr-0 lg:mb-0 lg:pr-[15rem] lg:tracking-[-1px] lg:line-height-15"
        >
          Athinia™ is powered by Palantir’s Foundry platform, leveraging their
          strict data security standards. Our cloud infrastructure and
          operations are trusted by many of the world's most sensitive
          institutions to protect their data.
        </h3>

        <Link
          href="/data-collaboration/security/"
          className="text-white text-sm-medium md:text-lg-medium text-athinia-green underline decoration-athinia-green lg:tracking-[-1px]"
        >
          Learn more about data security at Athinia™
        </Link>
      </div>
    </section>
  );
};

export default TheSecurity;
