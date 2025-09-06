// import moment from "moment";
// import { useState } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import "react-big-calendar/lib/css/react-big-calendar.css"

import { useEffect, useState } from "react";

// const localizer = momentLocalizer(moment)

// console.log(moment());
// console.log(typeof moment());
// console.log(moment()._d);
// console.log(moment().date());
// console.log(moment().day());
// console.log(moment().month());
// console.log(moment().year());
// console.log(Date());



const Schedule = () => {

    // const [startDate, setStartDate] = useState(null)
    // const [endtDate, setEndDate] = useState(null)

    // const handleAddEvent = e => {
    //     e.preventDefault()
    //     const startDate = new Date(e.target.startEvent.value);
    //     const endDate = new Date(e.target.endEvent.value);
    //     setStartDate(startDate)
    //     setEndDate(endDate)
    //     console.log(startDate);
    //     console.log(endDate);
    // }

    // const myEventsList = [
    //     {
    //         title: "Meeting",
    //         start: startDate,
    //         end: endtDate,

    //     },
    // ];

    const [events, setEvents] = useState([]);

    const handleAddEvent = e => {
        e.preventDefault();
        const form = e.target;
        const startDate = form.start.value;
        const endDate = form.end.value;
        const date = { startDate, endDate }
        console.log(startDate, endDate);
        fetch('http://localhost:5000/events', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(date)

        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    // useEffect(() => {
    //     fetch('http://localhost:5000/events')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(events);
    //             setEvents(data)
    //         })

    // }, [])
    const newDate = new Date("2025-09-06T22:25")

    console.log(newDate);


    return (
        <div className="w-full border ">
            <h1>Schedule</h1>

            <form onSubmit={handleAddEvent}>
                <input className="input input-bordered" type="datetime-local" name="start" id="" />
                <input className="input input-bordered" type="datetime-local" name="end" id="" />
                <input className="btn" type="submit" value="add event" />
            </form>
            {/* <form onSubmit={handleAddEvent}>
                <input className="input input-bordered" type="datetime-local" name="startEvent" id="" />
                <input className="input input-bordered" type="datetime-local" name="endEvent" id="" />
                <input className="btn" type="submit" value="add event" />
            </form>
            <div className="flex flex-row justify-center p-5 h-2/3 border">
                <Calendar
                    localizer={localizer}
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                    // style={{width: 1200}}
                    className="w-2/3 border border-blue-500"
                />
            </div> */}
        </div>
    );
};

export default Schedule;