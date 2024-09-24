import { FaUserCircle } from "react-icons/fa";


const Post = ({ post }) => {

    const { _id, title, subject, level, photoUrl, description } = post

    return (
        <div>
            <div className="card w-full shadow-xl border">

                <div className="card-body">
                    <div className="flex flex-row items-center gap-3">
                        <FaUserCircle />
                        <h1>User</h1>
                    </div>
                    <h1 className="card-title">{title}</h1>
                    <p>{level}</p>
                    <p>{subject}</p>
                    <p>{description}</p>
                </div>

                <div className="grid grid-cols-2">
                    {
                        photoUrl.map(photo => <img key={photo.index} src={photo} alt="" />)
                    }
                </div>
            </div>

        </div>
    );
};

export default Post;