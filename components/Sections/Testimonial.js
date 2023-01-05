import Image from "next/image";

const Testimonial = () => {
  return (
    <>
      <section
        className="w-full flex-initial h-auto
            break-words bg-athinia-green p-[7%_5%] md:p-[2em]"
      >
        <div
          className="grid grid-cols-1 

                min-h-[76vh] md:min-h-[42vh] max-w-[1020px] lg:p-8
                 items-center relative mx-auto lg:px-0 py-0 md:py-10 lg:py-[3rem]"
        >
          <div className="flex flex-col md:flex-row ">
            <div className="px-3 md:px-0 lg:px-0 pb-10 md:py-0 md:w-[120%] lg:w-[100%]">
              <Image alt="david-anderson" width={180} height={180} src={'/images/david_anderson.jpg'} className="h-[180px] w-[180px] md:h-[130px] md:w-[130px] xl:h-[200px] xl:w-[200px] ml-auto mr-auto  rounded-full"/>
        
            </div>
            <div className="px-3 pt-4 md:pt-0 md:px-[2.5em] lg:px-3">
              <div className="text-athinia-dark">
                <h3  className="font-extralight text-sm-medium md:text-sm-large font-weight-0 sm:line-height-13 md:line-height-16 font-size-14 letter-spacing--1">
                  “Much closer customer-supplier relationships can be formed
                  through collaborative data sharing and data analysis. Athinia™
                  helps accomplish this through data security and the privacy of
                  each company’s data.”
                </h3>
              </div>
              <div className="text-white text-sm-large pt-5 md:pt-3">
                David Anderson
              </div>
              <div className="text-white text-sm-medium">
                former President of SEMI Americas
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
