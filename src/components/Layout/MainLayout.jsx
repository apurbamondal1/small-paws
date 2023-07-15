import { Outlet } from "react-router-dom";
import Navbar from "../page/Shared/Navbar";
import Footer from "../page/Shared/Footer";
import Quick from "../page/Shared/Quick";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUP";



const MainLayout = () => {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="min-h-screen">
          <Outlet />
        </div>
        <div>
        <Quick/>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
};

export default MainLayout;