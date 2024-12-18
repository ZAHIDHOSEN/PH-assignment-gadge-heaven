import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";


const Cards = () => {

    const data = useLoaderData();

    const {category} = useParams()
    const [products, setProduct] = useState([])

    useEffect(() =>{
       const filterByCategory = [...data].filter(product =>product.category === category )

       setProduct(filterByCategory)
    },[data,category])
    console.log(data);
   
  
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {
            products.map(product =><Card key={product.product_id} product={product}></Card>)

          }  
           
          
        </div>
    );
};

export default Cards;