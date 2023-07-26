import React from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';
import Payment from '../../Payment/Payment';

const Cart = (props) => {
    const { product, clearCart, children } = props;
    // console.log( "pro",product)
 
    let total = 0;
    let quantity = 0;
    for(const item of product){
        total = total+item.price * item.quantity;
        quantity=quantity+item.quantity;
    }
   const tax = parseInt((total*0.1).toFixed(2));
    const grandTotal = (total+tax).toFixed(2);



    return (
        <div className='cart'>
          <h4>Order Summary</h4>
          <hr />
          <p>selected Items :{quantity}</p>
          <p>Total Price:${total}</p>
          <p>Tax:{tax}</p>
          <form >
          <h5 className='grand-total' name="total" >Grand Total:{grandTotal}</h5>
          </form>
          <button className='btn btn-primary mt-10' onClick={clearCart}>Clear Cart</button><br/>
          <Link to='/payment'><button className='btn btn-accent mt-5' >Proceed to Paymet</button></Link>
            {children}
           
        </div>
        
    );
};

export default Cart;