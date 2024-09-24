import { useEffect, useState } from "react";
import Post from "../Post/Post";


const PostCollection = () => {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/posts')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPosts(data)
        })
    } ,[])

    return (
        <div className="my-20 ">
            <div className="mb-5">
                <h1 className="text-3xl font-medium">Post Count: {posts.length}</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
                {
                    posts.map(post => <Post key={post._id} post={post}> </Post>)
                }
            </div>
        </div>
    );
};

export default PostCollection;