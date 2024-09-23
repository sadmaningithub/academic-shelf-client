

const AddResource = () => {
    return (
        <div>
            <h1>Add something</h1>
            <div>
                <form action="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" placeholder="Title" name="title" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" placeholder="Description" name="description" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subject</span>
                        </label>
                        <input type="text" placeholder="Subject" name="subject" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Resource Type</span>
                        </label>
                        <select name="type" className="select select-bordered w-full">
                            <option>Video</option>
                            <option>Sheet</option>
                            <option>PDF</option>
                            <option>Word Doc</option>
                        </select>                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Video Thumbnail</span>
                        </label>
                        <input type="text" placeholder="Thumbnail Url" name="thumbnail" className="input input-bordered" required />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddResource;