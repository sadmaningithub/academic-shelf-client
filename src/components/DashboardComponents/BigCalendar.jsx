import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment) // or globalizeLocalizer

console.log(moment());

const BigCalendar = () => {

    const myEventsList = [
        {
            title: "Meeting",
            start: new Date(2025, 8, 7, 6, 0),
            end: new Date(2025, 8, 7, 7, 0),

        },
    ];

    return (
        <div className="h-full">

            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
            />


        </div>
    );
};

export default BigCalendar;