import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


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
        <div className="mb-20 mt-10">

            <div className=" lg:max-w-screen-2xl h-[450px] lg:h-[900px] border border-red-500">
                <iframe className="w-full h-full" src={videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className="my-10 space-y-5">
                <h1 className="text-4xl font-medium">{title}</h1>
                <h2><span className="text-base font-bold">Class:</span> {level}</h2>
                <h2><span className="text-base font-bold">Subject:</span> {subject}</h2>
                <p className="text-base"><span className="text-base font-bold">Description:</span> <br /> <br /> {description}</p>
                <p>
                  <span className="text-base font-bold">Playlist: </span> <a href={playlist} target="_blank" className="text-blue-500 my-3">{playlist}</a>
                </p>
            </div>
            <div>
                <p>
                    <span className="text-base font-bold">Disclaimer:</span> The content provided on this website, including study materials and resources, belongs to their respective creators. This website does not claim ownership of any materials and is not involved in the sale or distribution of any content. All materials are shared solely for educational purposes.
                </p>
            </div>
        </div>
    );
};

export default VideoPage;