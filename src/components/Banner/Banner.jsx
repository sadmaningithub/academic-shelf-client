import study from '../../assets/svg/banner.svg'

const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-10 p-10">
            
            <div className='w-full'>
                <img src={study} className="" />
            </div>
            <div className='w-full space-y-4 text-center lg:text-left'>
                <h1 className="text-5xl font-bold">Organize Your</h1>
                <h1 className="text-5xl font-bold"> <span>Academic</span> Life </h1>
                <p className="text-xl py-6">
                    The only platform you will ever need to organize and manage your academic life.
                </p>
                <div className='flex flex-row items-center' >
                    <input type="text" placeholder="Type here" className="input input-bordered border-r-0 rounded-l-3xl rounded-r-none w-full max-w-md" />
                    <input className='btn  rounded-l-none rounded-r-3xl' type="submit" value='Search' />
                </div>
            </div>
        </div>
    );
};

export default Banner;