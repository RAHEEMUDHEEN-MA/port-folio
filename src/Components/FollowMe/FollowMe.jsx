import React from "react";
import instagram from "./instagram-64 .png";
import linkedin from "./linkedin-64.png";

const FollowMe = () => {
  return (
    <div className="absolute z-50 right-5 h-full w-6 flex flex-col gap-4 items-center ">
      <div className="flex flex-col gap-4">
        <a href="https://www.instagram.com/_r4heem__/">
          <img src={instagram} alt="" width={22} />
        </a>
        <a href="https://www.linkedin.com/in/raheemudheen-m-a-058396259/">
          <img src={linkedin} alt="" width={22} />
        </a>
      </div>
      <div className="w-0.5 h-14 bg-white"></div>
      <p className="text-white rotate-90  ">Follow Me</p>
    </div>
  );
};

export default FollowMe;
