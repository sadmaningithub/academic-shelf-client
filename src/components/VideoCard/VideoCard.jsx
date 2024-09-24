

const VideoCard = () => {
    return (
        <div>
            <div className="card bg-base-100 w-full shadow-xl">
                <figure>
                    <img
                        src={'https://i.ytimg.com/vi/oReKar8lq3c/maxresdefault.jpg'}
                        alt="" />
                </figure>
                <div className="card-body text-left space-y-5">
                    <h2 className="card-title">Video title</h2>
                    <p>Video description</p>
                    <div className="card-actions justify-start">
                        <button className="btn">Watch Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;