import React from 'react';
import "./Clothes.css";



const Clothes = ({option,handlecard}) => {

    const {image,price,name} = option;
    return (
        <div className="product card w-80 bg-base-100 shadow-xl">
        <figure className="px-2 pt-2">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h1 className='name'>Name : {name}</h1>
          <h2 className='mb-4 text-black'>Price : ${price}</h2>
          <button className="btn btn-primary button" onClick={() => handlecard(option)}>ADD TO CARD</button>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          {/* <div className="card-actions">
           
            
          </div> */}
        </div>
      </div>
    );
};

export default Clothes;