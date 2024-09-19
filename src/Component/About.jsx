import React from "react";

export const About = () => {
  return (
    <div className="w-full min-h-screen flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        {/* About Section */}
        <div className="font-['Gotham_light'] font-medium text-center">
          <div className="flex flex-col items-center justify-center mt-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
              About <span className="text-red-500">Social Beat</span>
            </h3>

            <p className="text-base sm:text-lg lg:text-xl tracking-tight mt-4">
              At Social Beat, we believe in pushing boundaries and turning challenges into opportunities. With our brands, partners, and a strong team of 300+ experts across 4 cities in India, we embark on a journey dedicated to delivering exceptional digital services. Join us as we rise to the impossible and achieve digital excellence together. Welcome to Social Beat, where digital possibilities know no bounds.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center mt-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
              We are <span className="text-red-500">growth partners</span> that drive results
            </h3>
          </div>
        </div>

        {/* Services and Image Section */}
        <div className="w-full mt-10 flex flex-col lg:flex-row gap-4 lg:gap-6 font-['Gotham']">
          {/* Service Buttons */}
          <div className="w-full lg:w-1/3 py-4 lg:py-10 flex flex-col items-center lg:items-start gap-4 lg:gap-8">
            <button className="text-base sm:text-lg lg:text-xl font-normal hover:text-red-400">
              Performance Marketing with a high ROI
            </button>
            <button className="text-base sm:text-lg lg:text-xl font-normal hover:text-red-400">
              In-depth Brand & Creative Strategy
            </button>
            <button className="text-base sm:text-lg lg:text-xl font-normal hover:text-red-400">
              Organic Traffic Growth
            </button>
            <button className="text-base sm:text-lg lg:text-xl font-normal hover:text-red-400">
              Tech to Scale and Automate
            </button>
          </div>
          
          {/* Image Section */}
          <div className="w-full lg:w-1/3 py-4 lg:py-10 flex items-center justify-center">
            <img
              src="https://www.socialbeat.in/wp-content/themes/socialbeat/assets/images/homepage/new/sec2_img1.png"
              alt="Social Beat"
              className="w-full h-auto max-w-xs lg:max-w-md"
            />
          </div>
          
          {/* Information List */}
          <div className="w-full lg:w-1/3 py-4 lg:py-10 flex flex-col items-center lg:items-start">
            <ul className="text-base sm:text-lg lg:text-xl flex flex-col items-center lg:items-start gap-4 lg:gap-6">
              <li>Premier Google Partner</li>
              <li>Manage over 3% of digital spends in India</li>
              <li>300+ member team of experts</li>
              <li>Curate hyper-scale strategies for your brand</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
