import { Link, NavLink } from "react-router-dom";


const Categories = ({categories}) => {
 
    return (
        
          <div className="flex flex-col gap-2 mx-auto my-5">
              {categories?.map(category =>(
             <NavLink key={category.category} to={`/category/${category.category}`}  className={({isActive})=>`btn ${isActive? "btn bg-red-600" :''}`}>{category.category}</NavLink>
            ))}
          </div>
     
       
        


    );
};

export default Categories;
