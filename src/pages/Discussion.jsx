import PostCard from "../components/PostCard/PostCard";
import PostCollection from "../components/PostCollection/PostCollection";


const Discussion = () => {
    return (
        <div className="mt-20">
            <div className="text-center space-y-5 mb-7">
                <h1 className="text-3xl font-bold">Welcome to the Discussion Community</h1>
                <p className="text-base max-w-xl mx-auto">A dedicated place to solve all your problems and connect with others. Do not hesitate to ask anything here. You can make a request by posting a request. It is an open place for everyone.</p>
            </div>
            <div className="">
                <PostCard></PostCard>
            </div>
            <div>
                <PostCollection></PostCollection>
            </div>
        </div>
    );
};

export default Discussion;