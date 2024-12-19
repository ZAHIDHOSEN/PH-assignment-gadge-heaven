import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";


const Root = () => {
    return (
        <div>

            <div className="h-16">
            <NavBar></NavBar>

            </div>
                
            

            

            <div className="mb-20">
            <Outlet></Outlet>
            </div>

            <div>
                <Footer></Footer>
            </div>
        
            
           
          

           
            
        </div>
    );
};

export default Root;