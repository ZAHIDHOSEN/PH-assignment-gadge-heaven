
import { Outlet, useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Cards from '../Cards/Cards';

const Home = () => {
    const categories = useLoaderData()
    console.log(categories)
    return (
        <div>
            <Banner></Banner>
            
            <h2 className='text-center font-bold text-black text-4xl'>Explore Cutting-Edge Gadgets</h2>


            <div className='grid grid-cols-4'>
           
                <div>
                    
                    <Categories categories={categories}></Categories>

               
                <div className='col-span-3'>

                    <Outlet></Outlet>
                 

                    </div>

                </div>

                </div>
           
   
        </div>
        
    
    );
};

export default Home;