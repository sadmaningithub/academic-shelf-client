import { FaComment, FaRegComment, FaUserCircle } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";


const Post = ({ post }) => {

    const { _id, title, subject, level, photoUrl, description } = post

    return (
        <div>
            <div className="card max-w-3xl shadow-xl px-3 border">

                <div className="card-body">
                    <div className="flex flex-row items-center gap-3 text-xl">
                        < FaUserCircle />
                        <h1 className="">User</h1>
                    </div>
                    <h1 className="card-title">{title}</h1>
                    <p>{level}</p>
                    <p>{subject}</p>
                    <p>{description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                    {
                        photoUrl.map(photo => <img className="h-full" key={photo.index} src={photo} alt="" />)
                    }
                </div>
                <div className="relative my-4 space-y-3">
                    <label className="label">
                        <span className="label-text flex flex-row items-center gap-2"> Comments <FaRegComment /> </span>
                    </label>
                    <input type="text" placeholder="Write your comment..." className="input input-bordered rounded-3xl w-full" />
                    <span className="absolute text-2xl font-bold right-5 bottom-3"><IoIosSend /></span>
                </div>
            </div>

        </div>
    );
};

export default Post;