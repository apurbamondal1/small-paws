import React from 'react';


const Clothes = ({option}) => {

    const {image} = option;
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
        <figure className="px-2 pt-2">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"></h2>
          <button className="btn btn-primary">View Details</button>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          {/* <div className="card-actions">
           
            
          </div> */}
        </div>
      </div>
    );
};

export default Clothes;