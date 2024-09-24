import { Link } from 'react-router-dom';
import loginSvg from '../assets/svg/login.svg'

const Login = () => {
    return (
        <div>
            <div className="">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="w-full">
                        <img src={loginSvg} alt="" />
                    </div>
                    <div className='w-full '>
                        <div className="card bg-base-100 max-w-xl shadow-2xl">
                            <form className="card-body">
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
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn ">Login</button>
                                </div>
                                <p className='mt-3'>Need an account? <Link to='/signup' className=''> Sign up </Link> </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;