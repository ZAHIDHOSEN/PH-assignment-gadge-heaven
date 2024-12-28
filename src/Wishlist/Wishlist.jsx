import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredWish } from '../index';
import WishCard from './WishCard';

const Wishlist = () => {
    
    const [addWish, setAddWish] = useState([])
    
    const allProducts = useLoaderData();

    

        useEffect(()=>{
            const storedWish =getStoredWish();
    
            console.log(allProducts,storedWish);
    
            const addWishList = allProducts.filter(product =>storedWish.includes(product.product_id));
    
           setAddWish(addWishList);
    
    
    
    
        },[])
    return (
        <div>
                <div>
                    <h2 className='text-2xl font-bold'>WishList</h2>
                  

                </div>

                <div>
                    {
                        addWish.map(product =><WishCard key={product.product_id} product={product}></WishCard>)
                    }
                </div>

          
        </div>
    );
};

export default Wishlist;