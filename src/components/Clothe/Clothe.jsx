import React, { useEffect, useState } from 'react';
import Clothes from './Clothes'
import './Clothe.css'
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getStoredCart } from '../Utilities/Utilities';
import { useLoaderData } from 'react-router-dom';




const Clothe = () => {

    const [clothe, setClothe] = useState([]);
    const [count, setCount] = useState(0);
    const [product, setProduct] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(6);


    useEffect(() => {
        const url = `http://localhost:5000/product?page=${page}&size=${size}`;
        console.log(page, size);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
                setClothe(data.clothe);
            })
    }, [page, size]);


    const pages = Math.ceil(count / size);


    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    };

     
    useEffect( ()=>{
        const storedCart = getStoredCart()
        const savedCart = [];
        const ids = Object.keys(storedCart);

        fetch('http://localhost:5000/productByIds', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify (ids)
           })
        .then(res => res.json())
        .then(data => {
        for (const id in storedCart) {
          const addedProduct = data.find(option => option._id ===id)
          if(addedProduct){  
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
          }
        }
        setProduct(savedCart);
    })
    },[clothe]);

   
    const handlecard  = (selectedProduct) =>{
        let newCart = [];
        const exists = product.find(option => option._id === selectedProduct._id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...product, selectedProduct];
        }
        else{
            const rest = product.filter(option => option._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setProduct(newCart);
        addToDb(selectedProduct._id);
    };


    return (
        <div className='main-container'>
        <div className=' main  pb-20 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 text-primary '>
        {
        clothe.map(option => <Clothes 
            key={option._id}
             option={option}
              handlecard={handlecard}></Clothes> )
        }
        </div>
        
     <div className="  mt-5 ml-5 d-flex  second-container">
          <Cart product={product} clearCart={clearCart}></Cart>
        </div>
        <div className="pagination">
                <p>Currently selected page: {page+1} </p>
                {
                    [...Array(pages).keys()].map(number => <button
                        key={number}
                        className={page == number ? 'selected' : ''}
                        onClick={() => setPage(number)}
                    >
                        {number+1}
                    </button>)
                }
              
            </div>
        </div>
    );
};



export default Clothe;