import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const VideoPage = () => {

    const { id } = useParams();

    const [dataDetails, setDataDetails] = useState({});

    // console.log(id);

    const { _id, title, description, subject, level, type, thumbnail, videoUrl, playlist, userName, email } = dataDetails

    useEffect(() => {
        fetch(`http://localhost:5000/resources/${id}`)
            .then(res => res.json())
            .then(data => {
                setDataDetails(data)
            })
    }, [])

    // console.log(subject);

    return (
        <div className="mb-20">
            <h1>Resource Details</h1>

            <div className=" lg:max-w-screen-2xl h-[450px] lg:h-[900px] border border-red-500">
                <iframe className="w-full h-full" src={videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div>
                <h1>{title}</h1>
            </div>
        </div>
    );
};

export default VideoPage;