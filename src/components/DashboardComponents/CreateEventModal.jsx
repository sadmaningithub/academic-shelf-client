

const CreateEventModal = () => {
    return (
        <div className="bg-gray-100 w-full border border-purple-500">
            <form className="flex flex-col justify-between  border border-orange-500" >
                <input className="input input-bordered" type="text" name="title" />
                <input type="text" name="subject" />
                <input type="text" name="instructor" />
                <input type="datetime-local" name="startTime" />
                <input type="datetime-local" name="endTime" />
                <input type="submit" value='Create' />
            </form>
        </div>
    );
};

export default CreateEventModal;