
import { useState } from "react";
import BigCalendar from "../../components/DashboardComponents/BigCalendar";
import { FaPlus } from "react-icons/fa";
import CreateEventModal from "../../components/DashboardComponents/CreateEventModal";
import { createPortal } from "react-dom";

const Schedule = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <div className="w-full flex flex-col md:flex-row justify-between items-center relative border border-black">
            {/* <div>
            <h1>Schedule</h1>
            </div> */}
            <div className="h-full w-2/3 p-5 border border-red-500">
                <BigCalendar />
            </div>
            <div className="h-full w-1/3 p-5 bg-gray-50 border border-blue-500">
                <div className="flex flex-row justify-between items-center">
                    <span>Schedule here</span>
                    <button onClick={() => setShowModal(!showModal)} className="btn shadow-md"><FaPlus /> Create</button>
                </div>

            </div>

            
                {
                    showModal && createPortal(
                        <CreateEventModal />,
                        document.body
                    )
                }

          

        </div>
    );
};

export default Schedule;