import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment)

const myEventsList = [
    {
        title: "Meeting",
        start: new Date(2025, 8, 5, 10, 0), // Sep 5, 2025 at 10 AM
        end: new Date(2025, 8, 5, 12, 0),
    },
];

const Schedule = () => {
    return (
        <div>
            <h1>Schedule</h1>
            <div className="p-5 w-full">
                <Calendar
                    localizer={localizer}
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 600, width: 900  }}

                />
            </div>
        </div>
    );
};

export default Schedule;