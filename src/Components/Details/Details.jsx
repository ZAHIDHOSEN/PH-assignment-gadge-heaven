import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredCart, addToStoredWish } from '../../index';
import { CiHeart } from "react-icons/ci";


const Details = () => {
    const data = useLoaderData();
     const {id} =useParams()
     const [product, setProduct]=useState({})
     useEffect(()=>{
        const singleData = data.find(product => product.product_id == id)
        setProduct(singleData)
     },[data,id])

     const {product_id, product_title, product_image,category,price,description,Specification,rating} =product || {}

     const handleAddToCart = (id) =>{

        addToStoredCart(id);

     }

     const handleWishList = (id) =>{
        addToStoredWish(id);
     }
   
    return (
        <div>
           <div className='bg-purple-700 ' >
            <div className=''>
                <h3 className='text-3xl font-bold text-white text-center'>Product Details</h3>
                <p className='text-gray-300 text-center'>Explore the largest gadet haven in Bangladesh.We are working togeather to serving best quality product</p>
                </div>
                </div>
                

                <div className='flex justify-center gap-6 absolute'>
                    <div>
                        <img src={product_image} alt="" />
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-3xl'>{product_title}</h3>
                        <p>Price: ${price}</p>
                        <button className='rounded-lg btn'>In stock</button>
                        <p>{description}</p>
                        <p className='font-semibold text-xl'>Specification:</p>
                        
                      <ul>
                        {
                            Specification?.map((specific, index)=>(
                                <li key={index}>{index+1}:{specific}</li>
                            ))
                            
                        }
                 
                      </ul>

                      <p className='font-bold text-xl'>Rating:</p>

                     <div className="rating items-center">
                     <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input
                       type="radio"
                      name="rating-2"
                         className="mask mask-star-2 bg-orange-400"
                       defaultChecked />
                       <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                       {rating}
                 
                      </div>
                     <div>
                     <button onClick={() =>handleAddToCart(id)}  className='btn bg-purple-500 mr-2'>Add to card</button>
                     <button className='btn' onClick={() =>handleWishList(id)}><CiHeart /></button>
                     </div>
                     
                     


                      
                      

                    </div> 
                    


               

           </div>
         
        </div>
        
    );
};

export default Details;