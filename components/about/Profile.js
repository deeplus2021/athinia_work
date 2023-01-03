import React, { useState } from "react";
import CustomButton from "../Buttons/CustomButton";
import Image from "next/image";
import PopupCard from "../Sections/Cards/PopupCard";

const Profile = ({ name, title, title2, link, image, content }) => {
  const [showModal, setShowModal] = useState(false);

  const onClickHandler = () => setShowModal(true);
  return (
    <div className="h-[400px] my-10 md:my-0 grid  content-between">
      <div>
        <Image
          src={`/images/${image}`}
          className="rounded-full ml-auto mr-auto"
          width={140}
          height={140}
          alt="profile-athinia"
        />
        <h3
          className={`text-sm-medium md:text-lg-medium tracking-[-1px] 
                         text-athinia-blue`}
        >
          {name}
        </h3>
        <p className="text-white ">{title}</p>
        <p className="text-white ">{title2}</p>
      </div>
      <CustomButton
        onClickHandler={onClickHandler}
        wrapperClass={" text-white block "}
        extraClass={"block"}
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
