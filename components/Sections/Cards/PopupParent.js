import React from "react";
import { useState } from "react";
import PopupCard from "./PopupCard";

const PopupParent = ({ title, subTitle, content, titleClass = 'k text-athinia-blue text-lg-small md:text-lg-medium text-sm-13', spacingClass = '', colClass='' }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div     className={`bg-white hover:cursor-pointer   hover:text-athinia-dark  md:px-5 md:py-3 grid grid-cols-9 ${spacingClass ? spacingClass : 'md:grid-cols-6 mt-5 md:p-[30px]'}`}>
      <div onClick={() => setShowModal(true)} className={`col-span-8 ${colClass ? colClass : 'md:col-span-5'}`}>
        <h1 className={`${titleClass} hover:text-athinia-dark md:letter-spacing--1 md:line-height-1`}>{title}</h1>
        <p className="text-athinia-blue md:text-lg-small text-08 font-sm-bold">{subTitle}</p>
      </div>

      <div onClick={() => setShowModal(true)} className="col-span-1 ">
        <div
       
          className={`fill-athinia-green h-4 w-4 ${colClass ? 'lg:pr-[1.7rem] pl-3 md:pl-0 md:ml-[1rem] lg:ml-auto lg:mt-1' : 'ml-auto pt-2'}`}
        >
          <svg
            className="mini-drag"
            width={30}
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 73.3 73.3"
          >
            <path d="M72.7,33.3c-1.8-5.2-7.6-7.9-12.8-6.1c-2.8,1-5.1,3.2-6.1,6.1H40V19.5c4-1.5,6.6-5.3,6.6-9.5c0-5.5-4.5-10-10-10  s-10,4.6-10,10.1c0,4.2,2.7,8,6.7,9.4v13.8H19.5c-1.5-4-5.3-6.6-9.5-6.6c-5.5,0-10,4.5-10,10s4.6,10,10.1,10c4.2,0,8-2.7,9.4-6.7  h13.8v13.8c-5.2,1.8-7.9,7.6-6.1,12.8c1.8,5.2,7.6,7.9,12.8,6.1s7.9-7.6,6.1-12.8c-1-2.8-3.2-5.1-6.1-6.1V40h13.8  c1.8,5.2,7.6,7.9,12.8,6.1S74.5,38.5,72.7,33.3z"></path>
          </svg>
        </div>
      </div>
      {showModal ? (
        <PopupCard
          title={title}
          subTitle={subTitle}
          content={content}
          setShowModal={setShowModal}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default PopupParent;
