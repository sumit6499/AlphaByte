import React from "react";
import Services from "./Services";
import AboutBanner from "../assets/about.png";
function About() {
  return (
    <div>
      <div className="bg-neutralSilver">
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto  ">
          {/*min-h-screen h-screen"> */}
          <div className="w-full mx-auto">
            <div className="top-6 my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-4">
              <div>
                <img
                  className="h-auto max-w-xl"
                  src={AboutBanner}
                  alt="banner"
                />
              </div>

              {/* hero text   */}

              <div className="md:w-1/2 md:pl-28">
                <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                  Helping You Find a Job{" "}
                  <span className="text-[#407BFF]">With All your Comfort</span>
                </h1>
                <p className="text-neutralGrey text-base mb-8">
                  We seamlessly tailor your best find
                </p>
                <button className="btn-primary">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
}

export default About;
