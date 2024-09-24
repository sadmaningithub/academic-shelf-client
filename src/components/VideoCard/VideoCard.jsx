
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";



const VideoCard = ({video}) => {

    const {_id, title, description, subject, level, thumbnail} = video

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={thumbnail}
                        alt="" />
                </figure>
                <div className="card-body text-left space-y-5">
                    <h2 className="card-title">{title}</h2>
                    <p> {level} - {subject}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-start">
                        <Link to={`resources/${_id}`}> <button className="btn rounded-3xl text-white bg-red-500"> <FaPlay /> Watch Now</button> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;