import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { product, clearCart, children } = props;
    console.log( "pro",product)
 
    let total = 0;
    let quantity = 0;
    for(const item of product){
        total = total+item.price * item.quantity;
        quantity=quantity+item.quantity;
    }
   const tax = parseInt((total*0.1).toFixed(2));
    const grandTotal = total+tax;
    return (
        <div className='cart'>
          <h4>Order Summary</h4>
          <hr />
          <p>selected Items :{quantity}</p>
          <p>Total Price:${total}</p>
          <p>Tax:{tax}</p>
          <h5>Grand Total:{grandTotal.toFixed(2)}</h5>
          <button onClick={clearCart}>Clear Cart</button>
            {children}
        </div>
    );
};

export default Cart;