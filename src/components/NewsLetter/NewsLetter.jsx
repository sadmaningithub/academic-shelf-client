import newsLetter from '../../assets/svg/newsLetter.svg'


const NewsLetter = () => {
    return (
        <div className='mb-20'>

            <div className='flex flex-col space-y-7' >
                <div className='flex flex-row justify-center w-full '>
                    <img className='max-w-md' src={newsLetter} alt="" />
                </div>
                <div className='text-center space-y-7'>
                    <h1 className='text-3xl font-medium '>NewsLetter</h1>
                    <p className='text-base'>Subscribe to our newsLetter to stay updated with us. So you do not have to miss anything awesome</p>
                </div>
                {/* <div className='flex flex-row justify-center border border-blue-500 w-full'> */}
                   
                        <form className='flex flex-row justify-center  w-full'>
                            <div className='form-control flex flex-row max-w-xl w-full'>
                                {/* <label className="label">
                                    <span className="label-text">Email</span>
                                </label> */}
                                <input type="email" placeholder='email' name="email" className='input input-bordered rounded-l-3xl rounded-r-none border-r-0 w-full' />
                                <input className='btn rounded-l-none rounded-r-3xl' type="submit" value="Subscribe" />
                            </div>
                        </form>
                        
                {/* </div> */}
            </div>
        </div>
    );
};

export default NewsLetter;