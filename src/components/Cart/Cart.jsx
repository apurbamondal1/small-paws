import React from 'react';
import './Cart.css'

const Cart = ({product}) => {
    
    return (
        <div className='cart'>
          <h4>Order Summary</h4>
          <hr />
          <p>selected Items :</p>
          <p>Total Price:</p>
          <p>Total shipping:</p>
          <p>Tax:</p>
          <h5>Grand Total:</h5>
        </div>
    );
};

export default Cart;