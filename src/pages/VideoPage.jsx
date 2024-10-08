import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";


const VideoPage = () => {

    const { id } = useParams();

    const [dataDetails, setDataDetails] = useState({});

    // console.log(id);

    const { title, description, subject, level, videoUrl, playlist } = dataDetails

    useEffect(() => {
        fetch(`http://localhost:5000/resources/${id}`)
            .then(res => res.json())
            .then(data => {
                setDataDetails(data)
            })
    }, [])

    // console.log(subject);

    return (
        <div className="mb-20 mt-5">

            <div className="mb-5">
                <Link to='/resources' className="btn rounded-3xl"> <FaArrowLeft/>  </Link>
            </div>

            <div className="max-w-xs lg:max-w-screen-2xl h-[180px] lg:h-[900px] ">
                <iframe className="w-full h-full" src={videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className="my-10 space-y-5">
                <h1 className="text-4xl font-medium">{title}</h1>
                <h2><span className="text-base font-bold">Class:</span> {level}</h2>
                <h2><span className="text-base font-bold">Subject:</span> {subject}</h2>
                <p className="text-base"><span className="text-base font-bold">Description:</span> <br /> <br /> {description}</p>
                <p className="max-w-xs lg:max-w-full text-wrap ">
                  <span className="text-base font-bold">Playlist: </span> <a href={playlist} target="_blank" className="text-blue-500 my-3">{playlist}</a>
                </p>
            </div>
            <div>
                <p className="font-bold">
                    <span className="text-base font-bold text-red-500">Disclaimer:</span> The content provided on this website, including study materials and resources, belongs to their respective creators. This website does not claim ownership of any materials and is not involved in the sale or distribution of any content. All materials are shared solely for educational purposes.
                </p>
            </div>

            <div className="flex flex-row justify-center items-center gap-4 mt-5 ">
                <button className="btn rounded-3xl">Watch later</button>
                <button className="btn rounded-3xl">Add Playlist</button>
            </div>
        </div>
    );
};

export default VideoPage;