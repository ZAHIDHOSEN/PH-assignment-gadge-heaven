import React from 'react';

const WishCard = ({product}) => {
    const {product_id, product_title, product_image,category,price,description} =product || {}
    return (
        <div className='flex  items-center gap-3 border border-gray-300 py-5 my-2'>
        <div>
            
            <img 
            className='h-36'
            src={product_image} alt="" />

        </div>
        <div>
            <h3 className='font-bold text-xl'>{product_title}</h3>
            <p>{description}</p>
            <p className='font-semibold'>{price}</p>

        </div>
     </div>
     
    );
};

export default WishCard;