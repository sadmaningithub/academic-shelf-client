import { Outlet } from "react-router-dom";
import SideBar from "../components/DashboardComponents/SideBar";


const Dashboard = () => {
    return (
        <div className="max-w-7xl mx-auto flex flex-row min-h-screen border">
            <div className="max-w-xs w-full ">
                <SideBar></SideBar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;