import { FaArrowLeft} from 'react-icons/fa';
import errorSvg from '../assets/svg/error.svg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='max-w-screen-2xl mx-auto '>
            <div className='flex flex-col items-center text-center space-y-5'>
                <div className=' mx-auto'>
                    <img className='w-full' src={errorSvg} alt="" />
                </div>
                <h1 className='text-7xl'>404</h1>
                <h1 className='text-2xl'>Sorry, the page was not found.</h1>
                <Link to='/'> <button className='btn rounded-3xl'> <FaArrowLeft/> Back to Home</button> </Link>
            </div>
        </div>
    );
};

export default ErrorPage;