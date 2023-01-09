import React, { useState } from "react";
import CustomButton from "../Buttons/CustomButton";
import Image from "next/image";
import PopupCard from "../Sections/Cards/PopupCard";

const Profile = ({ name, title, title2, link, image, content, btnClass = '' }) => {
  const [showModal, setShowModal] = useState(false);

  const onClickHandler = () => setShowModal(true);
  return (
    <div className="min-h-[350px] md:h-[535px] lg:h-[400px] my-3 md:my-0 grid  content-between">
      <div>
        <Image
          src={`/images/${image}`}
          className="rounded-full ml-auto mr-auto"
          width={150}
          height={150}
          alt="profile-athinia"
        />
        <h3
          className={`text-sm-medium md:text-lg-medium md:tracking-[-1px] 
                         text-athinia-blue mt-2`}
        >
          {name}
        </h3>
        <p className="text-white ">{title}</p>
        <p className="text-white ">{title2}</p>
      </div>
      <CustomButton
        onClickHandler={onClickHandler}
        wrapperClass={`text-white block px-[0.45rem] md:px-[0.35rem] lg:px-0 ${btnClass}`}
        extraClass={"block text-[1.2em] tracking-[1px]"}
        paddingX={"lg:px-[1.6rem]"}
        paddingY={"py-[1rem] md:py-[0.82rem] lg:py-[1rem]"}
        background={"bg-athinia-blue"}
        text={"ABOUT"}
      />
      {showModal ? (
        <div className="text-left">
          <PopupCard
            title={name}
            content={content}
            setShowModal={setShowModal}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Profile;
