import React from "react";

const Services = () => {
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Recruiters
        </h2>
        <p className="text-neutralGrey">
          Top MNCs First choice hiring Platform
        </p>
      </div>

      {/* company logo */}

      <div className="my-12 flex flex-wrap justify-between items-center gap-8 icons">
        <img src="/src/assets/icons/icon1.jpg" alt="company logo" />
        <img src="/src/assets/icons/icon2.jpg" alt="company logo" />
        <img src="/src/assets/icons/icon3.jpg" alt="company logo" />
        <img src="/src/assets/icons/icon4.jpg" alt="company logo" />
        <img src="/src/assets/icons/icon5.jpg" alt="company logo" />
        <img src="/src/assets/icons/icon6.jpg" alt="company logo" />
        <img src="/src/assets/icons/icon7.jpg" alt="company logo" />
      </div>
    </div>
  );
};

export default Services;
