import React, { useRef, useEffect } from "react";
import cssStyle from './PopupCard.module.css'
function useOutsideAlerter(ref, setShowModal) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowModal(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const PopupCard = ({ setShowModal, title, subTitle, content }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setShowModal);

  return (
    <>
      <div
     
        className=" hover:cursor-pointer justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  outline-none focus:outline-none z-[200]"
      >
        <div
          ref={wrapperRef}
          className="relative w-auto my-6 mx-auto max-w-[950px]"
        >
          <div className="animate-fade-in border-0 rounded-lg px-5 md:px-5 lg:px-0 relative flex flex-col w-full outline-none">
            <button
              className="p-1 ml-auto float-right text-athinia-green text-[40px] "
              onClick={() => setShowModal(false)}
            >
              &#10006;
            </button>
            <div className="flex items-start justify-between  ">
              <h3 className="text-3xl font-semibold text-athinia-green md:text-sm-large md:letter-spacing--1">
                {title}
              </h3>
            </div>
            <p className="text-athinia-green md:text-lg-small">{subTitle}</p>

            <div
              className={`relative  flex-auto text-white ${cssStyle.popup}`}
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>
        </div>
      </div>
      <div

        className="opacity-98 fixed inset-0  z-50 bg-[#172337F9]"
      ></div>
    </>
  );
};

export default PopupCard;
