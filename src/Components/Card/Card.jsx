import React from 'react';
import { Link } from 'react-router-dom';



const Card = ({product}) => {
    const {product_id, product_title, product_image,category,price} =product || {}
    return (
        <div>

<div className="card card-compact bg-base-100 shadow-xl ">
  <figure>
    <img
      src={product_image}
      alt="image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product_title}</h2>
    <p>price: {price}Tk</p>
   
    <div className="card-actions justify-start">
  <Link to={`/details/${product_id}`}><button className="btn btn-primary rounded-xl">View Details</button></Link>
    </div>
  </div>
</div>

            

            
        </div>
    );
};

export default Card;