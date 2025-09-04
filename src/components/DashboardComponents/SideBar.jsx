import { FaRegClipboard } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { TbMoneybag } from "react-icons/tb";

import { NavLink } from "react-router-dom";


const SideBar = () => {

    const navLinks = [
        { path: 'home', name: 'Home', icon: <IoHomeOutline /> },
        { path: 'schedule', name: 'Schedule', icon: <RiCalendarScheduleLine /> },
        { path: 'budget', name: 'Budget', icon: <TbMoneybag /> },
        { path: 'planner', name: 'Planner', icon: <FaRegClipboard /> },
        // { name: 'exams', icon: <LuClipboardPenLine />}
    ]

    return (
        <div className=" h-full p-2 shadow-md">
            <h1 className="p-2 mb-10 text-xl">Sidebar</h1>
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
                        {navLink.icon}
                        {navLink.name}
                        {/* </span> */}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default SideBar;