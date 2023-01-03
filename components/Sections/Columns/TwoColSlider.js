import React from "react";
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import CustomButton from "../../Buttons/CustomButton";
import cssStyle from './TwoColSlider.module.css'
const TwoColSlider = () => {

  return (
    <section
      className="w-full flex-initial h-auto
  break-words  mt-5 md:mt-20"
    >
      {" "}
      <Splide
      
        options={{
          pagination: false,
          arrows: true,
          autoplay:true,
          type: "loop",
          perPage: 1,
          speed: 3000,
          padding: { left: "0px", right: "0px" },
          classes: {

            arrow : `splide__arrow ${cssStyle['custom-arrow-class']}`,
            
          }
        }}
        className="p-0 mx-0 w-[100%]"
   
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <div className=" grid grid-cols-1 md:grid-cols-2 md:h-[400px]">
            <div className="flex flex-col justify-center items-center bg-athinia-purple md:py-20 h-[300px] md:h-[400px]">
              <div className="  text-white  px-0 mx-5 lg:px-10 lg:mx-10 py-10 md:py-0">
                <h3 className="text-sm-medium md:text-sm-large mb-6">Join our team</h3>
                <p className="mb-10 ">
                  We’re looking for pioneers who are ready to unlock the power
                  of data to build the future.
                </p>
                <CustomButton
                 isInternal={true}
                link={'\careers'}
                paddingX={'px-[1.5rem] md:px-[2rem]'}
                paddingY={'py-[10px] md:py-[14px]'}
                  wrapperClass={"my-10 md:mt-10 inline"}
                  text={"CAREERS"}
                  background={"bg-white"}
                  extraClass={"text-black inline hover:bg-athinia-dark hover:text-white letter-spacing-1 lg:btn-slider"}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center  bg-athinia-blue py-20 h-[300px] md:h-[400px]">
              <div className="  text-white px-5 mx-5 lg:px-10 lg:mx-10  md:mb-20 py-10 md:py-0">
                <h3 className="text-sm-medium md:ext-sm-large text-mb-6">We are members of</h3>
               <a href="https://www.semi.org/" target='_blank'>
               <Image src={"/images/semi.svg"}  alt="semi" width={300} height={72} />
               </a>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className=" grid grid-cols-1 md:grid-cols-2 md:h-[400px]">
            <div className="flex flex-col justify-center items-center bg-athinia-purple md:py-20 h-[300px] md:h-[400px]">
              <div className="  text-white  px-0 mx-5 lg:px-20 lg:mx-10 py-10 md:py-0">
                <h3 className="text-sm-medium md:text-sm-large mb-6">Explore for Yourself</h3>
                <p>
                  Get in touch to explore the possibilities Athinia can unlock
                  for your organization.
                </p>
                <CustomButton
                  isInternal={true}
                  link={'\contact'}
                  paddingX={'px-[1.5rem] md:px-[2rem]'}
                  paddingY={'py-[10px] md:py-[16px]'}
                  wrapperClass={"my-10 md:mt-10"}
                  text={"GET IN CONTACT"}
                  background={"bg-white"}
                  extraClass={"text-black inline hover:bg-athinia-dark hover:text-white letter-spacing-1 lg:btn-slider"}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center  bg-athinia-blue md:py-20 h-[300px] md:h-[400px]">
              <div className="  text-white px-0 mx-5 lg:px-10 lg:mx-10   py-10 md:py-0">
                <h3 className="text-sm-medium md:text-sm-large mb-6">Get the Latest Updates</h3>
                <p className="md:pb-5">
                  Be the first to hear about the latest insights we’re
                  unlocking.
                </p>
                <div className="flex xl:my-10 md:my-0 mt-5 lg:mt-10">
                  <CustomButton
                  paddingX={'px-[1.5rem] md:px-10 lg:px-7'}
                   isInternal={true}
                    link={'\contact'}
                    paddingY={'py-[10px] md:py-[14px] '}
                    text={"LATEST NEWS"}
                    background={"bg-white"}
                    extraClass={"text-black hover:bg-athinia-green letter-spacing-1 lg:btn-slider d-block"}
                  />
                  <div className="flex bg-white px-1 content-center md:pt-5  md:py-4 mx-2 hover:bg-athinia-green">
                  <a className="hover:bg-athinia-green flex items-center" href="https://www.linkedin.com/company/athinia" target="_blank"><FaLinkedinIn  className="mx-3  " color="black" width={17} height={19} /></a>
                  <div style={{ height: '10px'}}></div>
                  </div>
                 <div className="bg-white px-1 pt-3 md:pt-5  hover:bg-athinia-green ">
                <a href="https://twitter.com/Data4Pioneers" target='_blank'>
                <FaTwitter className="mx-3" color="black" width={17} height={19} />
                </a>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        
      </Splide>{" "}
    </section>
  );
};

export default TwoColSlider;
