import { useEffect, useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import { FaArrowRight } from "react-icons/fa";


const StudyMaterials = () => {

    const [videos, setVideos] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/resources')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setVideos(data)
        })
    },[])

    // console.log(videos);

    return (
        <div className="text-center space-y-7 mb-20">
            <div>
                <h1 className="text-4xl font-medium">Video Lectures at a Glance</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {
                    videos?.map(video => <VideoCard key={video._id} video={video}></VideoCard>)
                }
            </div>
            <button className="btn rounded-3xl">See All <FaArrowRight /></button>
        </div>
    );
};

export default StudyMaterials;