import VideoCard from "../VideoCard/VideoCard";


const StudyMaterials = () => {
    return (
        <div className="text-center space-y-7 my-10">
            <div>
                <h1 className="text-4xl font-medium">Video Lectures at a Glance</h1>
            </div>
            <div>
                <VideoCard></VideoCard>
            </div>
        </div>
    );
};

export default StudyMaterials;