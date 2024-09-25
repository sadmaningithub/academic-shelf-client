import PostCard from "../components/PostCard/PostCard";
import PostCollection from "../components/PostCollection/PostCollection";


const Discussion = () => {
    return (
        <div className="mt-10">
            <div className="text-center space-y-5 mb-7">
                <h1 className="text-3xl font-bold">Welcome to the Discussion Community</h1>
                <p className="text-base max-w-xl mx-auto">A dedicated place to solve all your problems and connect with others.</p>
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