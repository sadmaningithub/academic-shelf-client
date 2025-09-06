import { useState } from "react";
import { FaRegClipboard } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbMoneybag } from "react-icons/tb";

import { NavLink } from "react-router-dom";


const SideBar = () => {

    const [isOpen, setIsOpen] = useState(true)

    const navLinks = [
        { path: 'home', name: 'Home', icon: <IoHomeOutline /> },
        { path: 'schedule', name: 'Schedule', icon: <RiCalendarScheduleLine /> },
        { path: 'budget', name: 'Budget', icon: <TbMoneybag /> },
        { path: 'planner', name: 'Planner', icon: <FaRegClipboard /> },
        // { name: 'exams', icon: <LuClipboardPenLine />}
    ]

    return (
        <div className={` border ${isOpen ? 'h-full p-2 shadow-md': 'w-fit '}`}>
            <div className="flex flex-row justify-between items-center p-2 mb-10 border">
                <h1 className={` ${isOpen ? 'text-xl' : 'hidden'}`}>Sidebar</h1>
                <button onClick={()=> setIsOpen(!isOpen)} className="btn"><RxHamburgerMenu className="text-xl"/></button>
            </div>
            <div className="space-y-2">
                {
                    navLinks.map((navLink, index) => <NavLink
                        key={index}
                        to={navLink.path}
                        className={({ isActive }) =>
                            `flex flex-row items-center gap-2 p-2 rounded-lg transition-all duration-300  ${isActive ? "bg-black text-white" : "hover:bg-gray-100"
                            }`}
                    >
                        {/* {({ isActive }) => (
                        <span className={isActive ? 'flex flex-row items-center gap-2 text-2xl bg-red-500' : " flex flex-row items-center gap-2 text-2xl bg-blue-500"}>
                            {navLink.icon}
                            {navLink.name}
                        </span>
                    )} */}
                        {/* <span className="flex flex-row items-center gap-2 text-2xl"> */}
                        <span className="w-full" >{navLink.icon}</span>
                        {
                            isOpen && navLink.name
                        }
                        {/* </span> */}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default SideBar;