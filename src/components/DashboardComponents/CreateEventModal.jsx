

const CreateEventModal = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center p-5 border bg-black/50 z-10 border-cyan-700 ">
            <div className="flex flex-col bg-white ">
                <span className="text-base">Create Event</span>
                <form className="flex flex-col justify-between gap-2 p-5 border border-orange-500" >
                    <label className="label">Title</label>
                    <input className="input input-bordered" type="text" name="title" />
                    <label className="label">Subject</label>
                    <input className="input input-bordered" type="text" name="subject" />
                    <input className="input input-bordered" type="text" name="instructor" />
                    {/* <input className="" type="color" name="" id="" /> */}
                    <input className="input input-bordered" type="datetime-local" name="startTime" />
                    <input className="input input-bordered" type="datetime-local" name="endTime" />
                    <input className="btn" type="submit" value='Create' />
                </form>
            </div>
        </div>
    );
};

export default CreateEventModal;