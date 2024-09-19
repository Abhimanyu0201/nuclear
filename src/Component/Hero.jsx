import React from "react";

export const Hero = () => {
  return (
    <div className="w-full h-[86vh] flex justify-center items-center px-4 sm:px-8 lg:px-16">
      <div className="w-full max-w-7xl h-full flex flex-col lg:flex-row items-center lg:justify-between">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-start mt-8 lg:mt-0 py-4 lg:py-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-wide leading-normal font-['Gotham_light'] font-medium">
            Teaming up with celebrities <br /> <sup>FOR</sup>{" "}
            <span className="font-['Gotham'] text-red-500 text-4xl sm:text-5xl lg:text-6xl leading-10 uppercase font-semibold">
              Samsonite
            </span>
          </h2>
          <h4 className="text-xl sm:text-2xl lg:text-3xl tracking-wide leading-normal font-['Gotham_light'] font-medium mt-4">
            and reaching a whopping
          </h4>
          <h4 className="text-lg sm:text-xl lg:text-2xl text-red-500 font-['Gotham_light'] font-medium mt-2">
            100M+ audience
          </h4>

          <button className="mt-7 px-4 py-2 border-2 border-gray-400 rounded hover:bg-gray-200 transition-colors">
            Read More
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
          <div className="w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-black rounded-full overflow-hidden flex items-center justify-center">
            <img
              src="https://www.socialbeat.in/wp-content/themes/socialbeat/assets/images/homepage/Samsonite.webp"
              alt="Samsonite"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
