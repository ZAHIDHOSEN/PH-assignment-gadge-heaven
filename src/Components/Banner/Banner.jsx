import React from 'react';
import bannerImg from '../../assets/assets/banner.jpg'

const Banner = () => {
    return (
        
          <div className=' bg-purple-600 rounded-xl'>
            <div className='p-10 justify-center text-center rounded-xl '>
            <h1 className='text-5xl font-bold text-white'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
            <p className='text-white/35'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            <button className="btn btn-active btn-neutral bg-white text-purple-800">shop now</button>

            <div className='flex justify-center mt-2 absolute'>
            <img className='h-2/6 w-3/12 rounded-xl  ' src={bannerImg} alt="" />
            </div>

           

            
            </div>
          
            
          
          </div>
            
        
    
    );
};

export default Banner;