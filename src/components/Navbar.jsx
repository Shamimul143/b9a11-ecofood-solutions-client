
import { Link, NavLink, useNavigate } from "react-router-dom";
import AllAuth from "../pages/AllAuth";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Navbar = () => {
    const { user, logOut } = AllAuth()
    const navigate = useNavigate();
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate("/login")
                toast.success("Logout successfully");
            })
    }

    const link = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/availableFoods'>Available Foods</NavLink></li>
        {
            user && <>
                <li><NavLink to='/addFood'>Add Food</NavLink></li>
                <li><NavLink to='/manageMyFoods'>Manage My Foods</NavLink></li>
                <li><NavLink to='/myFoodRequest'>My Food Request</NavLink></li>
            </>
        }
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
    </>


    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">EcoFood  <span className="text-[#478bca]">Solutions</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <a id="clickable"><img className="w-10 h-10 rounded-full ml-5" src={user?.photoURL || Image} alt="image" /></a>
                        <Tooltip className="z-[2]" anchorSelect="#clickable" clickable>
                            <p className="mb-4">{user?.displayName}</p>
                            <Link onClick={handleLogOut} to="/login" className=" py-1 px-4 rounded-lg text-white bg-[#478bca]">Logout</Link>
                        </Tooltip>
                    </> : <Link to="/login">Login</Link>
                }
            </div>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default Navbar;