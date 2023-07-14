import React, { useEffect, useState } from 'react';
import Clothes from './Clothes'
import './Clothe.css'




const Clothe = () => {

    const [clothe, setClothe] = useState([]);
    useEffect(()=>{
        fetch('Clothes.json')
        .then(res => res.json ())
        .then (data => setClothe(data))

    }, [])
    console.log("cloteh" , clothe)

    const [count ,SetCount] = useState(null)
    const [total, setTotal] = useState(1);
    const handleclick = () =>{
        SetCount  (count+1) ;
        
    }
    const handleclick1 = () =>{
        SetCount(count - 1 >= 0 ? count - 1 : 0);
        
    }
    useEffect(() => {
        const calculateTotal = () => {
          const multipliedValue = count * 250;
          setTotal(multipliedValue);
        };
    
        calculateTotal();
      }, [count]);
    console.log(total)


    console.log("count" ,count)
    return (
        <div className=' main pt-20 pb-20 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 text-primary '>
        
        {
        clothe.map(option => <Clothes key={option.id} option={option}></Clothes> )

        }

<div className="d-flex">
          <button className='btn btn-primary' onClick={handleclick}>+</button>
          <span >{count}</span>
          <button className='btn btn-primary gap-4' onClick={handleclick1}>-</button>
          <span >{total}</span>
        </div>
        </div>
    );
};

export default Clothe;