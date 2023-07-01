import { Outlet } from "react-router-dom";
import Navbar from "../../Router/Sheard/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;