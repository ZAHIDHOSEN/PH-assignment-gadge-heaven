import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";


const Root = () => {
    return (
        <div>

            <nav className="">
                
            <NavBar></NavBar>

            </nav>

            <div className="mb-80">
            <Outlet></Outlet>
            </div>

            <div>
                <Footer></Footer>
            </div>
        
            
           
          

           
            
        </div>
    );
};

export default Root;