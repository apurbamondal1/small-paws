import { Link } from 'react-router-dom';
import logo from '../../../assets/image/logo.png';
import './Navbar.css';
import { FaAngleDown,FaSistrix} from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { useContext } from 'react';
import { AuthContex } from '../../../Contrext/UserContext';
;


const Navbar = () => {
  const {user, logOut} = useContext(AuthContex)
  const menuitems = <>
        <li><a href='#' >Home</a></li>
        <li className=''><Link to="./TrackOrder" >Track Order</Link ></li>

        <div className='dropdown-container'>
        <li className='hidden lg:block'><a href='#' >Brand <FaAngleDown></FaAngleDown></a></li>
        <div className='dropdown-content'>
        <li><a href='#' >Our Brand</a></li>
        <li><a href='#' >Our Story & Charity Coast</a></li>
        </div>
        </div>

        <div className='dropdown-container'>
        <li><a href='#' >Shop<FaAngleDown></FaAngleDown></a></li>
        <div className='dropdown-content'> 

        <li><Link to="./Clothe" >Clothing</Link></li>        
        <li><a href='#' >Must Have Collection</a></li>
        <li><a href='#' >For Dogs</a></li>
        <li><a href='#' >For Cats</a></li>
        <li><a href='#' >Bandanas & Collars</a></li>
        <li><a href='#' >Beds & Carriers</a></li>
        <li><a href='#' >Leash & Harness</a></li>
        </div>
        </div>
        
        <div className='dropdown-container'>
        <li className='hidden lg:block'><a href='#' >Services<FaAngleDown></FaAngleDown></a></li>
          <div className='dropdown-content'>
          <li><a href='#' >FAQ</a></li>
          <li><a href='#' >Privace policy</a></li>
          <li><a href='#' >Refund Policy</a></li>
          <li><a href='#' >Shipping Policy</a></li>
          <li><a href='#' >Terms of service</a></li>
          </div>
        </div>

        <li className='hidden lg:block'><a href='#'  >Contact Us</a></li>
  </>
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="z-50 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {menuitems}
        </ul>
      </div>
      <a className="btn btn-ghost normal-case text-xl"><img src={logo} alt=''></img></a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="z-50 menu menu-horizontal px-1">
        {menuitems}
      </ul>
    </div>
    <div className="navbar-end ">
      <FaSistrix></FaSistrix>
      <input type='text' placeholder='Search' ></input>
      
      <span className='mx-8'><GrCart></GrCart></span>
    </div>
    {
                    user?.uid ?
                        <button className='btn btn-secondary'  onClick={logOut}>Log out</button>
                        :
                        <>
                            <Link  className='btn btn-primary' to="/login">Login</Link>
                         
                        </>
                }
    
  
  </div>

  );
};

export default Navbar;