
import { useLoaderData } from "react-router-dom";
import ResourceCard from "../components/ResourceCard/ResourceCard";


const Resources = () => {

    const resources = useLoaderData();

    console.log(resources);

    return (
        <div>

            <div className="text-center mt-10 space-y-7 bg-slate-300 p-10 rounded-xl">
                <h1 className="text-3xl font-bold">What are you going to learn today?</h1>
                <div className='flex flex-row justify-center items-center ' >
                    <input type="text" placeholder="Type here" className="input input-bordered border-r-0 rounded-l-3xl rounded-r-none w-full max-w-md" />
                    <input className='btn  rounded-l-none rounded-r-3xl border-none bg-[#0096C7]' type="submit" value='Search' />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-10 mb-20">
                {
                    resources.map(resource => <ResourceCard key={resource._id} resource={resource} ></ResourceCard>)
                }
            </div>
        </div>
    );
};

export default Resources;