import React, { useState } from 'react';
import { deleteShoppingCart, removeFromDb } from '../Utilities/Utilities';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

import './TrackOrder.css';
import ReviewItem from '../ReviewItem/ReviewItem';




const TrackOrder = () => {
    const { initialCart } = useLoaderData();  // { products:clothe, initialCart: initialCart }
    const [product, setProduct] = useState(initialCart)

    const handleRemoveItem = (_id) => {
        const remaining = product.filter(product => product._id !== _id);
        setProduct(remaining);
        removeFromDb(_id);
    }

    const clearCart = () =>{
        setProduct([]);
        deleteShoppingCart();
    }




    return (
        <div className='main'>
            <div>
                {
                    product.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    product.length === 0 && <h2>No Items for Review. Please <Link to="/">Shop more</Link></h2>
                }
            </div>
            <div className=' second-container'>
                <Cart clearCart={clearCart}  product={product}></Cart>
               
            </div>
        </div>
         
    );
};

export default TrackOrder;