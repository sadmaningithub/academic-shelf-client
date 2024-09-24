import { Link } from 'react-router-dom';
import communitySvg from '../../assets/svg/discuss.svg'

const DiscussionSection = () => {
    return (
        <div className='my-10'>
            <div className='text-center'>
                <h1 className='text-4xl font-medium'>Join the Discussion Community</h1>
            </div>
            <div className='flex flex-col lg:flex-row-reverse gap-10 items-center'>
                <div className='w-1/2 space-y-7'>
                    <h1 className='text-3xl'>Discussion Community</h1>
                    <p className='text-base'>Use the discussion section to communicate and get your problem solved. There you can post your problems, ask questions, comment to even help each other. You can also request for a resource.</p>
                    <Link className='btn' to='/discussion'>Go to Discussion</Link>
                </div>
                <div className='w-1/2'>
                    <img src={communitySvg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default DiscussionSection;