import { Carousel } from "flowbite-react";
import React from "react";

import "../App.css";
import banner from "../assets/banner.png";

const Home = () => {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <div className="w-full mx-auto">
          <div className="top-6 my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-4">
            <div>
              <img className="h-auto max-w-xl" src={banner} alt="banner" />
            </div>

            {/* hero text   */}

            <div className="md:w-1/2 md:pl-28">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Lets Get Placed{" "}
                <span className="text-brandPrimary"> With One Click</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                No need to fill details!! Have Resume?
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
