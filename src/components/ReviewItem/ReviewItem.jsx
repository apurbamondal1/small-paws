import { FaProductHunt, FaTrashAlt } from "react-icons/fa";
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({product, handleRemoveItem}) => {
    const {_id, name, price, quantity,  image} = product;
    console.log(product)
    return (
        <div className='review-item'>
            <div>
                <img src={image} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveItem(_id)} className='btn-delete'>
                        <FaTrashAlt className='delete-icon'></FaTrashAlt>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;