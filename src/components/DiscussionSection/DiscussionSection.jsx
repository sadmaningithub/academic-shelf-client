import { Link } from 'react-router-dom';
import communitySvg from '../../assets/svg/discuss.svg'
import { FaArrowRight } from 'react-icons/fa';

const DiscussionSection = () => {
    return (
        <div className='mb-20'>
            <div className='text-center mb-7'>
                <h1 className='text-4xl font-medium'>Join the Discussion Community</h1>
            </div>
            <div className='flex flex-col lg:flex-row-reverse gap-10 items-center'>
                <div className='w-2/3 space-y-7'>
                    <h1 className='text-3xl'>Discussion Community</h1>
                    <p className='text-base'>Use the discussion section to communicate and get your problem solved. There you can post your problems, ask questions, comment to even help each other. You can also request for a resource.</p>
                    <Link className='btn rounded-3xl' to='/discussion'>Go to Discussion <FaArrowRight /></Link>
                </div>
                <div className='w-1/3'>
                    <img src={communitySvg} className='w-full' alt="" />
                </div>
            </div>
        </div>
    );
};

export default DiscussionSection;