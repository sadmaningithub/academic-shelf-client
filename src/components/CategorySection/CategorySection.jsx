

const CategorySection = () => {
    return (
        <div className="mb-20 space-y-7">
            <div className="text-center">
                <h1 className="text-4xl font-medium">Search by Category</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                <div className=" p-10 rounded-xl shadow-xl w-full border">
                    <h1 className="card-title justify-center">Class 1 to 5</h1>
                </div>
                <div className="card p-10 rounded-xl shadow-xl w-full border">
                    <h1 className="card-title justify-center">Class 6 to 8</h1>
                </div>
                <div className="card p-10 rounded-xl shadow-xl w-full border">
                    <h1 className="card-title justify-center">SSC</h1>
                </div>
                <div className="card p-10 rounded-xl shadow-xl w-full border">
                    <h1 className="card-title justify-center">Intermediate</h1>
                </div>
                <div className="card p-10 rounded-xl shadow-xl w-full border">
                    <h1 className="card-title justify-center">Guides</h1>
                </div>
                <div className="card p-10 rounded-xl shadow-xl w-full border">
                    <h1 className="card-title justify-center">Video Lectures</h1>
                </div>
                <div className="card p-10 rounded-xl shadow-xl w-full border">
                    <h1 className="card-title justify-center">Sheets</h1>
                </div>
                
            </div>
        </div>
    );
};

export default CategorySection;