import { Link, NavLink } from "react-router-dom";


const NavBar = () => {

    

    const navLinks = <>
        <li> <NavLink className='' to='/'  >Home </NavLink> </li>
        <li> <NavLink to='/resources'> Resources</NavLink> </li>
        <li> <NavLink to='/practice'> Practice</NavLink> </li>
        <li> <NavLink to='/addResource'>Add Resource</NavLink> </li>
        <li> <NavLink to='/discussion'>Discussion</NavLink> </li>
    </>

    return (
        <div className=" bg-base-300  ">
            <div className="navbar max-w-screen-2xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <NavLink className='text-lg lg:text-3xl font-bold' to='/'>Academic Shelf</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-base">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end ">

                    <Link className="mr-3 btn btn-outline rounded-3xl" to='/Login'> Login  </Link>
                    <Link to='/signUp'> <button className="btn rounded-3xl">Sign up </button> </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;