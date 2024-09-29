
import { useLoaderData } from "react-router-dom";
import ResourceCard from "../components/ResourceCard/ResourceCard";
import { useEffect, useState } from "react";


const Resources = () => {

    const [productCount, setProductCount] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

    const numberOfPages = Math.ceil(productCount/itemsPerPage)

    const pages = [];
    for(let i = 1; i <= numberOfPages; i++){
        pages.push(i)
    }
    console.log( pages);
    // const pages = [...Array(numberOfPages).keys()];
    // console.log(typeof pages);

    const resources = useLoaderData();

    
    useEffect(()=>{
        fetch('http://localhost:5000/resourcesCount')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            const {count } = data
            // console.log(count);
            setProductCount(count)

        })
    },[productCount])

    const handleItemsPerPage = e =>{
        const val = parseInt(e.target.value);
        // console.log(val);
        setItemsPerPage(val)
        setCurrentPage(1)
    }

    return (
        <div className="mb-20">

            <div className="text-center mt-10 space-y-7 bg-slate-300 p-4 lg:p-10 rounded-xl bg-[url('https://i.ibb.co.com/cJ0tskc/resource-Bg.jpg')] bg-no-repeat bg-cover bg-center">
                <h1 className="text-3xl font-bold text-white">What are you going to learn today?</h1>
                <div className='flex flex-row justify-center items-center ' >
                    <input type="text" placeholder="Type here" className="input input-bordered border-r-0 rounded-l-3xl rounded-r-none w-full max-w-md" />
                    <input className='btn  rounded-l-none rounded-r-3xl border-none ' type="submit" value='Search' />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-10 mb-20">
                {
                    resources.map(resource => <ResourceCard key={resource._id} resource={resource} ></ResourceCard>)
                }
            </div>
            <div className="flex flex-row justify-center gap-3">
                <p>Current page: {currentPage}</p>
                <button className="btn">Previous</button>
                {
                    pages.map(page => <button onClick={()=> setCurrentPage(page)} key={page} className="btn">{page} </button>)
                }
                <select name="" value={itemsPerPage} onChange={handleItemsPerPage} id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
                <button className="btn">Next</button>
            </div>
        </div>
    );
};

export default Resources;