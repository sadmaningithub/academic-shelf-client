import { IoDocumentTextOutline } from "react-icons/io5";


const PostCard = () => {
    return (
        <div className="mb-20 ">
            <div className=" ">
                <div className="bg-base-300 p-10 rounded-xl max-w-xl ">
                    <h1 className="text-3xl font-medium flex flex-row gap-2 items-center justify-center mb-3"> <IoDocumentTextOutline /> Create Post</h1>
                    <form className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="email" placeholder="Title" name="title" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <select name="subject" className="select select-bordered w-full">
                                <option>Bangla</option>
                                <option>English</option>
                                <option>General Math</option>
                                <option>Information and Communication Technology</option>
                                <option>Higher Math First Paper</option>
                                <option>Higher Math Second Paper</option>
                                <option>Physics First Paper</option>
                                <option>Physics Second Paper</option>
                                <option>Chemistry First Paper</option>
                                <option>Chemistry Second Paper</option>
                                <option>Biology First Paper</option>
                                <option>Biology Second Paper</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class</span>
                            </label>
                            <select name="level" className="select select-bordered w-full">
                                <option className=''>Select One</option>
                                <option>Class one to five</option>
                                <option>class six to eight</option>
                                <option>SSC</option>
                                <option>HSC</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Add Photo</span>
                            </label>
                            <input type="text" placeholder="Photo url" name="photoUrl" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Describe</span>
                            </label>
                            <textarea
                                placeholder="Description"
                                className="textarea textarea-bordered textarea-lg w-full "></textarea>
                        </div>

                        <input className="btn w-full mt-6 text-lg" type="submit" value="Post" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default PostCard;