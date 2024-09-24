import signUpSvg from '../assets/svg/signup.svg'

const SignUp = () => {
    return (
        <div>
            <div className="">
                <div className="flex flex-col lg:flex-row items-center">
                    
                    <div className="w-full">
                        <div className='card bg-base-100 max-w-xl shadow-2xl'>
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="email" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Profile Picture</span>
                                    </label>
                                    <input type="email" placeholder="picture" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />
                                    
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="w-full">
                        <img src={signUpSvg} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;