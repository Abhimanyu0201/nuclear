import React from "react";

export const Banner = () => {
  return (
    <div className="w-full">
      <div className="poster w-full h-[85vh] bg-gray-300 flex justify-between items-center pl-32 ">
        <div className="circle h-[700px] w-[700px] rounded-full bg-white "></div>

        <div className=" ">
          <h5 className="font-['Gotham_light'] text-3xl  px-10 py-5 font-light">
            Read along <span className="text-red-500">With us</span>
          </h5>

          <div className="cards  pr-60  flex flex-col gap-6 mt-7">
            <div className="w-[25rem] h-[8rem] ">
              <img
                className="w-full h-full object-cover"
                src="https://www.socialbeat.in/wp-content/themes/socialbeat/assets/images/homepage/new/blog_img1.png"
                alt="Blog image 1"
              />
            </div>
            <div className="w-[25rem] h-[8rem] ">
              <img
                className="w-full h-full object-cover"
                src="https://www.socialbeat.in/wp-content/themes/socialbeat/assets/images/homepage/new/blog_img2.png"
                alt="Blog image 2"
              />
            </div>
            <div className="w-[25rem] h-[8rem] ">
              <img
                className="w-full h-full object-cover"
                src="https://www.socialbeat.in/wp-content/themes/socialbeat/assets/images/homepage/new/blog_img3.png"
                alt="Blog image 3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
