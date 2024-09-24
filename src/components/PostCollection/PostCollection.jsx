import { useEffect, useState } from "react";


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
        <div>
            <div>
                <h1>Post Count: {posts.length}</h1>
            </div>
        </div>
    );
};

export default PostCollection;