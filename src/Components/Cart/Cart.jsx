import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../index';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import CartCard from './CartCard';

const Cart = () => {

        const [addCart, setAddCart] = useState([])
    
        const allProducts = useLoaderData();
    
        
    
            useEffect(()=>{
                const storedCart = getStoredCart();
        
                console.log(allProducts,storedCart);
        
                const addCartList = allProducts.filter(product =>storedCart.includes(product.product_id));
        
                setAddCart(addCartList);
        
        
        
        
            },[])


    return (
        <div>
            <div className=' flex justify-between my-4'>
                <div>
                    <h2 className='text-2xl font-bold'>Cart</h2>
                </div>
                <div className='flex gap-5 items-center'>
                    <h2 className='text-xl font-bold'>Total cost: 999.99</h2>
                    <button className='btn rounded-lg'>Sort by price</button>
                    <button className='btn bg-purple-600 text-white'>Purches</button>
                </div>
            </div>

               <div className='my-5'>
          {
            addCart.map(product =><CartCard key={product.product_id} product={product}></CartCard>)

           }
          </div>


            
        </div>
    );
};

export default Cart;