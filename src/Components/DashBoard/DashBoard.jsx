import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { getStoredCart } from '../../index';
import Card from '../Card/Card';

const DashBoard = () => {



    

 

    return (
        <div>
           <div className='bg-purple-500 py-5  text-center'>
            <h3 className='text-2xl font-bold text-white '>Dashboard</h3>
            <p className='text-gray-300 my'>This is dashboard.There are two button in this dashboard</p>
            <div>
               <Link to=''> <button  className='btn mr-2'>Cart</button></Link>
               <Link to='/dashboard/wishlist'> <button className='btn'>Wishlist</button></Link>
            </div>
  
           </div>
           <Outlet></Outlet>
    
            
        </div>

    );
};

export default DashBoard;