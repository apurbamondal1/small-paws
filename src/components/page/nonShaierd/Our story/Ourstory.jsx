import React from 'react';
import image from '../../../../assets/image/ourstory.jpg';
const Ourstory = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">OUR STORY</h1>
            <p className="py-6">Our Brand is all about providing basic food and shelter to abandoned pets and animals. We give a percentage of our revenue to various NGOs and Charity Organizations across the globe so that they can take good care of our furry friends and see the world in a different perspective. We hope each one of you can contribute to this :)</p>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    );
};

export default Ourstory;