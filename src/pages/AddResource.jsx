import Swal from 'sweetalert2';
import side from '../assets/png/add.png'

const AddResource = () => {

    const handleAddResource = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const level = form.class.value;
        const subject = form.subject.value;
        const type = form.type.value;
        const thumbnail = form.thumbnail.value;
        const videoUrl = form.videoUrl.value;
        const playlist = form.playlist.value;
        const userName = form.name.value;
        const email = form.email.value;
        const newResource = { title, description, subject, level, type, thumbnail, videoUrl, playlist, userName, email }
        console.log(newResource);
        fetch('http://localhost:5000/resources', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newResource)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data.insertedId);
            if(data.insertedId){
                Swal.fire({
                    title: "Added",
                    text: "Resource Added Successfully",
                    icon: "success",
                    confirmButtonText: "Done"
                  });
            }
            
        })
    }

    return (
        <div className='my-10'>

            <div className='flex flex-col lg:flex-row-reverse items-center'>

                <div className='w-full'>
                    <img className='' src={side} alt="" />
                </div>

                <div className='w-full'>
                    <h1 className='text-3xl font-medium text-center mb-5'>Add Resource</h1>
                    <form onSubmit={handleAddResource} className='grid grid-cols-1 lg:grid-cols-2 gap-5 rounded-xl bg-slate-200 w-full p-5 '>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" placeholder="Title" name="title" className="input input-bordered w-full" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" placeholder="Description" name="description" className="input input-bordered w-full"  />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class</span>
                            </label>
                            <input type="text" placeholder="Class" name="class" className="input input-bordered w-full" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" placeholder="Subject" name="subject" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resource Type</span>
                            </label>
                            <select name="type" className="select select-bordered w-full">
                                <option className=''>Select One</option>
                                <option>Video</option>
                                <option>Sheet</option>
                                <option>PDF</option>
                                <option>Word Doc</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Video Thumbnail</span>
                            </label>
                            <input type="text" placeholder="Thumbnail Url" name="thumbnail" className="input input-bordered" required />
                        </div>

                        <div className="form-control col-span-1 lg:col-span-2">
                            <label className="label">
                                <span className="label-text">Video Url</span>
                            </label>
                            <input type="text" placeholder="Youtube video link" name="videoUrl" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Playlist Url</span>
                            </label>
                            <input type="text" placeholder="Playlist Url" name="playlist" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                        </div>

                        <div className="form-control col-span-1 lg:col-span-2">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="text" placeholder="Your email" name="email" className="input input-bordered" required />
                        </div>

                        <div className='col-span-1 lg:col-span-2'>
                            <input className="btn w-full" type="submit" value="Add Resource" />
                        </div>
                    </form>
                </div>
            </div>

        </div>

    );
};

export default AddResource;